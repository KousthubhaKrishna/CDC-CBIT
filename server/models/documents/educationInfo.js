const mongoose = require('mongoose');

const EducationInfo = new mongoose.Schema({
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
});

module.exports = EducationInfo; 