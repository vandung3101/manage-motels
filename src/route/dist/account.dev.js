"use strict";

var express = require('express');

var router = express.Router();

var MainController = require('../app/controllers/MainController');

var AccountController = require('../app/controllers/AccountController');

router.get('/getData', MainController.isLogin, MainController.isAdmin, AccountController.getData);
router.post('/getaccount', MainController.isLogin, MainController.isAdmin, AccountController.getAccount);
router["delete"]('/delete', MainController.isLogin, MainController.isAdmin, AccountController.deleteAccount);
router.put('/update', MainController.isLogin, MainController.isAdmin, AccountController.updateAccount);
router.post('/create', MainController.isLogin, MainController.isAdmin, AccountController.isHasAccount, AccountController.create);
module.exports = router;