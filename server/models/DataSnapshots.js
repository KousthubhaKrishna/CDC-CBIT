const mongoose = require('mongoose');

const DataSnapshotSchema = new mongoose.Schema({
    snap_name:{
        type: String,
        required: true, 
    },
    placement_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Placements'
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'auth'
    },
    data:{
        // type: [mongoose.Schema.Types.ObjectId],
        // ref: 'Students'
        type: [] //an empty array is equivalent to Mixed
    },

    type_of_data:{
        type: String,
    },
    placement_batch: String,
    collect_data: Boolean,

    fields:{
        type: [String],
    },
    extra_fields: { 
        type: [String],
    },

    last_date:{
        type: Date,
        default: Date.now
    },

    
});

module.exports = mongoose.model("DataSnapshots", DataSnapshotSchema);