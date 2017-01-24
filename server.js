 var express = require("express");
 var app = express();
 var path    = require("path");
 console.log('before static');
  app.use(express.static(__dirname));

 app.get("/", function(req, res){
  //res.redirect('/Users/EWF/Desktop/HRR/MVP/index.html');
  res.sendFile(path.join(__dirname+'/index.html'));
 });

 var port = process.env.PORT || 5000;
 app.listen(port, function() {
   console.log("Listening on " + port);
 });