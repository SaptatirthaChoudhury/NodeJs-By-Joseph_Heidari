const fs = require("fs/promises");

(async () => {
    // Create command
    const CREATE_FILE = "create a file";
    const DELETE_FILE = "delete the file";
    const RENAME_FILE = "rename the file";
    const ADD_TO_FILE = "add to the file";

    const createFile = async (path) => {
        try {
            // we want to check whether or not we already have that file
            const existingFileHandle = await fs.open(path, "r");
            existingFileHandle.close();

            // We already have that file...
            return console.log(`The file ${path} already exists`);

        } catch (error) {
            // We don't have the file, now we should create it
            const newFileHandle = await fs.open(path, "w");
            console.log(`new file: ${newFileHandle}`);
            console.log('A new file was successfully created');
            newFileHandle.close();
        }
    }

    const deleteFile = async (path) => {

        // we want to check whether or not we already have that file

        /** 
        const existingFileHandle = await fs.open(path, "r");
        if (existingFileHandle) {
            // Remove the file
            fs.unlink(path, (err) => {
                if (err) {
                    console.error(`Error removing file: ${err}`);
                    return;
                }

                console.log(`File ${path} has been successfully removed.`);
            });

        }
        **/

        try {
            await fs.unlink(path);
            console.log("The file was successfully removed");

        } catch (e) {
            if (e.code === "ENOENT") {
                console.log("No file at this path to remove");
            } else {
                console.log("An error ocurred while removing the file: ");
                console.log(e);
            }
        }

    }

    const renameFile = async (oldPath, newPath) => {
        try {
            await fs.rename(oldPath, newPath);
            console.log("The file was successfully renamed");
        } catch (e) {
            if (e.code === "ENOENT") {
                console.log("No file at this path to rename, or the destination doesn't exist");
            }
        }

    }

    let addedContent;

    const addToFile = async (path, content) => {
        if (addedContent === content) return;
        try {
            const fileHandle = await fs.open(path, "a");
            fileHandle.write(content);
            addedContent = content;
            console.log("The content were added successfully");

        } catch (e) {
            console.log("An error occurred while removing the file: ");
            console.log(e);
        }
    }

    const commandFileHandler = await fs.open("./command.txt", "r");

    commandFileHandler.on("change", async () => {

        // get the size of our file
        const size = (await commandFileHandler.stat()).size;
        // allocate our buffer with the size of the file
        const buff = Buffer.alloc(size);
        // the location at which we want to start filling our buffer
        const offset = 0;
        // how many bytes we want to read
        const length = buff.byteLength;
        // the position that we want to start reading the file from
        const position = 0;

        // we always want to read the whole content (from beginning all the way to the end)
        const content = await commandFileHandler.read(
            buff,
            offset,
            length,
            position);

        const command = content.buffer.toString("utf-8");

        // create a file:
        // create a file <path>
        if (command.includes(CREATE_FILE)) {
            const filePath = command.substring(CREATE_FILE.length + 1);
            console.log(`create filepath: ${filePath}`);

            createFile(filePath);
        }

        // delete the file
        // delete the file <path>
        if (command.includes(DELETE_FILE)) { // delete the file
            const filePath = command.substring(DELETE_FILE.length + 1);
            deleteFile(filePath);
        }

        // rename file:
        // rename the file <old-path> to <new-path>
        if (command.includes(RENAME_FILE)) { // rename to file
            const _idx = command.indexOf(" to ");
            const oldFilePath = command.substring(RENAME_FILE.length + 1, _idx);
            const newFilePath = command.substring(_idx + 4);
            console.log(`rename Oldfilepath: ${oldFilePath} and Newfilepath: ${newFilePath}`);

            renameFile(oldFilePath, newFilePath);
        }

        // add to file:
        // add to the file <path> this content: <content>
        if (command.includes(ADD_TO_FILE)) { // add to file
            const _idx = command.indexOf(" this content: ");
            const filePath = command.substring(ADD_TO_FILE.length + 1, _idx);
            console.log(`add filepath: ${filePath}`);
            const content = command.substring(_idx + 15);
            console.log(`content: ${content}`);

            addToFile(filePath, content);
        }

    })

    // watcher ...
    const watcher = fs.watch('./command.txt');
    /**
     async iterator
     */
    for await (const event of watcher) {
        if (event.eventType === "change") {
            commandFileHandler.emit("change");
        }
    }

})();