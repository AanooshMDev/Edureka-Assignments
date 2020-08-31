const express = require('express');
const app = express();
const port = 8900;
const mongo = require('mongodb');
const bodyParser = require('body-parser');
const MongoClient = mongo.MongoClient;
const mongourl = "mongodb://localhost:27017";
let db;
let collection = "locations";

//var fs = require('fs');
//var http= require('http');


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/locations', (req,res)=>{
    db.collection(collection).find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result);
    });
});
app.get('/:city', (req,res)=>{
    db.collection(collection).find({city:req.params.city}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result);
    });
});

app.post('/addLocations',(req,res)=>{
    console.log(req.body);
    db.collection(collection).insert(req.body,(err,result)=>{
        if(err) throw err;
        res.send("location added!");
    })
});

app.put('/updateLocations', (req,res)=>{
    db.collection(collection).update(
        {_id:req.body._id},
        {
            $set:{
                
                    name: req.body.name,
                    locality: req.body.locality,
                    city: req.body.city,
                    thumb: req.body.thumb,
                    aggregate_rating: req.body.aggregate_rating,
                    rating_text: req.body.rating_text,
                    min_price: req.body.min_price
                
                }
        },(err, result)=>{
                if(err) throw err;
                res.send('Data Updated!');
            }
        
    )
})

app.delete('/deleteLocation',(req,res)=>{
    db.collection(collection).remove({_id: req.body._id},(err,result)=>{
        if(err) throw err;
        res.send("Deleted!");
    });
});

MongoClient.connect(mongourl,(err,client)=>{
    if(err) console.log(err);
    db=client.db('anupracticedb');
    app.listen(port, (err)=>{
        if(err) throw err;
        console.log('Done');
    });
})







/*
var server= http.createServer((req, res)=>{
    fs.readFile('api.json', 'utf-8', (err,data)=>{
        if(err) throw err;
        res.write(data);
        res.end();
    })
});

server.listen(port);
*/

