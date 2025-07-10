const express=require('express');
const {other}=require('./other')
const {auth}=require('./authentication')
const { isLogin } = require('../middleware/isLogin');

const router=express.Router();

router.use('/auth',auth)
router.use('/other',isLogin,other)

module.exports={router}