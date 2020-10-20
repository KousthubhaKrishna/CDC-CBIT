const mongoose = require('mongoose');
const basicInfo = require('./documents/basicInfo');

const Students = new mongoose.Schema({
    _id: {
        type: Schema.Types.ObjectId,
        ref: 'Auth'
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
});

module.exports = mongoose.model("students", Students);