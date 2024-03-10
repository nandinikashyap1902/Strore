const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    PhoneNo:{type:String,
        required:true,
        unique:true,
        validate: {
            validator: function(v) {
                // Regular expression for a phone number in the format XXX-XXX-XXXX
                return /^\d{3}-\d{3}-\d{4}$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    otp:{type:String},
    verified:{type:Boolean,default:false}
})
userSchema.index({ PhoneNo: 1 }, { unique: true });
const User = mongoose.model('User',userSchema)
module.exports = User