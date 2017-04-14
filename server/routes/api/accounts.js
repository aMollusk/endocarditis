var router = require('express').Router()
var UserAccount = require('../../models/user')
var hash = require('../../helpers/hash')


router.post('/register', function(req,res){
    res.setHeader('Content-Type', 'application/json');

    hash.create(req.body.password, function(err, hash){
        if(err){
            throw err
        } else {
            var user = new UserAccount(Object.assign({}, req.body, {
                date: new Date(),
                password: hash 
            }))
            user.save(function(err, msg){
                if(err) {
                    res.send(Object.assign({}, {success: false}))
                } else {
                    res.send(Object.assign({}, {success: 200}))
                }
            })
        }
    })
})

router.post('/login', (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    UserAccount.findOne({username: req.body.username}, function(err, msg){
        if(err || msg === null){
            console.log('no user found')
            res.send({status: 200, authenticated: false, msg: 'no user found'})
            return 0
        }
        console.log(msg)
        hash.check(req.body.password, msg.password, function(){
            hash.check(req.body.password, msg.password, function(err, authed){
                if(authed){
                    res.send({status: 200, authenticated: true})
                } else {
                    res.send({status: 200, authenticated: false})
                }

            })
        })
    })
})


module.exports = router