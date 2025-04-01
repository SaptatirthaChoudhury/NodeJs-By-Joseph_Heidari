
const buffer = new ArrayBuffer(32);
console.log(buffer.byteLength); // Output: 32

const array = new Int16Array(buffer);

for (let i = 0; i < array.length; i++) {
    array[i] = i * i;
}

console.log(`${array} \n and byte length is ${array.byteLength}`);

const view = new DataView(buffer);

const person = { age: 42, height: 1.76 };

view.setUint8(0, person.age);
view.setFloat64(1, person.height);

console.log(view.getUint8(0));
console.log(view.getFloat64(1)); 

view.setInt32(0, 0x8BADF00D, true);  // Little-endian write.
console.log(view.getInt32(0, false)); // Read as Big-endian format 

console.log(process.memoryUsage());
