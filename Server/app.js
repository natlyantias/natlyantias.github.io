const express = require('express');
const app = express();
const cors = require('cors');

const db = require('./db');

app.use(cors());
app.use(express.json());


//create (possibly remove)
app.post('/insert', (request, response) =>{

});

//read (possibly remove)
app.get('/getAll', (request, response) =>{
    response.json({
        success: true
    });
});