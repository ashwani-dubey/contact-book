const express=require('express');
require('dotenv').config();
const {connectToMongo}=require('./functions/connectToDb')
const {router}=require('./routers/routers');

const port=process.env.PORT || 3000;
const app=express();


connectToMongo();
app.use(express.json());
app.use(router);


app.listen(port,()=>{
    console.log("app started at port "+port);
})