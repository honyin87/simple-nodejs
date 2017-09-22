var express = require('express');
var router = express.Router();
var auth = require('./../modules/auth');

/* GET dashboard page */
router.get('/', auth , function(req, res, next) {


	db.collection('users').find({}).toArray(function(err,result){

		  console.log(result[0]);

		  var userList = {users:result};

		  console.log(userList);
 
		  res.render('users', userList);
      });

  
});

module.exports = router;
