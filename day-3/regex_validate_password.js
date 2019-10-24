/* 
1. Validating Password using regular expression : As we all must have observed that in order to make the password strong we provide the user with some criteria to be met for creating a password such as :
2. Password must contain 1 capital letter [A-Z]
3. Password must contain 1 small letter [a-z]
4. Password must contain 1 number [0-9]
5. Password must contain 1 special character [!,@,#,$,%,^,. . . ] etc
6. Length of the password must be within the range [6 to 16]
So we created a regex to validate whether the provided password met all the constraints or not. If the provided password met all the constraints it will console "Valid password" and the snippet will console "invalid password " if any of the above mentioned condition is not met.
*/

let str = 'Aa#1aaabcde'
let pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

let res = str.match( pattern );
if(res){
    console.log("Valid password");
}else{
    console.log("Not a valid password")
}