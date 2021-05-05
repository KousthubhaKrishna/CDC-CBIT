const express = require("express");
const router = express.Router();
const { PERMISSIONS, authUser } = require("../middleware/Auth");
const Placements = require("../models/Placements");
const Students = require("../models/Students");
const DataSnapshots = require("../models/DataSnapshots");

// get placements
router.get("/", async (req, res) => {
    try {

        const queryObj = { ...req.query };

        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);

        const query = Placements.find(JSON.parse(queryStr));

        const placements = await query;
        res.status(200).json(placements);
    } catch (err) {
        res.json({ message: err.message });
    }
});

// get list of placements based on placement Id
router.get('/:plcId', async (req, res) => {
    try {
        const pl = await Placements.findById(req.params.plcId);
        if (pl == null)
            res.status(401).json({ message: "Invalid Id" });
        res.status(200).json(pl);
    }
    catch (err) {
        res.json({ message: err.message });
    }
});


// get list of placements based on company Id
router.get('/placements/:companyId', async (req, res) => {
    try {
        const pl = await Placements.find({ company_id: req.params.companyId });
        if (pl == null)
            res.status(401).json({ message: "Invalid company id" });
        res.status(200).json(pl);
    }
    catch (err) {
        res.json({ message: err.message });
    }
});


// Add placements
router.post("/:companyId", authUser(PERMISSIONS.MED), async (req, res) => {
    try {
        const plObj = new Placements({
            company_id: req.params.companyId,
            job_type: req.body.job_type,
            job_description: req.body.job_description,
            package: req.body.package,
            drive_details: req.body.drive_details,
            placement_batch: req.body.placement_batch,
            posted_date: new Date(req.body.posted_date),
            eligibility: { cgpa: req.body.cgpa, backlogs: req.body.backlogs, branches: req.body.branches },
        });
        const savedPlacement = await plObj.save();
        res.status(201).json(savedPlacement);
    } catch (err) {
        res.json({ message: err.message });
    }
});


// delete placements
router.delete('/:placementId', authUser(PERMISSIONS.MED), async (req, res) => {
    try {
        const pl = await Placements.deleteOne({ _id: req.params.placementId });
        res.json(pl);
    }
    catch (err) {
        res.json({ message: err.message });
    }
});


// update placement
router.patch('/:placementId', authUser(PERMISSIONS.MED), async (req, res) => {
    try {
        const updatedPl = await Placements.updateOne(
            { _id: req.params.placementId },
            {
                $set: req.body
            });
        res.json(updatedPl);
    }
    catch (err) {
        res.json({ message: err.message });
    }
});

//Add Placed Students
router.patch('/addPlacedStudents/:placementId', authUser(PERMISSIONS.MED), async (req, res) => {
    try {
        const placed = req.body.placed_students;
        const updatedPl = await Placements.updateOne(
            { _id: req.params.placementId },
            {
                $set: {
                    placed_students: placed,
                }
            });

        const updatedst = await Students.updateMany(
            {
                $set: {
                    is_placed: true,
                }
            }).where('basic_info.roll_number').in(placed);
        res.json(updatedPl);
    }
    catch (err) {
        res.json({ message: err.message });
    }
});

//register students
router.get('/register/:plcId', authUser(PERMISSIONS.LOW), async (req, res) => {
    try {
        const pl = await Placements.findById(req.params.plcId);
        if (pl == null)
            res.status(401).json({ message: "Invalid Id" });

        const snapId = pl.register_snap;
        const snap = await DataSnapshots.findById(snapId);
        res.status(200).json(snap);
    }
    catch (err) {
        res.json({ message: err.message });
    }
});




module.exports = router;


