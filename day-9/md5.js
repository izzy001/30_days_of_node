/* MD5 stands for message digest 5 and it is a widely used hash function which produces 128-bit hashes */

//Loading the crypto mdule in node.js
let crypto = require('crypto');

//creating hash object
let hash = crypto.createHash('md5');

//passing the data to be hashed
data = hash.update('nodejsera', 'utf-8');

//Creating the hash in the required format
gen_hash = data.digest('hex');

//Printing the output on the console
console.log("hash : " + gen_hash);


