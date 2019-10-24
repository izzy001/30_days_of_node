let fs = require('fs');
let filename = 'data.txt'
let str = fs.readFileSync(filename).toString();
let pattern = /man/gim;
let myArray = str.match( pattern );
let len = myArray.length;
console.log("Occurences of pattern in the string is : " + len);