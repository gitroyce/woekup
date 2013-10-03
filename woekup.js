var http = require('http')
  , AWS = require('aws-sdk')
AWS.config.loadFromPath('./aws_auth.json')
AWS.config.update({region: 'us-east-1'})

var appid

http://where.yahooapis.com/v1/countries?appid=[yourappidhere]
http.get("http://www.google.com/index.html", function(res) {
	console.log("Got response: " + res.statusCode);
}).on('error', function(e) {
	console.log("Got error: " + e.message);
});