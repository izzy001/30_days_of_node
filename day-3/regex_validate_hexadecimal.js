/* 
Validating Hexadecimal number using regular expression : This is also a very common example. 
In this we are checking/validating whether the provided string is a valid hexadecimal or not. 
Hexadecimal number ranges from :
[0-9]
[A-F]
[a-f] */
let str = 'FFFFFF'
let pattern = /^[a-fA-F0-9]+$/gim;

let res = str.match ( pattern );
if (res) {
    console.log("Valid Hexadecimal number");
}else{
    console.log("Not a valid Hexadecimal number")
}