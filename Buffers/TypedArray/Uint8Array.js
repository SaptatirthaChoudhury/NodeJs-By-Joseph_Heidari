const { Buffer } = require('buffer');


// Create a buffer
// const buf1 = Buffer.alloc(9);
// buf1.writeInt32BE(1232173567, 5);
// console.log(buf1.length);
// console.log(buf1);

// const buf2 = Buffer.alloc(4);
// buf2.writeInt32BE(2147483647, 0);
// console.log(buf2.length);
// console.log(buf2);

// const buf3 = Buffer.alloc(4);
// buf3.writeInt32BE(-2147483648,0);
// console.log(buf3.length);
// console.log(buf3);

// const buf4 = Buffer.alloc(5)
// buf4.writeInt32BE(0x12345678, 0);
// console.log(buf4.length);
// console.log(buf4);

//const uint8 = new Uint8Array(4); 
//uint8[0] = 255; // Max value for 8-bit unsigned
//uint8[1] = 128;
//uint8[2] = 300; // Clamped to 255 (overflow)
//uint8[3] = -19999999;  // Clamped to 255 (underflow)
//console.log(uint8);

const buffer = new ArrayBuffer(4); // 4 bytes
console.log(buffer);

const uint8 = new Uint8Array(buffer);
const uint32 = new Uint32Array(buffer);

uint8[0] = 0x12;
uint8[1] = 0x34;
uint8[2] = 0x56;
uint8[3] = 0x78;
console.log(uint8);   // Uint8Array [ 18, 52, 86, 120 ]
console.log(uint32);  // Uint32Array [ 305419896 ] (0x12345678 in big-endian)
