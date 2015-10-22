var express = require('express');
var app = express();
var request = require('request');

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(express.static(__dirname + '/public'));

app.get('/hello',function(req,res){
	res.send("hello world!");

});

app.post('/play', function(req,res){
	//res.send(req.body.artist);

	var artist = req.body.artist;
	artist = artist.replace(/ /g,'+');
	console.log(artist);
	var result;

	request("https://www.googleapis.com/youtube/v3/search?part=snippet&q="+artist+"&type=video&key=AIzaSyAlEnZlBjyU3l3IzR7KyFURIMFMWMLecPU", function (error, response, body) {
	//request("http://www.google.com?q=flower", function (error, response, body) {
    //Check for error
	    if(error){
	        return console.log('Error:', error);
	    }

	    //Check for right status code
	    if(response.statusCode !== 200){
	        return console.log('Invalid Status Code Returned:', response.statusCode);
	    }

	    //All is good. Print the body
	    //console.log(body); // Show the HTML for the Modulus homepage.
	    //result = JSON.parse(body);
	    res.send(JSON.parse(body));

	});
	//console.log(result);

	//res.send(result);
});

app.listen(3000);