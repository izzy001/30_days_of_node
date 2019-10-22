let http = require('http');
let fs = require('fs');

http.createServer((req, res) => {
    console.log('Port Number : 3000');
    res.writeHead(200,  {'Content-Type': 'audio/mp3'});
    fs.exists('audio.mp3', function(exists){
        if(exists) {
            let rstream = fs.createReadStream('audio.mp3');
            rstream.pipe(res);
        } else {
            res.end("it's a 404 bruh!")
        }
    })
}).listen(3000)