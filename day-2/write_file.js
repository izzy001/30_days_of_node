/* Two ways to write a file in node js
1. Asyncronously
2. Synchronously
*/

//Asynchronously
let fs = require('fs');
let content = "This is a file content";
fs.writeFile('message.txt', content, (err) => {
    if (err)
    throw err;
    console.log('It\'s saved!');
})

//Synchronously
let fs = require('fs');
let content = "We are writing this file synchronously using node.js"
fs.writeFileSync('content.txt', content);
console.log("File Written Successfully")