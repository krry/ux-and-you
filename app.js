var express = require('express');
var http = require('http');
var path = require('path');
var morgan = require('morgan');
var app = express();

var port = process.env.PORT || 2222;

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile)

app.use(express.static(path.join(__dirname, '/public')));
app.use(require('body-parser')());
app.use(require('method-override')());

app.set('port', port);

app.get('/', function(req, res) {
  res.render('ux+you.html');
});

app.get('/demo', function(req, res) {
  res.render('index.html');
});

app.get('/hero-guidelines', function(req, res) {
  res.render('hero-guidelines.html')
})

app.listen(app.get('port'));