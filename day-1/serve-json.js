let http =  require('http');
let fs = require('fs')
console.log('Server will listen at : 127.0.0.1:3000 ');
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    //create a json
    let json_response = {
        status : 200 ,
        message : 'successful' ,
        result : [ 'sunday', 'monday', 'tuesay', 'wednesday'] ,
        code : 2000
    }
    console.log('Server Running');
    res.end( JSON.stringify(json_response) );
}).listen(3000);