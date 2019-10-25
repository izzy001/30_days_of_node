/* console.time method is used to start a timer which can be used to compute the duration of the operation
*Each timer is identified using unique label 
*We use the same label while calling console.timeEnd method which is used to stop the timer
* Time is printed in milliseconds on stdout by console.timeEnd() method. */

console.time('division')
let x = 10;
let y = 20;
let result = x/y;

if (result == 2) {
    console.log("Result : %d" .result)
}else{
    console.log("Result: " + result);
}
console.timeEnd('division')