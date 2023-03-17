const mysql = require('mysql');



var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '4321',
    database: 'bakery'
})

con.connect(function(err){
    if(err) throw err;
    console.log("Database is connected");
});

module.exports = con;