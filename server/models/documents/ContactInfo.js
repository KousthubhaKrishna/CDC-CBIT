const mongoose = require('mongoose');

const ContactInfo = new mongoose.Schema({
    primary_email: { 
        type: String, 
        required: [ true , 'Please enter your primary email'],
        lowercase: true
    },
    secondary_email: { 
        type: String,
        lowercase: true 
    },
    mobile: { 
        type: Number, 
        required: [ true , 'Please enter your mobile number'],
        unique: true,
        min: 1000000000,
        max: 9999999999
    },
    secondary_mobile: 
    {
        type: Number, 
        min: 1000000000,
        max: 9999999999
    },
});

module.exports = ContactInfo; 