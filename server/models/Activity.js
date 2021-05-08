const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'auth'
    },
    list: [{
        text: String,
        actType: String,
        date: {
            type: Date,
            default: Date.now
        }
    }]
});

module.exports = mongoose.model('activity', ActivitySchema);