const express = require("express");
const router = express.Router();
const { PERMISSIONS, authUser } = require("../middleware/Auth");
const Placements = require("../models/Placements");
const Announcements = require("../models/Announcements");
const Act = require('../models/Activity');
const jwt = require("jsonwebtoken");


// get announcements
router.get("/", async (req, res) => {
    try {

        const queryObj = { ...req.query };

        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);

        const query = Announcements.find(JSON.parse(queryStr)).sort([['posted_date', -1]]);

        const announcements = await query;
        res.status(200).json(announcements);
    } catch (err) {
        res.json({ message: err.message });
    }
});

// get announcements based on placement Id
router.get('/:plcId', async (req, res) => {
    try {
        const ann = await Announcements.find({ placement_id: req.params.plcId });
        if (ann == null)
            res.status(401).json({ message: "Invalid Id" });
        res.status(200).json(ann);
    }
    catch (err) {
        res.json({ message: err.message });
    }
});

// Add placements
router.post("/:placementId", authUser(PERMISSIONS.MED), async (req, res) => {
    try {

        const token = req.cookies.jwt;
        var decoded = jwt.decode(token);

        const annObj = new Announcements({
            message: req.body.message,
            placement_id: req.params.placementId !== "nil" ? req.params.placementId : null,
            type: req.body.type,
            date: req.body.date,
            title: req.body.title,
        });
        const savedAnnouncement = await annObj.save();

        const newAct = await Act.updateOne({ _id: decoded._id }, {
            $push: { list: { text: "You have posted an announcement - " + req.body.title, actType: "success" } }
        });

        console.log("Announcement Saved");
        res.status(201).json(savedAnnouncement);
    } catch (err) {
        res.json({ message: err.message });
    }
});


// delete announcement
router.delete('/:id', authUser(PERMISSIONS.MED), async (req, res) => {
    try {

        const token = req.cookies.jwt;
        var decoded = jwt.decode(token);

        const newAct = await Act.updateOne({ _id: decoded._id }, {
            $push: { list: { text: "You have deleted an announcement - " + req.body.title, actType: "error" } }
        });

        const ann = await Announcements.deleteOne({ _id: req.params.id });
        res.json(ann);
    }
    catch (err) {
        res.json({ message: err.message });
    }
});


// update announcement
router.patch('/:id', authUser(PERMISSIONS.MED), async (req, res) => {
    try {

        console.log(req.body);
        const updatedAnn = await Announcements.updateOne(
            { _id: req.params.id },
            {
                $set: req.body
            });
        res.json(updatedAnn);
    }
    catch (err) {
        res.json({ message: err.message });
    }
});

module.exports = router;


