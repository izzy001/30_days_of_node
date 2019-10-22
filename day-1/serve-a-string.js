let http = require('http')

let host = '127.0.0.1'
let port = 3000

let server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World!"); //response.write() is the inbuilt method which is used to send the response
    response.end();
});

server.listen(port,host, (err) => {
    if(err){
        return console.log('Error occured : ', err);
    }

    console.log('server is listening on ' + host + ':' + port);
});

