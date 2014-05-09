var fs = require("fs");
var config = JSON.parse(fs.readFileSync("/Applications/XAMPP/xamppfiles/htdocs/CMPE273_Project/config.json"));
var host = config.host;
var port = config.port;
var express = require("express");
//autocomplete=require('./routes/autocomplete');
var mongo = require("mongodb");
var mongoose = require('mongoose');


//connect to mongoose
var config = {"USER"    : "",
              "PASS"    : "",
              "HOST"    : "ec2-54-187-119-188.us-west-2.compute.amazonaws.com",         
              "PORT"    : "27017",        
              "DATABASE" : "webpage"};
var dbPath  = "mongodb://"+    
				config.HOST + ":"+     
				config.PORT + "/" 
				config.DATABASE;    
				

var app = express.createServer();

app.use(app.router);
app.use(express.static(__dirname + "/public"));

app.get("/", function(request, response){
	response.send("hello!");
	});
	
var AdvSchema = new mongoose.Schema({
  advName: String
, advId: Number
, clicks: Number
, cpc: Number
, advLink: String
, keywords: String
});

var advertisement = mongoose.model('advertisement', AdvSchema);
advertisement.findOne({ advId: 101 }, function(err, id) {
  if (err) return console.error(err);
  console.dir(id);
});

app.get("/advertisement", function(request, response){
	response.send(id);
	});
//db.createCollection('advertisement', {strict:true}, function(err, collection) {});
mongoose.connect(dbPath);
//mongoose.model('advertisement', new mongoose.Schema({advName: String}), 'advertisement');
	console.log("We are connected! " + host + ":" + port);
	app.get('/advertisement', function(request, response){
		advertisement.find(function(request, data){
		//mongoose.model('advertisement').find(function(err, data){
			response.send(data);
		});
	});
//app.listen(port, host);

function getAdvertiser(advId,callback){	db.open(function(error){
	//var db = new mongo.Db("webpage", new mongo.Server(host,port,{}));
	mongoose.connect(dbPath);
		console.log("We are connected! " + host + ":" + port);
	mongoose.model('advertisement', {advName: String});
	app.get('/advName', function(request, response){
		mongoose.model('users').find(function(err,advertisement){
			res.send(advertisement);
		});
	});
		
		db.collection("advertisement", function(error, collection){
			console.log("We have the collection");
			collection.find({"advId":101},function(error, cursor){
				cursor.toArray(function(error, advertisements){
					if(advertisements.length == 0){
						callback(false);
						//console.log("No advertiser found");
					} else {
						callback(advertisements[0]);
						//console.log("Found a user", advertisements[0]);
					}
				});
			});
		});
	});
}