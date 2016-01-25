// grab the things we need
var mongoose = require('mongoose');

// create a schema
var tweetSchema = new mongoose.Schema({
  count: String,
  _id: String
});

// the schema is useless so far
// we need to create a model using it
var Tweet = mongoose.model('Tweet', tweetSchema);

// make this available to our users in our Node applications
module.exports = Tweet;