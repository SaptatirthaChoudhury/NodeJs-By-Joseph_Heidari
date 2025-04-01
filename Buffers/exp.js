const { Buffer, constants } = require("buffer");
//const buffer = require("buffer")

//const buffer = Buffer.alloc(2e2)
//console.log(constants);


/*
function allocateBuffer() {
    const hugeBuffer = Buffer.alloc(17179869184)
    console.log(hugeBuffer);
}

setInterval(() => {
    allocateBuffer()
}, 100)

*/

/*
Basic UTF-8 Decoding
 */
const buf = Buffer.from("hello");
console.log(buf);
console.log(buf.toString()); // Default encoding is "utf8", so it decodes the bytes back to "hello".

/**
 * Hex Encoding
 */

const buf2 = Buffer.from("hello");
console.log(buf2.toString("hex")); // "68656c6c6f" Converts each byte to two hex digits.

/**
 * Partial Decoding
 */

const buf3 = Buffer.from("hello");
console.log(buf3);
console.log(buf3.toString("utf8", 1, 4)); // "ell", Decodes bytes from index 1 to 3 (last index is exclusive).

/**
 * Base64 Encoding
 */

const buf4 = Buffer.from("hello");
console.log(buf4.toString("base64")); // "aGVsbG8=" Converts the buffer to a Base64 string

