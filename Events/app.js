const EventEmitter = require("./events")

class Emitter extends EventEmitter { }
const myE = new Emitter();

function WhoAmI() {
    console.log("It's me Babayaga");
}

function profession() {
    console.log("Building million dollar tech");
}

function tech() {
    console.log("tech X");
}

myE.on("info", WhoAmI)
myE.on("info", profession)

myE.emit("info")
myE.emit("info")


myE.once("foo", tech)

myE.emit("foo")
myE.emit("foo")
myE.emit("foo")
