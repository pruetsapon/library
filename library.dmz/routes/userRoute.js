const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');

router.route('/users').get(controller.getUsers);
router.route('/user/:id').get(controller.getUserById);

module.exports = router;