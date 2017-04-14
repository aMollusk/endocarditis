var bcrypt = require('bcrypt')
var saltRounds = 9


module.exports = {
    create: function(password, callback){
        return bcrypt.hash(password, saltRounds, callback)
    },
    check: bcrypt.compare
}