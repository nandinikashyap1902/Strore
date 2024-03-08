const userModel = require('../../models/user.models')
const loginuser = async(req,res)=>{
    try{
        let result = await userModel.create(req.body)
        res.send({
            data:result,
            msg:'user created',
            status:true
        })
    }
    catch(err){
        res.status(403).json({status:false,error:err})
    }
}

module.exports={
    loginuser
}