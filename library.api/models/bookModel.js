const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    id : Number,
	name : String
})

module.exports = mongoose.model('Book', BookSchema);