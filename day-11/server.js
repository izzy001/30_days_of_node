let express = require('express');
let app = express();

app.get('/', (req,res)=>{
    res.send('Hello World!')
})
app.listen(3000, ()=>{
    console.log('server is listening at 3000')
})