/* Hashing a file */

let crypto = require('crypto');
let fs = require('fs');

let algorithm = 'sha256';
let hash = crypto.createHash(algorithm);

//reading the content of the file

let filename = "data.txt";
let file_data = fs.ReadStream(filename);

//passing the data to be hashed
file_data.on('data', function(data) {
    hash.update(data)
})

//Creating the hash in the required format and writing it in file
file_data.on('end', function() {
    let gen_hash = hash.digest('hex')
    console.log('Hash generated using ' + ' \nHashed output is : ' + gen_hash + '\nFile name is : ' + filename);
     fs.writeFileSync(filename, gen_hash)
})