const userModel = require('../../models/user.models')
const loginuser = async(req,res)=>{
    try{
        //console.log(req.body)
        //  const {email,otp,verified} = req.body;
        // const user = new userModel({email,otp,verified})
       // console.log(req.body)
        let result = await userModel.create(req.body)
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

module.exports={
    loginuser
}