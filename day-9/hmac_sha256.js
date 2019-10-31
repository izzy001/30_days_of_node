/* It is same as hasing the input with SHA256 hashing algorithm 
 the only difference is it involves hashing with the help of a secret key*/

 let crypto  = require('crypto');
 let hmac = crypto.createHmac('sha256', 'yoursecretkeyhere');
 data = hmac.update('nodejsera');
 gen_hmac = data.digest('hex');
 console.log("hmac : " + gen_hmac);