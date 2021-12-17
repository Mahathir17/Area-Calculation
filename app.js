const express = require('express');
var bodyParser = require('body-parser')

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


// ================ROUTES==================

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/views/index.html');
});

app.get('/triangle', (req, res) => {
    res.sendFile(__dirname+'/views/triangle.html');
});

app.post('/triangle', (req, res) => {
    const { height, base } = req.body;
    const result = height * base * 0.5;
    res.send(`<br><br><br><br><br><br><br><br><br><br><br><br><br><h1 style="box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;"> Area Of Triangle Is: ${result} </h1>`)
});

app.get('/circle', (req, res) => {
    res.sendFile(__dirname + '/views/circle.html');
});

app.post('/circle', (req, res) => {
    const { radius } = req.body;
    const result = Math.PI * radius * radius;

    res.send(`<br><br><br><br><br><br><br><br><br><br><br><br><br><h1 style="box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;"> Area is: ${result} </h1>`)
});


// =========Exporting App==========
module.exports = app;