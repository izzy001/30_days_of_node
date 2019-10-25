/* The console module provides us with debugging console similar to javascript console mechanism web browsers provide us. It exports two components:
1. console class: it includes methods such as console.log(), console.warn(), console.error() which we can use to write to node.js streams.
2. Global console instance: this method is configured to write on process.stderr , process.stdout() and it can be used without exclusively calling the module require('console')
console.log() is used to print to stdout with a newline.
*/

//using ' ' to print
console.log('1 : hello world !');

//using " " to print
console.log("2 : this will also work");

let str = 'nodejsera';

let val = 25;

//printing a string
console.log(str); //3
//result => nodejsera

//printing a variable and replacing the 
//value of variable in place of %d
console.log('4: Value of val is : %d', val);
//result => 4: Value of val is : 25

//replacing a sring in place of %s
console.log('5: %s' , 'this will be printed after 5');
//result => 5: this will be printed after 5

//concatenating in console
console.log("6 : str = " + str)
//result => 6 : str = nodejsera
