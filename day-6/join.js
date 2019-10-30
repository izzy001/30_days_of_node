//join method is used to join the elements into a string into a string and returns the string
//the elements will be separated by a specific separator while joining which will be passed while calling the method
//the default separator is ',' (comma)

arr = [5 , 2 , 8 , 5 , 6];
arr1 = ['a','b','c','d'];
console.log(arr);
console.log(arr1);

let str = arr.join();
let str1 = arr1.join(":");
console.log(str);
console.log(str1)