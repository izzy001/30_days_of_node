/* filter method is used to create a new array , 
filled with all the elements that passes a test condition usually passed as a function , 
from the current array . */

arr = [2,4,6,8,10];
arr1 = [2,3,4,6,8];
function even(value){
    if ((value % 2) == 0) {
        return true;        
    }else{
        return false;
    }
}

let out = arr.filter(even);
let out1 = arr1.filter(even);
console.log("Output of array 1 : " + out);
console.log("Output of array 2 :" + out1);