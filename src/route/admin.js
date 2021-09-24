const express = require('express');
const router = express.Router()

const MainController = require('../app/controllers/MainController');
const AdminController = require('../app/controllers/AdminController');

router.get('/home',MainController.isLogin, MainController.isAdmin, AdminController.renderHome);
router.get('/rooms',MainController.isLogin, MainController.isAdmin, AdminController.renderRoom);
router.get('/devices',MainController.isLogin, MainController.isAdmin, AdminController.renderDevice);
router.get('/accounts',MainController.isLogin, MainController.isAdmin, AdminController.renderAccount);
router.get('/customers',MainController.isLogin, MainController.isAdmin, AdminController.renderCustomers);


router.get('/:anything', MainController.pageNotFound);

module.exports = router;