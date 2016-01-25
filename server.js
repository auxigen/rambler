var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var Geohash = require("latlon-geohash");
var moment = require('moment');
var Twitter = require('twitter');

// configure app
app.use(morgan('dev')); // log requests to the console

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', express.static(__dirname + '/public/'));

var mongoUser = process.env.MONGO_USER || "";
var mongoPass = process.env.MONGO_PASS || "";
var mongoURL = process.env.MONGO_DB || "localhost";
var mongoPort = process.env.MONGO_PORT || "27017";

var port = process.env.PORT || 8080; // set our port

var mongoose = require('mongoose');
mongoose.connect('mongodb://' + mongoUser + ':' + mongoPass + '@' + mongoURL + ':' + mongoPort + '/rambler');
var Tweet = require('./models/tweet.js');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Successfully connected to mongo')
});


var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY || "",
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET || "",
  access_token_key: process.env.TWITTER_TOKEN_KEY || "",
  access_token_secret: process.env.TWITTER_TOKEN_SECRET || ""
});

client.stream('statuses/filter', { locations: '-180,-90,180,90' }, function(stream) {
    stream.on('data', function(tweet) {
        if (tweet.geo) {
            
            var geo = tweet.geo.coordinates;
            var geohash = Geohash.encode(geo[0], geo[1], 5),
                //created = moment.utc(tweet.created_at),
                text = tweet.text;
            Tweet.findOneAndUpdate({ _id: geohash }, { $inc: { count: 1 }},{upsert: true, new: true}, function(err){
                if (err) {
                    throw err;
                } else {
                    console.log("Inserted!");
                }
                
            });
        };
    });
 
    stream.on('error', function(error) {
        console.log(error);
        throw error;
    });
});

console.log(client);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);