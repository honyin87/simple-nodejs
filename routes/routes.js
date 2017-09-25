var express = require('express');
var router = express.Router();

var index = require('./index');
var users = require('./user/users');
var dashboard = require('./dashboard');
var login = require('./login');
var logout = require('./logout');
var userDetail = require('./user/user-detail');
var userList = require('./user/user-list');

router.use('/', index);
router.use('/login', login);
router.use('/logout', logout);
router.use('/dashboard', dashboard);
router.use('/users', users);
router.use('/user-detail', userDetail);
router.use('/user-list', userList);

module.exports = router;