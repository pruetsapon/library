var express = require('express');
var router = express.Router();
var controller = require('../controllers/bookController');

router.get('/books', controller.getBook);
router.get('/book/:id', controller.getBookById);

module.exports = router;