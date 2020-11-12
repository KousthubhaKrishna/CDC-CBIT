const mongoose = require('mongoose');
const basicInfo = require('./documents/basicInfo');
const ContactInfo = require('./documents/ContactInfo');

const CoordinatorSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'auth'
    },
    basic_info : basicInfo,
    contact_info : ContactInfo,
    photo_url:
    {
        type: String,
    }
});

module.exports = mongoose.model("Coordinators", CoordinatorSchema);