const { Buffer } = require("buffer");

const memoryContainer = Buffer.alloc(5); // 5 bytes (40 bits)

console.log(memoryContainer); // If we log this container then we'll see all the elements are initialized to zero

memoryContainer[0] = 0xf4;
memoryContainer[1] = 0x34;
memoryContainer.writeInt8(-34, 2);
memoryContainer[3] = 0xb6;
memoryContainer[4] = 0b0110;


console.log(memoryContainer);
console.log(memoryContainer[0]);
console.log(memoryContainer[1]);
console.log(memoryContainer.readInt8(2));
console.log(memoryContainer[3]);
console.log(memoryContainer[4]);



console.log(memoryContainer[4].toString("binary"));
