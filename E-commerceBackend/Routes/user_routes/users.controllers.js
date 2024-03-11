const userModel = require('../../models/user.models')
const bcrypt = require('bcrypt')
const Signup=async(req,res)=>{
    try{
        const {email,password} = req.body
       const existingUser = await userModel.findOne({email})
       if(existingUser){
        return res.status(400)
        .json({msg:"user already exist"})
       }
       let hashedPassword = await bcrypt.hash(password, 10)
           let result = await userModel.create({email,password:hashedPassword})
           res.send({
               data:result,
               msg:'user created',
               status:true
           })
       
    }
    catch(err){
       // console.log(err)
        res.status(403).json({status:false,error:err})
    }
}
const loginuser = async(req,res)=>{
    try{
        console.log(req.body)
        const {email,password} = req.body
    const user = await userModel.findOne({email})
    if(!user){
        return res.status(400).json({msg:"user not found"})
    }
    const isPasswordMatch= await bcrypt.compare(password,user.password)
    if (!isPasswordMatch) {
        return res.status(401).json({ msg: "Invalid credentials" })
    }
      res.status(201).json({status:true,msg:"Login successful"})
       
    }
    catch(err){
       // console.log(err)
        res.status(403).json({status:false,error:err})
    }
}

module.exports={
  loginuser, Signup
}