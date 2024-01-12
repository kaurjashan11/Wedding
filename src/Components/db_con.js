var mysql = require('mysql');
var db = mysql.createConnection({
	hostname:"localhost",
	user:"root",
	password:"root",
	database:"wedding"
});
db.connect(function(err)
{
	if(err)
		throw err;
});
module.exports=db;