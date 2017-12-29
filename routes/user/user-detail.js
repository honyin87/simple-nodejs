var express = require('express');
var router = express.Router();
var auth = require('./../../modules/auth');

/* GET dashboard page */
router.get('/:page_mode/:userid', auth , function(req, res, next) {

	console.log(req.params.page_mode);

	if(req.params.userid != 0){
		db.collection('users').findOne({userID:req.params.userid},function(err,result){

				//add view mode to JSON result
				result["pageMode"] = camelCase(req.params.page_mode);

			  console.log(result);
			  res.render('user/user-detail',result);

	      });
		}else{
			//Page Mode - Add
			result = {};
			result["pageMode"] = "Add";
			res.render('user/user-detail',result);
		}


});

function camelCase(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = router;
