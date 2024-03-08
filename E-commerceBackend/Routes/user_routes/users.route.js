const express = require('express')
const router = express.Router()
const user_controller = require('./users.controllers')
router.post('/login',user_controller.loginuser)
module.exports=router