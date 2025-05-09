const fs = require('fs/promises');
const path = require('path');

async function createFile(filePath, content = '') {
    try {

        // Get the directory path from the filepath
        const dir = path.dirname(filePath);
        console.log(`dir: ${dir}`)

        // Create directory based on given dir
        const createdDir = await fs.mkdir(dir, { recursive: true });
        console.log(`createdDir: ${createdDir}`)

        // create the file
        await fs.writeFile(filePath, content);
        console.log(`File created successfully at: ${filePath}`);


    } catch (error) {

        console.error(`Error creating file: ${error}`)
    }
}

let filePath = 'myFile.txt';
createFile(filePath, "new file created !")