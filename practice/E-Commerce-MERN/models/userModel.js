const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const crypto = require('crypto')


// !mdbgum snippet
// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "user"
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
    cart: {
        type: Array,
        default: []
    },
    address: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address"
    }],
    wishlist: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }],
    refreshToken: {
        type: String
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetTokenExpires: Date


},
    {
        timestamps: true
    }
);
saltRounds = 10;
userSchema.pre("save", async function (next) {
    if(!this.isModified('password')){
        next()
    }
    const salt = await bcrypt.genSaltSync(saltRounds);
    this.password = await bcrypt.hash(this.password, salt)
})

userSchema.methods.isPasswordMatched = async function (enteredPassword) {
    return bcrypt.compare(enteredPassword, this.password)
}
userSchema.methods.createPasswordResetToken = async function(){
    
    const resetToken = crypto.randomBytes(32).toString('hex');
    // console.log(">reset",resetToken)
    this.passwordResetToken = 
    crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');
    // console.log("this.pass", this.passwordResetToken)

    this.passwordResetTokenExpires = (Date.now() + (60 * 1000 * 320  ))// 10 minutes, playing with time NEVER!
    // console.log("this.reset",this.passwordResetToken)
    return resetToken 

}
//Export the model
module.exports = mongoose.model('User', userSchema);