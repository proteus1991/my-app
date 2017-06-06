 var express = require('express');
 var app = express();
 var mongojs = require('mongojs');
 var db = mongojs('contactlist',['contactlist']);
 var bodyparser = require('body-parser');


app.use(express.static(__dirname + "/public"));
app.use(bodyparser.json());

app.get('/contactlist',function(req,res){
	//console.log('Server got the message.')
    db.contactlist.find(function(err,doc){
        // console.log(doc);
        res.json(doc);
    });

});

app.post('/contactlist',function(req,res){
     console.log(req);
    db.contactlist.insert(req.body,function(err,doc){
        res.json(doc);
    });
});

app.delete('/contactlist/:id', function(req, res){
    var id = req.params.id;
    console.log(id);
    db.contactlist.remove({_id:mongojs.ObjectId(id)},function(err,doc){
        console.log(err)
        res.json(doc);
    });
});

app.get('/contactlist/:id', function(req,res){
    var id = req.params.id;
    console.log(id);
    db.contactlist.findOne({_id:mongojs.ObjectId(id)},function(err,doc){
        res.json(doc);
    });
});

app.put('/contactlist/:id',function(req,res){
    var id = req.params.id;
    console.log(req.body.name)
    db.contactlist.findAndModify({query:{_id:mongojs.ObjectId(id)},
        update:{$set: {name:req.body.name, email: req.body.email, number:req.body.number}},
        new:true},function(err,doc){
            res.json(doc);
        });
});

app.listen(8080);
console.log("server runninng on port 8080");
