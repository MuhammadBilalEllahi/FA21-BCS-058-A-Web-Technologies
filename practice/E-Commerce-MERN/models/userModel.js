const mongoose = require('mongoose'); 
const bcrypt = require('bcrypt'); 
// !mdbgum snippet
// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
});
saltRounds = 10;
userSchema.pre("save",async function (next){
    const salt = await bcrypt.genSaltSync(saltRounds);
    this.password = await bcrypt.hash(this.password, salt)
})

userSchema.methods.isPasswordMatched = async function (enteredPassword) {
    return bcrypt.compare(enteredPassword,this.password)
}

//Export the model
module.exports = mongoose.model('User', userSchema);