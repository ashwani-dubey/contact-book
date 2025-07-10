const express=require('express');
require('dotenv').config();
const {connectToMongo}=require('./functions/connectToDb')
const {router}=require('./routers/routers');
const cors = require('cors');

const port=process.env.PORT || 3000;
const app=express();


app.use(cors());
connectToMongo();
app.use(express.json());
app.use(router);


app.listen(port,()=>{
    console.log("app started at port "+port);
})