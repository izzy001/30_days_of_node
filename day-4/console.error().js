/* The method is used to print to stderr.
    * Multiple arguments can be passed where first argument is primary
    * and remaining arguments are substitution values
 */

 let x = 10;
 let y = 20;
 let result = x/y;

 if(result == 2) {
     console.log("Result : %d".result)
 }else{
     console.error("Error : Error in Positioning Operands")
 }