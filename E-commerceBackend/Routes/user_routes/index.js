const express = require('express')
const rootRouter = express.Router()
const users = require('./users.route')
rootRouter.use('/',users)
module.exports=rootRouter;