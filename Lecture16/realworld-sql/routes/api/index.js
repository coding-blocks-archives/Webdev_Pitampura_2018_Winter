const Router = require('express').Router

const route = Router()

route.use('/tags', require('./tags'))
// route.use('/articles', require('./articles'))
route.use('/users', require('./users'))
route.use('/user', require('./users/user'))


module.exports = route
