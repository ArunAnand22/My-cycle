const express=require('express')
const router=express.Router()
const { registerController } = require('../controller/userCtrl')

//REGISTER || POST
router.post('/register',registerController)

module.exports=router