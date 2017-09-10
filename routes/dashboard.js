var express = require('express');
var router = express.Router();
var auth = require('./../modules/auth');

/* GET users listing. */
router.get('/', auth ,function(req, res, next) {
  res.render('dashboard', {title: "Simple NodeJs"});
});

module.exports = router;
