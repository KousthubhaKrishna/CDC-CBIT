const mongoose = require('mongoose');
const AuthModel = require('../models/AuthModel');

// Student Model

const Student = new mongoose.Schema({
    user_id: { 
        type: Schema.Types.ObjectId ,
        ref: 'AuthModel'
    },
    isVerified: { 
        type: Boolean,
        default: false
    },
    isPlaced: { 
        type: Boolean,
        default: false
    },

    // basic info

    basic_info: {
        first_name: { 
            type: String, 
            required: [ true , 'Please enter your first name']
        },
        last_name: { 
            type: String, 
            required: [ true , 'Please enter your last name']
        },
        full_name: { 
            type: String, 
            required: [ true , 'Please enter your last name']
        },
        roll_number: {
            type: String,
            required: [ true , 'Please enter your roll number'],
            unique: true
        },
        branch: { 
            type: String, 
            required: [ true , 'Please enter your branch']
        },
        section: { 
            type: String, 
            required: [ true , 'Please enter your section']
        },
        placement_batch: { 
            type: Number, 
            required: [ true , 'Please enter your batch']
        },
    },

    // contact_info
    contact_info: {
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
        }
    },

    // education

    education: {
        cgpa:
        {
            type: Number,
            required: [ true , 'Please enter your CGPA'],
        },
        backlogs:
        {
            type: Number,
            required: [ true , 'Please enter your backlogs'],
        },
        inter_or_diploma_college:{
            type: String,
            required: [ true , 'Please enter your inter/diploma collge name'],
        },
        inter_or_diploma_percentage:{
            type: Number,
            required: [ true , 'Please enter your inter/diploma percentage'],
        },
        school:{
            type: String,
            required: [ true , 'Please enter your school name'],
        },
        school_percentage:{
            type: Number,
            required: [ true , 'Please enter your school percentage'],
        },
        eamcet_rank: Number,
        jee_rank: Number,
    },

    // personal
    personal: {
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
        Date_of_birth: {
            type: Date,
            required: true
    },
    },

    // files
    files:{
        photo_url: String,
        resume_url: String,
    }
   
});


//  Coordinator Model

const Coordinator = new mongoose.Schema({
    user_id: { 
        type: Schema.Types.ObjectId ,
        ref: 'AuthModel'
    },
    
    // basic info
    basic_info:{
        first_name: { 
            type: String, 
            required: [ true , 'Please enter your first name']
        },
        last_name: { 
            type: String, 
            required: [ true , 'Please enter your last name']
        },
        full_name: { 
            type: String, 
            required: [ true , 'Please enter your last name']
        },
        roll_number: {
            type: String,
            required: [ true , 'Please enter your roll number'],
            unique: true
        },
        branch: { 
            type: String, 
            required: [ true , 'Please enter your branch']
        },
        section: { 
            type: String, 
            required: [ true , 'Please enter your section']
        },
        placement_batch: { 
            type: Number, 
            required: [ true , 'Please enter your batch']
        },
    },

    // contact_info
    contact_info: {
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
        }
    },


    // files
    files:{
        photo_url: String,
        resume_url: String,
    }
});

const StudentModel=  mongoose.model("Student", Student);
const CoordinatorModel=  mongoose.model("Coordinator", Coordinator);

module.exports = {
    StudentModel: StudentModel,
    CoordinatorModel: CoordinatorModel
};