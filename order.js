function redirectToOrder() {
  window.location.href = "orderindex.html";
}

document.getElementById("order-button").addEventListener("click", redirectToOrder);

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'natly',
  password: 'jUN24ior20$',
  database: 'bakery'
});

connection.connect();

connection.query('SELECT * FROM orders', (error, results, fields) => {
  if (error) {
    console.error('Failed to retrieve orders:', error);
    return;
  }
  console.log('Orders:', results);
});

connection.end();
