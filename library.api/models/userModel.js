const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userId : {
        type: Number
    },
	username : {
        type: String,
        required: true
    },
	password : {
        type: String,
        required: true
    },
    firstname : {
        type: String,
        required: true
    },
    lastname : {
        type: String,
        required: true
    },
    role : {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('User', UserSchema);