var accounts = require('./accounts')
var router = require('express').Router()


router.use('/account', accounts)
// router.use('/posts', accounts)

module.exports = router