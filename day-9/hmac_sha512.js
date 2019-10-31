let crypto = require('crypto');
let hmac = crypto.createHmac('sha512', 'yoursecretkeyhere');
let data = hmac.update('nodejsera');
gen_hmac = data.digest('hex');
console.log("hmac : " + gen_hmac)