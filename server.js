var express = require('express');
var app = express();

// app.get('/',function(req,res){
// 	res.send("Hello world from my server.js")
// });

app.use(express.static(__dirname + "/public"));

app.get('/contactlist',function(req,res){
	console.log('Server got the message.')
	person1 = {
    	name:'Xiaohong Liu',
    	email:'xliu151@uotttawa.ca',
    	number:'(613)2763521'
    };
    person2 = {
    	name:'Dan Zhou',
    	email:'danzhou@gmail.com',
    	number:'(613)2620149'
    };
    person3 = {
    	name:'Zhiheng Yi',
    	email:'Zhihengyi@gmail.com',
    	number:'(613)6666666'
    };
var contactlist	= [person1,person2,person3];
res.json(contactlist);

});



app.listen(8080);
console.log("server runninng on port 8080");
