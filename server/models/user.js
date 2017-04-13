var mongoose = require('mongoose')

var userAccountSchema = mongoose.Schema({
    username: String,
    firstname: String,
    lastname: String,
    email: String,
    passwordHash: String,
    salt: Number,
    accountInfo: {
        description: String,
        imgUrl: String
    },
    dob: Date,
    date: Date
})

module.exports = mongoose.model('UserAccount', userAccountSchema)