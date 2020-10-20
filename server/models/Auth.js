const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Auth = new mongoose.Schema({
    user_email: { 
        type: String, 
        required: [ true , 'Please enter your email'],
        unique : true

    },
    password: { 
        type: String,
        required: [true, 'Please setup a password'],
    },
    role: { 
        type: String,
        enum: ["student", "coordinator", "admin"],
        default: "student" 
    }
});
Auth.pre('save',async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password,salt);
    next();
})

module.exports = mongoose.model("auth", Auth);