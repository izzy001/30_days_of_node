let http = require('http');
let fs = require('fs');

http.createServer((req, res) => {
    console.log("Port Number : 3000");
    res.writeHead(200, {'Content-Type': 'video/mp4'});
    fs.exists('video.mp4', (exists)=> {
        if(exists) {
            let rstream = fs.createReadStream('video.mp4');
            rstream.pipe(res);
        } else {
            res.end("it's a 404 bruh!");
           
        }
    });
}).listen(3000)