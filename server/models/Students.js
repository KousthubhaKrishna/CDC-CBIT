const mongoose = require('mongoose');
const basicInfo = require('./documents/basicInfo');
const ContactInfo = require('./documents/ContactInfo');
const EducationInfo = require('./documents/educationInfo');
const PersonalInfo = require('./documents/personalInfo');

const Students = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'auth'
    },
    is_placed: {
        type: Boolean,
        default: false,
    },
    is_verified: {
        type: Boolean,
        default: false,
    },
    basic_info : basicInfo,
    contact_info : ContactInfo,
    education: EducationInfo,
    personal_info: PersonalInfo,

    photo_url: String,
    resume_url: String,
});

module.exports = mongoose.model("Students", Students);