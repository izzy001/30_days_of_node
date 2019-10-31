/* SHA512 hashing algorithm : Secure Hash Algorithm 512 comes under SHA2 and
 it is a cryptographic hash function which is used to generate hash values.
 It produces a 512-bit hash value which is known as message digest.  
 
 output key is usually 128 digits*/

let crypto = require('crypto');
let hash = crypto.createHash('sha512');
data = hash.update('nodejsera', 'utf-8')
gen_hash = data.digest('hex');
console.log("hash : " + gen_hash)