var express = require('express');
var router = express.Router();
var controller = require('../controllers/authController');

router.route('/auth').post(controller.authenticate);

module.exports = router;