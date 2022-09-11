const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type:String, required:true },
    email: {type:String, required:true },
    phoneNumber : {type:Number,lenght:10},
    updated:{type:Boolean}
})

const User = mongoose.model('User',userSchema)

module.exports = User;