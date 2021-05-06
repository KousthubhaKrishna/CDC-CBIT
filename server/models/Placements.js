const mongoose = require('mongoose');

// Placements model

const PlacementSchema = new mongoose.Schema({
    
    company_id : {type: mongoose.Schema.Types.ObjectId , ref : 'Company'},

    job_role:{type: String},
    
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
    },

    placed_students: [String], 

    register_snap:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DataSnapshots'
    },
    
});

// query middleware

PlacementSchema.pre(/^find/, function(next) {
    this.populate({
        path: 'company_id',
        select: 'company_name',
    });
    next();
});

module.exports = mongoose.model('Placements', PlacementSchema);

