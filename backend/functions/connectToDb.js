const mongoose=require('mongoose');


const connectToMongo=()=>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("connected to mongodb")
    })
}
module.exports={connectToMongo}