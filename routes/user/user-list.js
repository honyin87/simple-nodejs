var express = require('express');
var router = express.Router();
var auth = require('./../../modules/auth');

/* GET user list */
router.get('/', auth , function(req, res, next) {

var offset = parseInt(req.query.offset);
var limit = parseInt(req.query.limit);
var search = {};
if(req.query.search){
	search = {"userID":eval("/"+req.query.search+"/")};
}
console.log(search);
	db.collection('users').find(search).skip(offset).limit(limit).toArray(function(err,result){
				db.collection('users').find(search).count(function(err, count) {
				    //console.log('There are ' + count + ' users in the database');
						returnResult = {};
						returnResult["total"] = count;
						returnResult["rows"] = result;
						//console.log(JSON.stringify(returnResult, null, 3));
						res.setHeader('Content-Type', 'application/json');
		    		res.send(JSON.stringify(returnResult, null, 3));
				});

      });


});

module.exports = router;
