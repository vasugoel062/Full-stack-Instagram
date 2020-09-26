var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    // db password
    password: 'vasugoel6',
    // db instance name 
    database: 'insta_clone'
})
connection.connect();
console.log("connected to db");
module.exports = connection;