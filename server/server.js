const express=require('express')
const colors=require('colors')
const morgan=require('morgan')
const dotenv=require('dotenv')
const cors=require('cors')

//config dotenv
dotenv.config()

const app=express()

app.use(morgan('dev'))
app.use(cors())


//PORT
const PORT=process.env.PORT || 8080
//listening to port
app.listen(PORT,()=>{
    console.log(`Running on Port:${PORT} successfully`.bgMagenta.white);
})