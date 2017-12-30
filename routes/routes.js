var express = require('express');
var router = express.Router();

var index = require('./index');
var users = require('./user/users');
var dashboard = require('./dashboard');
var login = require('./login');
var logout = require('./logout');
var userDetail = require('./user/user-detail');
var userList = require('./user/user-list');
var userUpdate = require('./user/user-update');
var userDelete = require('./user/user-delete');
var invalidSession = require('./invalid-session');

router.use('/', index);
router.use('/login', login);
router.use('/logout', logout);
router.use('/dashboard', dashboard);
router.use('/users', users);
router.use('/user-detail', userDetail);
router.use('/user-list', userList);
router.use('/user-update', userUpdate);
router.use('/user-delete', userDelete);
router.use('/invalid-session', invalidSession);

module.exports = router;
