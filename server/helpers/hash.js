var bcrypt = require('bcrypt')
const saltRounds = 9


module.exports = {
    create: function(password, callback){
        return bcrypt.hash(password, saltRounds, callback)
    },
    check: bcrypt.compare
}