/* Two ways to append a file in node js
1. Asyncronously
2. Synchronously
*/

//Asynchronously
let fs = require('fs');
new_data = "This data will be appended at te end of the file.";
fs.appendFile('input.txt', new_data, (err) => {
    if(err)
    throw err;
    console.log('The new_content was appended successfully');
});

//Synchronously
let fs = require('fs');
let content = "We are appending this file synchronously using node.js";
fs.appendFileSync('input.txt', content);
console.log("File Appended Successfully");
