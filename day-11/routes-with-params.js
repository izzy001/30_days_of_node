let express = require('express');
let fs = require('fs');

let app = express()

app.get('/', (req,res) => {
    res.send('Simple Example of routes!');
})

app.get('/signup', (req, res) => {
    // this is how we will receive params from front-end

    let name = req.query.name;
    let email = req.query.email;
    let password = req.query.password;

    //for demo purpose
    console.log(name + '' + email + '' + password);

    /** 
     * Store this in a database and perform further processing
     * */ 
    res.send("In signup module")
});

app.listen(3000, ()=>{
    console.log('Server is listening at 3000')
})