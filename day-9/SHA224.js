/* SHA224: Secure Hash Algorithm 224 comes under SHA2 
it is a cryptograhic hash function which is used to generate hash values.
It produces a 224-bit hash value which is known as message digest. 
digits of 56
*/



let crypto = require('crypto');
let hash = crypto.createHash('sha224');
data = hash.update('nodejsera', 'utf-8');
gen_hash = data.digest('hex');
console.log("hash : " + gen_hash);