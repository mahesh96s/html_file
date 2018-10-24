var express = require('express');  
var app = express();
app.engine('pug', require('pug').__express);
app.set('view engine', 'pug');
app.get('/', function (req, res) {  
    res.render('index',{ title: 'Hey!', message: 'hi'})
});

app.listen(3000, function () {  
    console.log(' http://localhost:3000/')
});