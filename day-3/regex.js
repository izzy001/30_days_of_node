/* Regular Expressions or regex or regexp or sometimes also referred to as rational expressions are :
*A sequence of characters expressing a pattern for further matching in a longer string.
*It is a Text string to describe a pattern which can be used for searching.
*They are a way to match pattern in the data and extracting the required information out of the data.
*Regex provide a way to find patterns in the data. Finding patterns in data is one of the most commonly performed task in computing.
*In everyday life we tend to find a lot of patterns. They could be email patterns , they could be phone numbers , keywords of a programming language, special characters , html tags and so on.
 */

 /* Creating a regular expression:
 *There are two ways of creating a regular expression:
 1. By regular expression literals:In this , the pattern to be matched is enclosed between the / (slashes)
 2. By calling the construction function: In this, the pattern to be matched comes within the constructor function RegExp
 */

 //regular expression literals
 let reg = /ab*/;
 //It will match a , ab, abb , abbbbbb , abbbbbbb and so on.
//But will not match b, bc, abc,aba , etc.


//calling constructor function
let reg = new RegExp('ab*');
//It will match a , ab, abb , abbbbbb , abbbbbbb and so on.
//But will not match b, bc, abc,aba , etc.