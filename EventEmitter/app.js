const eventEmitter = require("events");

class Emitter extends eventEmitter {}

const myE = new Emitter();

myE.on("foo", () => {
  console.log("An event occurred 1");
});

myE.on("foo", () => {
  console.log("An event occurred 2");
});

myE.on("foo", (x) => {
  console.log("An event with a parameter");
  console.log(x);
});

myE.once("bar", () => {
    console.log("An event occurred bar");
})
// myE.emit("foo")
// myE.emit("foo", "some text");

myE.emit("bar")
myE.emit("bar")

