let fs = require('fs');
let filename = 'data.html';
let str = fs.readFileSync(filename).toString();
let pattern = /<(\"[^\"]*\"|'[^']*'|[^'\">])*>/gim;

let myarray = str.match( pattern );
let len = myarray.length;
console.log("Occurrences of pattern in the string is : " + len);