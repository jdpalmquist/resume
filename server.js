var express = require('express');
var app = express();
var port = 3456;

app.use('/', express.static(__dirname + '/public'));

app.listen(port, function(){ console.log('Server now listening to port ', port); });