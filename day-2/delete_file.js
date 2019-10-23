/* Two ways to delete a file in node js
1. Asyncronously
2. Synchronously
*/

//Asynchronous
let fs = require('fs');
let filename = 'content.txt';
fs.unlink(filename, (err) => {
    if (err)
    throw err;
    console.log('File deleted successfully');
})

//Synchronous
let fs = require('fs');
var filename = 'data.txt';
fs.unlinkSync(filename);
console.log('File Deleted Successfully')