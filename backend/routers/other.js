const express=require('express');
const other=express.Router();
const {addContact,deleteContact,searchContact,searchAllContact}=require('../functions/other')

other.post('/add',addContact);
other.delete('/delete/:id',deleteContact);
other.get('/search',searchContact);
other.get('/searchAll',searchAllContact);

module.exports={other}