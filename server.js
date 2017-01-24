 var express = require("express");
 var app = express();

 app.get("/", function(req, res){
  //res.redirect('/Users/EWF/Desktop/HRR/MVP/index.html');
  res.end('In index.html yep!');
 });

 var port = process.env.PORT || 5000;
 app.listen(port, function() {
   console.log("Listening on " + port);
 });