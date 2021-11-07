const express = require('express');
const app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))

require('./routes/customers.routes')(app);

app.listen(3000, () =>{
    console.log(`Example app listening at http://localhost:${3000}`)
})


