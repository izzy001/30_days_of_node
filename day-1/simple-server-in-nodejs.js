//simple-server-in-nodejs.js
let http = require('http');

let host = '127.0.0.1'
let port = 3000

/* Node notes
*createServer() methos takes a callback function as arguments.This callback is executed each time a request is received
*The tw arguments of createServer() method are
1.request: contains all the info related to client's request such as URL, custom headers, client info, e.t.c
2.response: used to return the data back to the client
*response.writeHead is an inbuilt method which is used to send the status code and the MIME type
*response.end() is an inbuilt function which is used to tell the server thhat the request has been fulfilled
*server.listen() is an inbuilt method used to bind to the port and start listening for incoming connections
**Note: response.end() can only be used to send one response while response.write() can be used for sending multiple responses
*/
let server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    console.log("server working!");
    response.end('Server Working Success');
});

server.listen(port,host, (err) => {
    if(err){
        return console.log('Error occured : ', err);
    }

    console.log('server is listening on ' + host + ':'+ port)
})