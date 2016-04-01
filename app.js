var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

var Data = {
	img:['1','2','3','4','5','6','7','8','9','10','11','12',],
	title:['PaperLife','TreeofJustice','Where is my Ring','Cool what',
	'Shadow circus','Dream of Art','what science','Time is Money',
	'unanus','Running Rabit','實境之書','Morz',],
}

app.use('/assets',express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next();
});

app.get('/', function(req, res) {
	res.render('index');
});

app.listen(port);
