var express = require('express');
var router = express.Router();




/* POST logout info */
router.post('/', function(req, res, next) {


	if(req.session.user){
		
		console.log("session reset");
		req.session.destroy();
		console.log("logout "+req.session.user);

		res.redirect('/');
		
	}
});


module.exports = router;
