const express = require('express');
const app = express();
const cors = require('cors');

var con = require('./db');
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors());
app.use(express.json());


app.post("/", function(request, response){
    var reviewRate = req.body.reviewRate;
    var review = req.body.review;
    
    console.log(reviewRate, review);

    var sql = 'INSERT into review (reviewRating, reviewDesc) values ?';

    var values = [reviewRate, review];
    
    con.query(sql, [values], function(err, result){
        if(err) throw err;

        console.log("Data uploaded");
        response.redirect('/');
    });
});
