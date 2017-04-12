var express = require('express')
var app = express();
var mongoose = require('mongoose');
var Post = require('./models/post')
var bodyParser = require('body-parser')
var path = require('path')

mongoLoc = process.env.MONGODB_URI || 'mongodb://localhost:27017' 

// var mongoLoc = require('../env.js')

mongoose.connect(mongoLoc);
var db = mongoose.connection

app.set('port', (process.env.PORT || 3000));


// The path of this directory is ./endocarditis/server
// But all of the client side stuff lives in ./endocarditis/client
// So to solve this we set the STATIC file path to the latter
var clientPath = path.resolve(__dirname, '..', 'client')
app.use('/', express.static(clientPath))

// This is shortcut to help our server understand JSON. 
// If we didn't do this we'd have to read the file as it came in bit by bit. It sucks
app.use(bodyParser.json());

// If the script can't find our database, we leave an error
db.on('error', console.error.bind(console, 'connection error:'))

// Once the script connects to the database, start the server
db.once('open', function(){
    appStart()
})

// Everytime someone request any page on our server, this function will run line by line.
// Only the bits that are relevant will run. Think of it like a giant switch statement.
function appStart(){

    // This will override the '*' statement at the bottom. This is how we will get our data
    app.post('/api/save', function(req, res){        
        res.setHeader('Content-Type', 'application/json');
        savePost(req.body, function(msg){
            console.log(msg)
            res.send(JSON.stringify(Object.assign({}, {status: 'success'}, msg)))
        })
    })

    // This will also override it.
    app.get('/api/posts', function(req, res){
        res.setHeader('Content-Type', 'application/json');
        Post.find(function(err, result){
            console.log(result)
            res.send(JSON.stringify(result))
        })
    })

    // And this. Nevermind this. This is for me.
    app.get('/apiTest', function(request, response){
        response.sendFile(clientPath + '/apiTest.html')
    })

    // This is the main route
    // Basically we're saying, no matter what the put after the first slash
    // we should get this index.html file
    app.get('*', function(request, response){
        console.log(request.path)
        response.sendFile(clientPath + '/index.html')
    })

    // Finally, we tell the app to listen for any requests on port 3000.
    app.listen(app.get('port'), function(){
        console.log('listening')
    })  
}


// This is a helper
function savePost(post, callback){
    var newPost = new Post(Object.assign({}, post, {date: new Date()}))
    newPost.save(function(err, res){
        if(err){
            console.error(`There's an error with mongo I think: `)
        }
        callback(res)
    })
}

// function retrievePost(post, callback){

// }