const fs = require("fs/promises");


(async () => {
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
    // commands
    const CREATE_FILE = "create a file";

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
            console.log(`filePath: ${filePath}`)
            createFile(filePath);
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