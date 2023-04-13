const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'natly',
  password: 'jUN24ior20$',
  database: 'bakery'
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database!");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // serve static files in the public directory
app.listen(3000);

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    var reviewRate = req.body.reviewRate;
    var review = req.body.review;

    console.log(reviewRate, review);

    var sql = 'INSERT INTO review (reviewRating, reviewDesc) VALUES (?, ?)';
    var values = [reviewRate, review];

    connection.query(sql, values, function(err, result){
        if(err) throw err;

        console.log("Data uploaded");
        res.redirect('/');
    });
});

app.post("/orders", function(req, res){
  var name = req.body.name;
  var email = req.body.email;
  var phone = req.body.phone;
  var address = req.body.address;
  var order = req.body.order;

  console.log(name, email, phone, address, order);

  var sql = 'INSERT INTO orders (name, email, phone, address, order_details) VALUES (?, ?, ?, ?, ?)';
  var values = [name, email, phone, address, order];

  connection.query(sql, values, function(err, result){
      if(err) throw err;

      console.log("Order uploaded");
      res.redirect('/');
  });
});

app.get("/checkout", function(req, res){
    res.sendFile(__dirname + "/checkoutindex.html");
});

app.post("/checkout", function(req, res){
    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;
    var address = req.body.address;
    var order = req.body.order;

    console.log(name, email, phone, address, order);

    // Do something with the order data

    res.redirect('/');
});
