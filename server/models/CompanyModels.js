const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    company_id: { 
        type: String, 
        required: [ true , 'Please enter company_ID'],
        unique : true

    },
    company_name: { 
        type: String,
        required: [true, 'Please enter company name'],
    },
    description: String,
    photo_url: String,
});

const Company = mongoose.model('Company', CompanySchema);


// Placements model

const PlacementSchema = new mongoose.Schema({
    placement_id: { 
        type: String, 
        required: [ true , 'Please enter placement_ID'],
        unique : true
    },

    company_id : {type: Schema.Types.ObjectId , ref : 'Company'},

    job_type: { 
        type: String,
        required: [true, 'Please enter job type'],
    },
    job_description: String,

    package: String,
    drive_details: String,
    placement_batch: String,
    posted_date: {
        type: Date,
        required: true,
        default : Date.now
    },

    eligibility: {
        cgpa: {
            type: Number,
            required: true,
        },
        backlogs: {
            type: Number,
            required: true,
        },
        branches:[String],
        course: [String], // ???
    },

    placed_students: [String], // stores Student roll numbers?
    
    announcements:{
        message:String,
        date:{
            type:Date,
            default: Date.now
        },
    }
    
});

const Placements = mongoose.model('Placements', PlacementSchema);


const InterviewExperienceSchema = new mongoose.Schema({
    content: { 
        type: String,
        required: [true, 'Please enter your interview experience'],
    },
    date : {
        type: Date,
        default: Date.now
    },
    company_name: {
        type: String,
        required: [true, 'Please enter the company name'],
    },
    company_id:{
        type: mongoose.Schema.Types.ObjectId , 
        ref: 'Company'
    },
});

const InterviewExperience = mongoose.model('InterviewExperience', InterviewExperienceSchema);


module.exports = {
    Company: Company,
    Placements: Placements,
    InterviewExperience : InterviewExperience
}