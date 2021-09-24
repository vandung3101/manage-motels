const express = require('express');
const router = express.Router()

const MeController = require('../app/controllers/MeController');
const MainController = require('../app/controllers/MainController')

router.get('/home',MainController.isLogin, MeController.renderHome);

router.get('/myinfor',MainController.isLogin, MeController.renderMyInfor);

router.get('/getMyInfor',MainController.isLogin, MeController.getDataMyRoom);

router.get('/device',MainController.isLogin, MeController.getDeviceInRoom);

router.get('/room',MainController.isLogin, MeController.renderRoom);


router.get('/:anything', MainController.pageNotFound);

module.exports = router;