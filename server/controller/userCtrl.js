const userModel=require('../models/userModel')
const bcrypt=require('bcryptjs')

//-----------register controller-------------------//
const registerController=async(req,res)=>{
    try {
        const existingUser = await userModel.findOne({email:req.body.email})
        if(existingUser){
            return res.status(200).json({success:false,message:"User already exists"})
        }
        const password=req.body.password
        //bcrypt password
        const salt = await bcrypt.genSalt(10)
        const hashedPswd=await bcrypt.hash(password,salt)
        req.body.password=hashedPswd
        //adding new user
        const newUser=new userModel({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        })
        //save new user
        await newUser.save()
        res.status(200).json({success:true,message:"Registration successful"})
    } catch (error) {
        res.status(500).json({success:false,message:`Register failed ${error}`})
    }
}

//-----------login controller-------------------//
const loginController= async(req,res) => {
    try {
        const existingUser = await userModel.findOne({email:req.body.email})
        if(!existingUser){
            return res.status(200).json({success:false,message:"User not found"})
        }
    } catch (error) {
        res.status(500).json({success:false,message:`Error in login ${error}`})
    }
}

module.exports={
    registerController,
    loginController
}