var mongoose = require('mongoose')


var postSchema = mongoose.Schema({
    title: String,
    content: String,
    author: String,
    date: Date
})

module.exports = mongoose.model('Post', postSchema)
