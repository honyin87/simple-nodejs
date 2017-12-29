var express = require('express');
var router = express.Router();

/* POST user update or add*/
router.post('/', function(req, res, next) {

	var user = db.collection('users').findOne({userID:(req.body.userID)}, function(err, user){
			//if user found , peform update
			if(user){
				if(req.body.pageMode == "Add"){
					console.log("Error - user already exist!");
					res.setHeader('Content-Type', 'application/json');
			    res.send(JSON.stringify({error:"user already exist!"}));

					return;
				}else{
					db.collection('users').update({_id: mongo.helper.toObjectID(user._id)},{ $set: getFormValue(req) });
					console.log('Update Complete');
				}
			}else{
				if(req.body.pageMode == "Edit"){
					console.log("Edit error - user not found!");
					res.setHeader('Content-Type', 'application/json');
			    res.send(JSON.stringify({error:"User Id '"+req.body.userID+"' not found!"}));
				}else{
					//else create user
					db.collection('users').insert(getFormValue(req));
					console.log('user '+req.body.userID+" created.");
				}
			}


		res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({}));

	});

});

function getFormValue(req){
	var data = req.body;

	//remove pageMode from update to user collection
	delete data.pageMode;

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
