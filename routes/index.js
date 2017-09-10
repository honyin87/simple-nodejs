var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
	console.log("User ID: "+req.session.user);
	if(req.session.user){
		
		console.log("session reset");
		req.session.destroy();
		console.log("session reset "+req.session.user);

		res.redirect('/dashboard');
		
	}else{
		res.render('login', {title: "Simple NodeJs"}); 
	}
  
});

module.exports = router;
