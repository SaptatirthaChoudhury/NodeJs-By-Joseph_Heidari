/*
new Blob([ data ], {type:"text/plain", endings: "transparent"||"native"})
new File([ data ], filename, {type:"text/plain", lastModified: Date.now()})
(data - Blob, ArrayBuffer, TypedArray, DataView, String (utf-8 string), a mixture)
File is a sub-class of Blob. Can often be used interchangeably. 
Once you have a Blob/File then you can use it:
- upload via fetch as a file or stream
- save it in the cache
- add a link in a webpage to the file
- display it as an image (if image)
- read the text contents (json, txt, html...) and:
  - display on page
  - parse the html, xml, json, etc
  - save in localStorage or cookie
ArrayBuffer - raw data as a fixed-length string of bytes. It is NOT an Array.
DataView - an interpretation of some raw bytes expressed as 8-bit, 16-bit, 32-bit,
  or 64-bit integers. Used to add or edit data in an ArrayBuffer. Like a wrapper 
  for ArrayBuffers if you need to edit them. It is a View of the Data from the ArrayBuffer
TypedArray - It is an Array-like view of raw bytes stored as 
  8-bit, 16-bit, 32-bit or 64-bit  integers, clamped integers, 
  signed and unsigned integers, or floats. 
*/