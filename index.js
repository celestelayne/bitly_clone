var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
// var bootstrap = require('bootstrap');

var app = express();

// Sets view engine to ejs
// app.set('view engine', 'ejs');
app.use(express.static("public"))

app.use(bodyParser.urlencoded({extended: true}));
var views = path.join(process.cwd(), "views");
var urls = {}; // empty object
var randomString = urls['randomString'];

// Index routes page
app.get("/", function (req, res){
	var homePath = path.join(views, "home.html");
	res.sendFile(homePath);
});

app.post("/urls", function (req, res){
	var randomString = req.body.randomString;
	urls.push(randomString);
	// var index = urls.length - 1;
	res.send("View your url at localhost:3000/urls/" + randomString); // randomString
});

app.get("/urls/:key", function (req, res) {
	var url = urls[req.params.key];
	res.redirect(url); 
});

// App Server Listener
app.listen(3000, function (req, res){
	console.log("working");
});