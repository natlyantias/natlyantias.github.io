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
  console.log("Connected to MySQL!");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.listen(3000);

app.post("/reviews", function(request, response){
    var reviewRate = request.body.reviewRate;
    var review = request.body.review;

    console.log(reviewRate, review);

    var sql = 'INSERT INTO review (reviewRating, reviewDesc) VALUES (?, ?)';
    
    connection.query(sql, [reviewRate, review], function(err, result){
        if(err) throw err;

        console.log("Data uploaded");
        response.redirect('/');
    });
});
