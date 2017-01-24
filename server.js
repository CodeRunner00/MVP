var express = require("express");
var app = express();
var path    = require("path");
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Cypher = require('./cypherModel.js');
console.log(Cypher);
//var promises = require("express-promise");

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

app.get('/api/cyphers', function(req, res, next) {

    Cypher.find({})
      .then(function (cyphers) {
        res.json("in get ", cyphers);
      })
      .fail(function (error) {
        next(error);
      });

});

app.post('/api/cyphers', function (req, res, next) {
    var uncyphered = req.body.uncyphered;
    var cyphered= req.body.cyphered;



    Cypher.findOne({uncyphered: uncyphered}, function(err, result) {
      if(err) {
        console.log(err);
        throw err;
      } else {
        console.log('results ', result);
        res.send(result);
      }
    });

  //   ({uncyphered: uncyphered})
  //     .then(function (match) {
  //       if (match) {
  //         res.send(match);
  //       } else {
  //         var newCypher = {
  //           uncyphered: uncyphered,
  //           cyphered: cyphered
  //         };
  //         return Cypher.create(newCypher);
  //       }

  //     })
  //     .then(function (createdCypher) {
  //       if (createdCypher) {
  //         res.json(createdCypher);
  //       }
  //     })
  //     .fail(function (error) {
  //       next(error);
  //     });
   });


 var port = process.env.PORT || 5000;
 app.listen(port, function() {
   console.log("Listening on " + port);
 });

});

