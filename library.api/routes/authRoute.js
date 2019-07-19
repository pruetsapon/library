const express = require('express');
const router = express.Router();
const controller = require('../controllers/authController');

router.route('/auth').post(controller.authenticate);

module.exports = router;