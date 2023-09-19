var express = require('express');
var app = express();
var fs = require("fs");


app.get('/api/accomodation', function (req, res) {
	fs.readFile(__dirname + "/data/logements.json", 'utf8', function (err, data) {
		res.contentType("application/json");
		res.setHeader("Access-Control-Allow-Origin", req.header("Origin"))

		res.end(data);
	});
})

app.get('/api/accomodation/:id', function (req, res) {
	fs.readFile(__dirname + "/data/logements.json", 'utf8', function (err, data) {
		res.contentType("application/json");
		res.setHeader("Access-Control-Allow-Origin", req.header("Origin"))
		parsed_data = JSON.parse(data);

		if(req.params.id in parsed_data){
			res.end(JSON.stringify(parsed_data[req.params.id]));
		}else{
			res.statusCode = 404;
			res.end(JSON.stringify({}));
		}
	});
})

var server = app.listen(3001, function () {
	var host = server.address().address
	var port = server.address().port
	console.log("Example app listening at http://%s:%s", host, port)
})
