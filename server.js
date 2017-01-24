 var express = require("express");
 var app = express();
 var path    = require("path");
  var mongoose = require('mongoose');
  var bodyParser = require('body-parser')
  app.use(bodyParser.json());

var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };


  app.use(express.static(__dirname));

  mongoose.connect('mongodb://ds127439.mlab.com:27439/hrr21-mvpdatabase', options);

var conn = mongoose.connection;

conn.on('error', console.error.bind(console, 'connection error:'));

conn.once('open', function() {

  console.log("connection success!");

app.get("/", function(req, res){
  //res.redirect('/Users/EWF/Desktop/HRR/MVP/index.html');
  res.sendFile(path.join(__dirname+'/index.html'));
 });

 var port = process.env.PORT || 5000;
 app.listen(port, function() {
   console.log("Listening on " + port);
 });

});

