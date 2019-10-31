/* Hashing the contents of a file using 
(a) Node.js streams
(b) Node.js filesytem
(c) MD5
cryptographic hashing algoriithm */

let crypto = require('crypto');
let fs = require('fs');

//algorithm to be used for HMAC
let algorithm = 'md5';
//secret to be used with HMAC
let secret = 'Rj289547';
//creating hmac object
let hmac = crypto.createHmac(algorithm, secret);

//reading the content of the file
let filename = "data.txt";
let file_data = fs.ReadStream(filename);

//passing the data to be hashed
file_data.on('data', function(data) {
    hmac.update(data)
  })

//Creating the hmac in the required format and writing it in file
file_data.on('end', function() {
    let gen_hmac = hmac.digest('hex')
    console.log('Hmac generated using ' + algorithm + ' \nHashed output is : ' + gen_hmac + ' \nFile name is : ' + filename);
    fs.writeFileSync(filename, gen_hmac)
})