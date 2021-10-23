// this is a test file
const express = require('express');
const bodyParser = require('body-parser'); 
const mongoose = require('mongoose');


const app = express();

app.get('/', (req, res) => {
    res.send("Connected");
})



// port = process.env.PORT || 5000


app.listen(80, () => {
    console.log('listening on port 80')
})