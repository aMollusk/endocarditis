var express = require('express')
var app = express();



app.get('/', function(request, response){
    console.log(request)
    response.send('<h1>hello</h1>')
})

app.get('/jose', function(request, response){
    // DATA QUERY
    data ={
        url: 'http://google.com',
        title: 'google',
        description: 'Description things',
        tag: 'science'
    }


    response.send(`
        <div>
            <h1>${data.title}</h1>
        </div>

    `)
})










app.listen(9000, function(){
    console.log('listening')
})  