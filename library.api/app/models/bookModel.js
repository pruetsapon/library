const serviceLocator = require('../helpers/service_locator');
const mongoose = serviceLocator.get('mongoose');

const BookSchema = new mongoose.Schema({
    bookId : {
        type: Number
    },
	name : {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Book', BookSchema);