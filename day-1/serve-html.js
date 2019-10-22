let http = require('http');
let fs = require('fs');

http.createServer(function (req, res) {
    console.log("Port Number : 3000");
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('index.html', (err, data) => {
        //checking for errors
        if (err) 
        throw err;
        console.log("Operation Success");
        //sending the response
        res.end(data); 
    });
}).listen(3000)