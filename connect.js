var mongo = require("mongodb");
var host = "ec2-54-187-119-188.us-west-2.compute.amazonaws.com"
var port= mongo.Connection.DEFAULT_PORT;
var db = new mongo.Db("webpage", new mongo.Server(host,port,{}));

function getAdvertiser(advId,callback){	db.open(function(error){
		console.log("We are connected! " + host + ":" + port);
		
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

getAdvertiser(101, function(adv){
	if(!adv){
		console.log("No advertiser found with id 101");
	} else {
		console.log("We have a user: ", adv);
	}
});