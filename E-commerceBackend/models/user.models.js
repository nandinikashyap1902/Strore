const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const userSchema = new mongoose.Schema({
    email:{type:String,
        required:true,
        unique:true,
        validate: {
            validator: function (value) {
              return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: 'Invalid email address format',
          },
    },
    password:{type:String,required:true},
})
userSchema.methods.generateToken = async function(){
try{
  return jwt.sign({
    userId:this._id.toString(),
    email:this.email,
    isAdmin:this.isAdmin
  },
  process.env.JWT_SECRET_KEY,
  {
    expiresIn:"1hr"
  }
  )
}
catch(err){
  console.log(err)
}
}
const User = mongoose.model('User',userSchema)
module.exports = User