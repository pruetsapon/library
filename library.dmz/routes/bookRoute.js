const express = require('express');
const router = express.Router();
const controller = require('../controllers/bookController');

router.route('/books').get(controller.getBooks);
router.route('/book/:id').get(controller.getBookById);

module.exports = router;