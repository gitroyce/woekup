var http = require('http')
  //, appid = require('./yahoo_appid.json')
  //, fs = require('fs')
  , AWS = require('aws-sdk')

AWS.config.loadFromPath('aws_auth.json')
//AWS.config.update({region: 'us-east-1'})

var s3 = new AWS.S3()


s3.listBuckets().
	on('success', function(res){
		console.log("success")
		console.log(res)
	}).
	on('error', function(res){
		console.log("I am error.")
		console.log(res)
	}).
	on('complete', function(){
		console.log("complete")
	}).
	send()




/*
http.get('http://where.yahooapis.com/v1/countries?appid='+appid, function(res) {

	var filename = 'countries.json'
	  , outstring = JSON.stringify(res, null, '\t')
	fs.writeFile()

	console.log("Got response: " + res.statusCode);
}).on('error', function(e) {
	console.log("Got error: " + e.message);
});
*/