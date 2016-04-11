var express = require('express');
var router = express.Router();
var db = require('../src/db.js');

// var yelp = require('node-yelp');
var dotenv = require('dotenv');
dotenv.load();


var oauthSignature = require('oauth-signature');
var n = require('nonce')();
var request = require('request');
var qs = require('querystring');
var _ = require('lodash');

/* Function for yelp call
 * ------------------------
 * set_parameters: object with params to search
 * callback: callback(error, response, body)
 */
router.get('/new/location/:location/sort/:sort', function(req, res, next) {
  console.log('Inside the activities route');
  var set_parameters =
  {location:req.params.location,sort:req.params.sort};
  //  {location:'Evergreen+CO',sort:'2'};
  function callback(error, response, body) {
    // res.send(body);
    console.log('*************');
    console.log('error: ', error);
    // console.log('!!!!!!!!!!!!!');
    // console.log('response: ', response);
    console.log('@@@@@@@@@@@@@');
    console.log('body: ', body);
  }
  var request_yelp = function(set_parameters, callback) {

    /* The type of request */
    var httpMethod = 'GET';

    /* The url we are using for the request */
    var url = 'http://api.yelp.com/v2/search';

    /* We can setup default parameters here */
    var default_parameters = {
      location: 'San+Francisco',
      sort: '2'
    };

    /* We set the require parameters here */
    var required_parameters = {
      // oauth_consumer_key : process.env.oauth_consumer_key,
      oauth_consumer_key : process.env.YELP_CONSUMER_KEY,
      oauth_token : process.env.YELP_TOKEN,
      oauth_nonce : n(),
      oauth_timestamp : n().toString().substr(0,10),
      oauth_signature_method : 'HMAC-SHA1',
      oauth_version : '1.0'
    };

    /* We combine all the parameters in order of importance */
    var parameters = _.assign(default_parameters, set_parameters, required_parameters);

    /* We set our secrets here */
    var consumerSecret = process.env.YELP_CONSUMER_SECRET;
    var tokenSecret = process.env.YELP_TOKEN_SECRET;

    /* Then we call Yelp's Oauth 1.0a server, and it returns a signature */
    /* Note: This signature is only good for 300 seconds after the oauth_timestamp */
    var signature = oauthSignature.generate(httpMethod, url, parameters, consumerSecret, tokenSecret, { encodeSignature: false});

    /* We add the signature to the list of paramters */
    parameters.oauth_signature = signature;

    /* Then we turn the paramters object, to a query string */
    var paramURL = qs.stringify(parameters);

    /* Add the query string to the url */
    var apiURL = url+'?'+paramURL;

    /* Then we use request to send make the API Request */
    // request(apiURL, function(error, response, body){
    //   return callback(error, response, body);
    request(apiURL, function(error, response, body){
      return callback(error, response, body);
        // console.log('*********** Error');
        // console.log('error: ', error);
        // console.log('!!!!!!!!!!!!! Response');
        // console.log('response: ', response);
        // console.log('@@@@@@@@@@@@@ Body');
        // console.log('body: ', body);
      // };
    });

  };
  request_yelp(set_parameters, callback);
});

router.get('/actgen/:id', function(req, res, next) {
  res.send({payload:"success"})
  // knex('users').orderBy('name', 'desc')
  console.log('in actgen');
});

router.get('/:id/members', function(req, res, next) {
  console.log('made it to the activities show with param id of: ', req.params.id);
  db.activityMembers(req.params.id).then(function(data) {
    console.log(' ACTIVITY member data: ', data);
      res.send({payload:data});
  });
});


router.get('/:id', function(req, res, next) {
  console.log('made it to the activities show with param id of: ', req.params.id);
  db.activity(req.params.id).first().then(function(data) {
    console.log(' ACTIVITY data: ', data);
      res.send({payload:data});
  });
});


module.exports = router;
