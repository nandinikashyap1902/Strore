const userModel = require('../../models/user.models')
const twilio = require('twilio');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioClient = new twilio(accountSid, authToken);
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }
  
const loginuser = async(req,res)=>{
    try{
       
        const {PhoneNo} = req.body
       
       const existingUser = await userModel.findOne({PhoneNo})
       if(existingUser){
        return res.status(400)
        .json({msg:"user already exist"})
       }

       const otp = generateOTP();
       await twilioClient.messages.create({
        body: `Your OTP for sign up: ${otp}`,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: PhoneNo
      });
      res.status(200).json({ message: 'OTP sent successfully' });

           let result = await userModel.create({PhoneNo})
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