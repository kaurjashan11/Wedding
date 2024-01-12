var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./db_con.js');
var session  = require('express-session');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({secret:"test123!@#"}));

// app.get('/',function(req,res){
// 	res.send("<h1>Welcome to express js class</h1>");
// });

// app.get('/aboutus',function(req,res){
// 	res.send("<h1>Welcome to my website</h1>");
// });

// app.get('/login',function(req,res){
// 	res.sendFile(__dirname+'/login.html');
// });

// app.get('/login_submit',function(req,res){
// 	res.send("<h1>Email:- "+req.query['email']+" Password "+req.query['password']+"</h1>");
// });

// app.get('/signup',function(req,res){
// 	res.sendFile(__dirname+'/signup.html');
// });

// app.post('/signup_submit',function(req,res){
// 	//to fetch textbox value in post method we will use->  req.body.textboxname;
// 	let name = req.body.name;
// 	let email = req.body.email;
// 	let pass = req.body.pass;
// 	let gen = req.body.gen;
// 	let mobile = req.body.mobile;
	
// 	res.send("<h2>Name:- "+name+"<br> email:- "+email+"<br>password:- "+pass+"<br>gender:- "+gen+"<br>mobile:- "+mobile+"</h2>");
// });

app.get('/signup', function(req,res){
	res.sendFile(__dirname+"/Signup.js");
});
app.post('/signup_sbt',function(req,res){
	let {name,gmail,pass}=req.body;
	let currentdate = new Date();
	let month = currentdate.getUTCMonth()+1;
	let doj = currentdate.getFullYear()+"-"+month+"-"+currentdate.getDate();
	let sql = "insert into users(uname,email,password,doj) values('"+name+"','"+gmail+"','"+pass+"','"+doj+"')";
	//res.send(sql);
	db.query(sql,function(err,result){
		if(err)
			throw err;
		if(result.insertId>0){
			req.session.msg="Employee registered";
			res.redirect('http://localhost:8081/emp_msg');
		}
		else{
			req.session.msg="Can not register employee";
			res.redirect('http://localhost:8081/emp_msg');
		}
		
	});
});
app.get('/emp_msg',function(req,res){
	res.send("<h1>"+req.session.msg+"</h1>");
});

// app.get("/s1", function(req,res){
// 	req.session.msg="Hello G10";
// 	res.send("<h1>Click on link to see msg set in session card</h1> <a href=\"http://localhost:8081/s2\">Click here</a>");
// });
// app.get("/s2", function(req,res){
// 	res.send("Msg from session card:- "+req.session.msg);
// });

app.listen(8081,function(){
	console.log("Server running at 8081 port");
});

//onLine session handling:- session card is created on server temp directory
//offline session handling:- cookie

/*
when we login we give our un pass
inbox will be displayed and an primary key is stored in session card which will accessed each time we request any secure page or link on website.

npm install express-session

var session  = require('express-session');
app.use(session({secret:"test123!@#"}));
req.session.keyname=value;
*/