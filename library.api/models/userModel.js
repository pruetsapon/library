const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    id : Number,
	username : String,
	password : String,
    firstname : String,
    lastname : String,
    role : Number
})

module.exports = mongoose.model('User', UserSchema);