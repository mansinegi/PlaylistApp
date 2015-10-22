var express = require('express');
var app = express();
var request = require('request');
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(express.static(__dirname + '/public'));

app.post('/play', function(req,res){
	var artist = req.body.artist;
	artist = artist.replace(/ /g,'+');

	request("https://www.googleapis.com/youtube/v3/search?part=snippet&q="+artist+"&type=video&key=AIzaSyAlEnZlBjyU3l3IzR7KyFURIMFMWMLecPU", function (error, response, body) {
	    if(error){
	        return console.log('Error:', error);
	    }

	    if(response.statusCode !== 200){
	        return console.log('Invalid Status Code Returned:', response.statusCode);
	    }
	    res.send(JSON.parse(body));

	});
	
});

app.listen(3000, function(){
	console.log("App running on http://localhost:3000");
});