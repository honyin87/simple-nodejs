var express = require('express');
var router = express.Router();

/* POST user update or add*/
router.post('/', function(req, res, next) {

	var user = db.collection('users').findOne({userID:(req.body.userID)}, function(err, user){
			//if user found , peform update
			if(user){

					db.collection('users').remove({userID:(req.body.userID)});
					console.log('Delete Complete');

			}else{

					console.log("Delete error - user not found!");
					res.setHeader('Content-Type', 'application/json');
			    res.send(JSON.stringify({error:"User Id '"+req.body.userID+"' not found!"}));

			}


		res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({}));

	});

});



module.exports = router;
