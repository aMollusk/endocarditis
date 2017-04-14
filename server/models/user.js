var mongoose = require('mongoose')

// Unique fields not packages by default
var uniqueValidator = require('mongoose-unique-validator');


var userAccountSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    firstname: String,
    lastname: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    accountInfo: {
        description: String,
        imgUrl: String
    },
    date: {
        type: Date,
        required: true
    }
})

userAccountSchema.plugin(uniqueValidator);

module.exports = mongoose.model('UserAccount', userAccountSchema)