const serviceLocator = require('../helpers/service_locator');
const mongoose = serviceLocator.get('mongoose');

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