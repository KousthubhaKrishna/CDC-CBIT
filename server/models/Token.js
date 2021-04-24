const mongoose = require('mongoose');

const Token = new mongoose.Schema({
    user_email: { 
        type: String, 
        required: [ true , 'Please enter your email'],
        unique : true
    },
    value: { 
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
module.exports = mongoose.model("token", Token);