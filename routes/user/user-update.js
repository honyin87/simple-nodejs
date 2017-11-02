var express = require('express');
var router = express.Router();

/* POST user update or add*/
router.post('/', function(req, res, next) {

	var user = db.collection('users').findOne({userID:(req.body.userID)}, function(err, user){
			//if user found , peform update
			if(user){
				
				db.collection('users').update({_id: mongo.helper.toObjectID(user._id)},{ $set: getFormValue(req) });
				console.log('Update Complete');
			}else{
				//else create user
				console.log('user: '+user);
			}


		res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({}));

	});

});

function getFormValue(req){
	var data = req.body;

	if(data.password){
		let hash = bcrypt.hashSync(data.password, null, null);
			data.password = hash;
	}else{
		delete data.password;
	}

	console.log(data);
	return data;

}



module.exports = router;
