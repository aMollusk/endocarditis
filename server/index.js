var express = require('express')
var app = express();

var mongoose = require('mongoose');
var Post = require('./models/post')

mongoose.connect('mongodb://localhost:27017');

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function(){
    appStart()
})



function appStart(){

    var newDetails = {
        title: "Here is the first post ever",
        content: "Here is the content of the post. Hooray.",
        author: "Kieran McDonald",
        date: new Date()
    }
    var newPost = new Post(newDetails)

    newPost.save(function(err, post){
        if(err) return console.error(err)
        console.log(post)
    })

    app.get('/', function(request, response){
        console.log(request)
        response.send('<h1>hello</h1>')
    })

    app.get('/jose', function(request, response){
        response.send('hi there')
    })

    app.listen(4000, function(){
        console.log('listening')
    })  
}
