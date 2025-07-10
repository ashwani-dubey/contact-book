const express=require('express');
const auth=express.Router();
const {login,signup}=require('../functions/security')

auth.post('/login',login);
auth.post('/signup',signup);

module.exports={auth}