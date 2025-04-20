const fs = require("fs");
const path = require("path");

//const content = fs.readFileSync(path.join(__dirname, "text.txt"))
const content = fs.readFileSync("./File Systems/command.txt")
console.log(content);

console.log(content.toString("utf-8")) // Characters decoded with utf-8