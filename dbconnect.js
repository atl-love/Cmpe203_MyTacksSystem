var databaseUrl = "webpage"; // "username:password@example.com/mydb"
var collections = ["advertisement", "score"]
var db = require("mongojs").connect(databaseUrl, collections);
console.log("We are connected in dbconnect to! " + databaseUrl + ":" + collections);
