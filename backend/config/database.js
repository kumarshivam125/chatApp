const mongoose=require('mongoose');
require('dotenv').config();

const dbConnect=async()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>console.log("Database connection started"))
    .catch((err)=>console.log("Error in DB Connection",err))
}

module.exports=dbConnect;
