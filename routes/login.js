var express = require('express');
var router = express.Router();



/* POST login info */
router.post('/', function(req, res, next) {
  if (req.body.password === 'admin') {
        // sets a cookie with the user's info
        req.session.user = req.body.userid;
        console.log('login successful..redirecting to dashboard');
        res.redirect('/dashboard');
      } else {
        res.render('login', { title: "Simple NodeJs",error: 'Invalid email or password.' });
        console.log('login failed.');
      }
});

module.exports = router;
