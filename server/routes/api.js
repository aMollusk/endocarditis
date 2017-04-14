var router = require('express').Router()
var UserAccount = require('../models/user')


router.post('/register', function(req,res){
    res.setHeader('Content-Type', 'application/json');

    var user = new UserAccount(Object.assign({}, req.body, {
        date: new Date(),
        passwordHash: req.body.password
    }))

    user.save(function(err, msg){
        console.log(err, msg)            
        res.send(Object.assign({}, msg, {success: 200}))
    })
})

router.post('/login', (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    UserAccount.findOne({username: req.body.username, passwordHash: req.body.password}, function(err, msg){
        if(msg) {res.send({status: 200, authenticated: true})}
        else {res.send({status: 401, authenticated: false})}
    })
})


module.exports = router