var express = require('express');
var router = express.Router();
var auth = require('./../../modules/auth');

/* GET dashboard page */
router.get('/', auth , function(req, res, next) {

	res.render('user/users');

});

module.exports = router;
