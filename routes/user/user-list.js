var express = require('express');
var router = express.Router();
var auth = require('./../../modules/auth');

/* GET dashboard page */
router.get('/', auth , function(req, res, next) {


	db.collection('users').find({}).toArray(function(err,result){	  

		  	res.setHeader('Content-Type', 'application/json');
    		res.send(JSON.stringify(result, null, 3));
      });

  
});

module.exports = router;
