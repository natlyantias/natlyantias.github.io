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

// Don't import the `con` object from a separate file; use the `connection` object instead
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.listen(3000);

app.post("/", function(request, response){
    var reviewRate = request.body.reviewRate;
    var review = request.body.review;

    console.log(reviewRate, review);

    var sql = 'INSERT INTO review (reviewRating, reviewDesc) VALUES (?, ?)';
    var values = [reviewRate, review];

    // Use the `connection` object to execute the query, not the `con` object
    connection.query(sql, values, function(err, result){
        if(err) throw err;

        console.log("Data uploaded");
        response.redirect('/');
    });
});

app.post("/orders", function(request, response){
  var name = request.body.name;
  var email = request.body.email;
  var phone = request.body.phone;
  var address = request.body.address;
  var order = request.body.order;

  console.log(name, email, phone, address, order);

  var sql = 'INSERT INTO orders (name, email, phone, address, order_details) VALUES (?, ?, ?, ?, ?)';
  var values = [name, email, phone, address, order];

  connection.query(sql, values, function(err, result){
      if(err) throw err;

      console.log("Order uploaded");
      response.redirect('/');
  });
});


const stripe = require('stripe')('your_stripe_secret_key');

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: req.body.items,
    mode: 'payment',
    success_url: 'https://example.com/success',
    cancel_url: 'https://example.com/cancel',
  });
  res.json({ id: session.id });
});

