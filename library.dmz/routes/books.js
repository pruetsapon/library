var express = require('express');
var router = express.Router();
var controller = require('../controllers/bookController');

router.route('/books').get(controller.getBooks);
router.route('/book/:id').get(controller.getBookById);

module.exports = router;