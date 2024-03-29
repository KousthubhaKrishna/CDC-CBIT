const express = require("express");
const DataSnapshots = require("../models/DataSnapshots");
const Placements = require("../models/Placements");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { PERMISSIONS, authUser } = require("../middleware/Auth");
const Act = require('../models/Activity');


// Get Data Snapshots
router.get("/", authUser(PERMISSIONS.MED), async (req, res) => {
    try {

        const queryObj = { ...req.query };

        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);

        const query = DataSnapshots.find(JSON.parse(queryStr));

        const snapshots = await query;

        res.status(200).json(snapshots);
    }
    catch (err) {
        res.json({ message: err.message });
    }
});

// get Snaps based on Snap Id
router.get('/:snapId', authUser(PERMISSIONS.MED), async (req, res) => {
    try {
        const snap = await DataSnapshots.findById(req.params.snapId);
        if (snap == null)
            res.status(401).json({ message: "Invalid Id" });
        res.status(200).json(snap);
    }
    catch (err) {
        res.json({ message: err.message });
    }
});

// get Snaps based on placement Id
router.get('/placement_snaps/:placementId', authUser(PERMISSIONS.MED), async (req, res) => {
    try {
        const snaps = await DataSnapshots.find({ placement_id: req.params.placementId });
        if (snaps == null)
            res.status(401).json({ message: "Invalid Placement Id" });
        res.status(200).json(snaps);
    }
    catch (err) {
        res.json({ message: err.message });
    }
});

// create a snapshot
router.post('/:placementId', authUser(PERMISSIONS.MED), async (req, res) => {
    try {
        const token = req.cookies.jwt;
        var decoded = jwt.decode(token);

        const snapObj = new DataSnapshots({

            snap_name: req.body.snap_name,
            placement_id: req.params.placementId,
            type_of_data: req.body.type_of_data,
            created_by: decoded._id,
            placement_batch: req.body.placement_batch,
            fields: req.body.fields,
            extra_fields: req.body.extra_fields,
            last_date: new Date(req.body.last_date),
        });
        const savedSnap = await snapObj.save();
        console.log(savedSnap);

        if (req.body.isFirst) {
            const updatedPl = await Placements.updateOne(
                { _id: req.params.placementId },
                {
                    $set: {
                        register_snap: savedSnap._id
                    }
                });
        }

        const newAct = await Act.updateOne({ _id: decoded._id }, {
            $push: { list: { text: "Created a data snapshot - " + req.body.snap_name, actType: "success" } }
        });

        res.status(201).json(savedSnap);
    }
    catch (err) {
        res.json({ message: err.message });
    }
});


// delete snap
router.delete('/:snapId', authUser(PERMISSIONS.MED), async (req, res) => {
    try {
        const snap = await DataSnapshots.findByIdAndDelete(req.params.snapId);
        res.json(snap);
    }
    catch (err) {
        res.json({ message: err.message });
    }
});


router.patch('/add_snap/:snapId', authUser(PERMISSIONS.MED), async (req, res) => {
    try {

        const snapData = req.body;
        const updatedSnap = await DataSnapshots.updateOne(
            { _id: req.params.snapId },
            { $set: { data: snapData } },
            { safe: true },
        );
        res.status(200).json(updatedSnap);
    }
    catch (err) {
        res.json({ message: err.message });
    }
});

//add data
router.patch('/add_data/:snapId', authUser(PERMISSIONS.LOW), async (req, res) => {
    try {

        const snapData = req.body;
        const updatedSnap = await DataSnapshots.updateOne(
            { _id: req.params.snapId },
            { $push: { data: snapData } },
            { safe: true },
        );

        const snap = await DataSnapshots.findById(req.params.snapId);
        const pl = await Placements.findById(snap.placement_id);
        const newAct = await Act.updateOne({ _id: snapData._id }, {
            $push: { list: { text: "You have registered for " + pl.company_id.company_name, actType: "success" } }
        });

        res.status(200).json(updatedSnap);
    }
    catch (err) {
        res.json({ message: err.message });
    }
});

//remove data from array
router.patch('/remove_data/:snapId', authUser(PERMISSIONS.LOW), async (req, res) => {
    try {

        const snapData = req.body;
        console.log(snapData);
        const updatedSnap = await DataSnapshots.updateOne(
            { _id: req.params.snapId },
            {
                $pull: {
                    data: { roll_number: snapData.roll_number }
                }
            },
            { safe: true },
        );
        res.status(200).json(updatedSnap);
    }
    catch (err) {
        res.json({ message: err.message });
    }
});

//update data
router.patch('/update_data/:snapId', authUser(PERMISSIONS.LOW), async (req, res) => {
    try {

        const snapData = req.body;
        console.log(snapData)
        const updatedSnap = await DataSnapshots.updateOne(
            { _id: req.params.snapId, 'data.roll_number': snapData.roll_number },
            {
                $set: {
                    data: snapData
                }
            },
            { safe: true },
        );
        res.status(200).json(updatedSnap);
    }
    catch (err) {
        res.json({ message: err.message });
    }
});


router.get('/snap_data/:plcId', authUser(PERMISSIONS.LOW), async (req, res) => {
    try {
        const placements = await Placements.findById(req.params.plcId);
        if (placements == null)
            throw "Invalid placement Id";

        const snapId = placements.register_snap;
        if (!snapId) {
            throw "Invalid Snap";
        }
        const snap = await DataSnapshots.findById(snapId);
        res.status(200).json(snap);
    }
    catch (err) {
        res.status(401).json({ message: err.message });
    }
});

// download
router.get('/download/:snapId', authUser(PERMISSIONS.MED), async (req, res) => {
    try {
        const snap = await DataSnapshots.findById(req.params.snapId);
        if (snap == null)
            res.status(401).json({ message: "Invalid Id" });
        res.xls('data.xlsx', snap.data);
    }
    catch (err) {
        res.json({ message: err.message });
    }
});

module.exports = router;