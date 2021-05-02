const mongoose = require('mongoose');

const AnnouncementSchema = new mongoose.Schema({
    message: { 
        type: String, 
        required: true,
    },
    posted_date: { 
        type: Date,
        default: Date.now,
    },
    placement_id : {
        type: mongoose.Schema.Types.ObjectId , 
        ref : 'Placements',
    },
    type: { 
        type: String,
        enum: ["Message","Pre-placement Talk","Test"]
    },
});

module.exports = mongoose.model('Announcements', AnnouncementSchema);