const mysql = require('mysql');



const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '4321',
    database: 'bakery'
})

connection.connect((err) => {
    if (err){
        console.log(err.message);
    }
    console.log('db' + connection.state)
})