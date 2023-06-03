const mongoose=require('mongoose')
const colors=require('colors')
const dotenv=require('dotenv')

const connectDB=async()=>{
    try {
        mongoose.connect(process.env.MONGO_DB)
        console.log(`Connected to mongodb`.bgGreen.white);
    } catch (error) {
        console.log(`Error connecting to mongodb:${error}`.bgRed.white);
    }
}

module.exports=connectDB