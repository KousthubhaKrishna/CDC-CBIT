const express = require("express");
const DataSnapshots = require("../models/DataSnapshots");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { PERMISSIONS, authUser } = require("../middleware/Auth");


// Get Data Snapshots
router.get("/", authUser(PERMISSIONS.MED), async (req, res) => {
    try{

        const queryObj = {...req.query};

        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);

        const query = DataSnapshots.find(JSON.parse(queryStr));

        const snapshots = await query;

        res.status(200).json(snapshots);
    }
    catch(err){
        res.json({message: err.message});
    }
});

// get Snaps based on Snap Id
router.get('/:snapId', authUser(PERMISSIONS.MED), async ( req, res) => {
    try{
        const snap = await DataSnapshots.findById(req.params.snapId);
        if(snap == null)
            res.status(401).json({ message: "Invalid Id" });
        res.status(200).json(snap);
    }
    catch(err){
        res.json({ message: err.message });
    }
});

// get Snaps based on placement Id
router.get('/placement_snaps/:placementId', authUser(PERMISSIONS.MED), async ( req, res) => {
    try{
        const snaps = await DataSnapshots.find({placement_id : req.params.placementId});
        if(snaps == null)
            res.status(401).json({ message: "Invalid Placement Id" });
        res.status(200).json(snaps);
    }
    catch(err){
        res.json({ message: err.message });
    }
});

// create a snapshot
router.post('/:placementId', authUser(PERMISSIONS.MED), async(req, res)  => {
    try{
        const token = req.cookies.jwt;
        // if(token == null)
        // {
        //     return res.json({ message: "Not Authorised" });
        // }
        var decoded = jwt.decode(token);

        const snapObj = new DataSnapshots( {
            
            snap_name: req.body.snap_name,
            placement_id : req.params.placementId,
            type_of_data: req.body.type_of_data,
            created_by: decoded._id,
            placement_batch: req.body.placement_batch,
            fields: req.body.fields,
            extra_fields: req.body.extra_fields,
            last_date: new Date(req.body.last_date),  
            collect_data: req.body.collect_data,
        });
        const savedSnap = await snapObj.save();
        res.status(201).json(savedSnap);
    }
    catch(err){
        res.json({ message: err.message });
    }
});





module.exports = router;