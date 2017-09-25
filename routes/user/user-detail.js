var express = require('express');
var router = express.Router();
var auth = require('./../../modules/auth');

/* GET dashboard page */
router.get('/:userid', auth , function(req, res, next) {

	console.log(req.params.userid);
	db.collection('users').findOne({userID:req.params.userid},function(err,result){

		  console.log(result);
		  res.render('users', {});

      });

  
});

module.exports = router;
