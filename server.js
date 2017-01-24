var express = require("express");
var app = express();
var path    = require("path");
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Cypher = require('./cypherModel.js');
var cors = require('cors');
app.use(cors());
console.log(Cypher);
//var promises = require("express-promise");
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
  app.use(bodyParser.json());

var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };


app.use(express.static(__dirname));

mongoose.connect('mongodb://EWF:EWF123@ds127439.mlab.com:27439/hrr21-mvpdatabase', options);

var conn = mongoose.connection;

conn.on('error', console.error.bind(console, 'connection error:'));

conn.once('open', function() {

console.log("connection success!");





app.get("/", function(req, res){
  //res.redirect('/Users/EWF/Desktop/HRR/MVP/index.html');
  res.sendFile(path.join(__dirname+'/index.html'));
 });

app.get('/api/cyphers', function(req, res) {
    console.log('in get');
    Cypher.find({}, function (err, result) {
      if(err) {
        console.log(err);
        throw err;
      } else {
        console.log('results ', result);
        res.json(result);
      }
});
});

app.post('/api/cyphers', function (req, res) {
    var uncyphered = req.body.uncyphered;
    var cyphered= req.body.cyphered;

    var newCypher = {
      uncyphered:uncyphered,
      cyphered: cyphered
    }

    Cypher.findOne({uncyphered: uncyphered}, function(err, result) {
      if(err) {
        console.log(err);
        throw err;
      } else {


        Cypher.create(newCypher);
        res.end("Succesfully added to the server");
      }
    });
});



 var port = process.env.PORT || 5000;
 app.listen(port, function() {
   console.log("Listening on " + port);
 });

});

