const express = require('express');
const router = express.Router();
const controller = require('../controllers/bookController');

router.route('/books').get(controller.getBooks);
router.route('/book').post(controller.insertBook);
router.route('/book/:id')
        .delete(controller.deleteBook)
        .put(controller.updateBook)
        .get(controller.getBookById);

module.exports = router;