const mongoose = require('mongoose');

const PersonalInfo = new mongoose.Schema({
    parent_name: { 
        type: String,
        required: [ true , 'Please enter your parent name'],
    },
    address: { 
        type: String,
        required: [ true , 'Please enter your address'],
    },
    city: { 
        type: String,
        required: [ true , 'Please enter your city'],
    },
    state: { 
        type: String,
        required: [ true , 'Please enter your state'],
    },
    zipcode: { 
        type: String,
        required: [ true , 'Please enter your zipcode'],
    },
    gender: { 
        type: String,
        enum: ["Female","Male","Other"]
    },
    date_of_birth: {
        type: Date,
        required: true
    },
});

module.exports = PersonalInfo; 