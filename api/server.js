const express = require('express'),
      bodyParser = require('body-parser'),
      locations = require('./routes/locations')

const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/api/locations', locations)
app.listen(3001)
