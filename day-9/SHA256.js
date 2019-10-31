/* Secure Hash Algorithm 256 comes under SHA2
it is a cryptographoc hash function which is used to generate hash values
it produces a 256-bit */

let crypto = require('crypto');
let hash = crypto.createHash('sha256');
data = hash.update('nodejsera', 'utf-8');
gen_hash = data.digest('hex');
console.log("hash : " + gen_hash)