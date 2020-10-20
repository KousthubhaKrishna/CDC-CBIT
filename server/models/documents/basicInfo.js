const mongoose = require('mongoose');

const basicInfo = new mongoose.Schema({
    first_name:{
        type: String,
        required: true,
    },
    last_name:{
        type: String,
        required: true,
    },
    full_name:{
        type: String,
        required: true,
    },
    roll_number:{
        type: String,
        required: true,
        unique: [true, "Student with Roll Number Already Exists"],
        maxlength:12,
        minlength:12,
    },
    branch:{
        type: String,
        required: true,
    },
    section:{
        type: String,
        required: true,
        maxlength:1
    },
    placement_batch:{
        type: String,
        required: true
    },
});

module.exports = basicInfo; 