var express = require('express');
var router = express.Router();




/* POST login info */
router.post('/', function(req, res, next) {

	var user = db.collection('users').findOne({userID:req.body.userid},function(err,user){
		
		  if (validatePassword(req.body.password, user.password)) {

		        // sets a cookie with the user's info
		        req.session.user = req.body.userid;
		        console.log('login successful..redirecting to dashboard');
		        res.redirect('/dashboard');
		      } else {
		        res.render('login', { title: "Simple NodeJs",error: 'Invalid email or password.' });
		        console.log('login failed.');
		      }
      });
});

/* To validate password using SALT hash*/
function validatePassword(password,hash){
	return bcrypt.compareSync(password, hash);
}



module.exports = router;
