"use strict";

var express = require('express');

var router = express.Router();

var MainController = require('../app/controllers/MainController');

router.get('/login', MainController.renderLogin);
router.post('/login', MainController.login);
router.get('/', MainController.renderLogin);
router.get('/:anything', MainController.pageNotFound);
module.exports = router;