const mysql = require('mysql2');
const password = process.env.password;

const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    database: "cluster_customers",
    password: password
})

connection.connect(function(err){
    if (err) {
        return console.error("Error: " + err.message);
    }
    else{
        console.log("Successful connection");
    }
})


module.exports = connection;