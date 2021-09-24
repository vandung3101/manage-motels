"use strict";

var express = require('express');

var router = express.Router();

var MainController = require('../app/controllers/MainController');

var DeviceController = require('../app/controllers/DeviceController');

router.post('/add', MainController.isLogin, MainController.isAdmin, DeviceController.addDevice);
router.post('/getData', MainController.isLogin, MainController.isAdmin, DeviceController.getData);
router.put('/update', MainController.isLogin, MainController.isAdmin, DeviceController.update);
router["delete"]('/delete', MainController.isLogin, MainController.isAdmin, DeviceController.canDelete, DeviceController["delete"]);
router.get('/getDevices', MainController.isLogin, MainController.isAdmin, DeviceController.getDevices);
module.exports = router;