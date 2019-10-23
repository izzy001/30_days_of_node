/* There are two ways for reading a file in nodejs:
1. Reading the file Asynchronously
2. Reading the file Synchronously */

//Asynchronous
let fs = require('fs');

fs.readFile('message.txt', (err, data) => {
    if(err)
    throw err;

    console.log("Content: " + data)
});

//Synchronous
let fs = require('fs');
let filename = 'context.txt'; //Name of the file to be read
let content = fs.readFileSync(filename);
console.log('Content : ' + content)