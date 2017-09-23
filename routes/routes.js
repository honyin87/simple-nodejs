var express = require('express');
var router = express.Router();

var index = require('./index');
var users = require('./users');
var dashboard = require('./dashboard');
var login = require('./login');
var logout = require('./logout');
var userDetail = require('./user-detail');

router.use('/', index);
router.use('/login', login);
router.use('/logout', logout);
router.use('/dashboard', dashboard);
router.use('/users', users);
router.use('/user-detail', userDetail);

module.exports = router;