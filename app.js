const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'natly',
  password: 'jUN24ior20$',
  database: 'bakery'
});

connection.connect((error) => {
  if (error) {
    console.error('Failed to connect to database:', error);
    return;
  }
