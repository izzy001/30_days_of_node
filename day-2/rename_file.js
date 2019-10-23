/* Two ways to rename a file in node js
1. Asyncronously
2. Synchronously
*/

//Asynchronous
let fs = require('fs');
//you have to pass the Relative path of the file from the Current working directory.
fs.rename('data.txt', 'new_data.txt', (err) => {
    if (err)
    throw err;
    console.log('File renamed successfully');
});

//To check it's Asynchronous nature!
console.log("This method is Asynchronous");

//Synchronous
let fs = require('fs');
//you have to pass the Relative path of the file from the Current working directory.
fs.renameSync('data.txt', 'newData.txt');
console.log('File renamed successfully');

//To check it's Synchronous nature !
console.log("This method is synchronous")
