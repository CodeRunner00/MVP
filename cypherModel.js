var mongoose = require('mongoose');

var CypherSchema = new mongoose.Schema({
  uncyphered: String,
  cyphered: String
});

module.exports = mongoose.model('Cypher', CypherSchema);