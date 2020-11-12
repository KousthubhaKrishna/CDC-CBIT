const mongoose = require('mongoose');

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
    created_by:{
        type: mongoose.Schema.Types.ObjectId , 
        ref: 'Students'
    }
});

// query middleware

InterviewExperienceSchema.pre(/^find/, function(next) {
    this.populate({
        path: 'created_by',
        select: 'basic_info.full_name',
    });
    next();
});

module.exports = mongoose.model('InterviewExperience', InterviewExperienceSchema);