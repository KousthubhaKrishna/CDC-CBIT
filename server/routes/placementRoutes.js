const express = require("express");
const InterviewExperience = require("../models/InterviewExperience");
const router = express.Router();
const jwt_decode = require('jwt-decode');
const { decode } = require("jsonwebtoken");
const { PERMISSIONS, authUser } = require("../middleware/Auth");
const Placements = require("../models/Placements");
const Students = require("../models/Students");

// get placements
router.get("/", async (req, res) => {
    try {

        const queryObj = {...req.query};

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
router.get('/:plcId',async ( req, res) => {
    try{
        const pl = await Placements.findById(req.params.plcId);
        if(pl == null)
            res.status(401).json({ message: "Invalid Id" });
        res.status(200).json(pl);
    }
    catch(err){
        res.json({ message: err.message });
    }
});


// get list of placements based on company name
router.get('/placements/:companyName',async ( req, res) => {
    try{
        const pl = await Placements.find({company_name : req.params.companyName});
        if(pl == null)
            res.status(401).json({ message: "Invalid company name" });
        res.status(200).json(pl);
    }
    catch(err){
        res.json({ message: err.message });
    }
});


// Add placements
router.post("/:companyId", authUser(PERMISSIONS.MED), async (req, res) => {
    try {
        const plObj = new Placements( {
            company_id: req.params.companyId,
            job_type: req.body.job_type,
            job_description: req.body.job_description,
            package: req.body.package,
            drive_details: req.body.drive_details,
            placement_batch: req.body.placement_batch,
            posted_date: new Date(req.body.posted_date),
            eligibility:{cgpa: req.body.cgpa, backlogs: req.body.backlogs, branches: req.body.branches}, 
            announcements:{message: req.body.message, date: new Date(req.body.ann_date)},   
        });
        const savedPlacement = await plObj.save();
        res.status(201).json(savedPlacement);
    } catch (err) {
        res.json({ message: err.message });
    }
});


// delete placements
router.delete('/:placementId', authUser(PERMISSIONS.MED), async ( req, res) => {
    try{
        const pl = await Placements.deleteOne({_id : req.params.placementId});
        res.json(pl);
    }
    catch(err){
        res.json({ message: err.message });
    }
});


// update placement
router.patch('/:placementId', authUser(PERMISSIONS.MED), async ( req, res) => {
    try{
        
        const updatedPl = await Placements.updateOne(
            {_id : req.params.placementId},
            {$set: {
                job_type: req.body.job_type,
                job_description: req.body.job_description,
                package: req.body.package,
                drive_details: req.body.drive_details,
                placement_batch: req.body.placement_batch,
                posted_date: new Date(req.body.posted_date),
                eligibility:{cgpa: req.body.cgpa, backlogs: req.body.backlogs, branches: req.body.branches}, 
                announcements:{message: req.body.message, date: new Date(req.body.ann_date)},
                }    
            });
        res.json(updatedPl);
    }
    catch(err){
        res.json({ message: err.message });
    }
});

//Add Placed Students
router.patch('/addPlacedStudents/:placementId', authUser(PERMISSIONS.MED), async ( req, res) => {
    try{
        const placed = req.body.placed_students;
        const updatedPl = await Placements.updateOne(
            {_id : req.params.placementId},
            {$set: {
                placed_students: placed,
                }    
            });
        
         const updatedst = await Students.updateMany( 
            {$set: {
                is_placed: true,}    
            }).where('basic_info.roll_number').in(placed);  
            console.log(updatedst);       
        res.json(updatedPl);
    }
    catch(err){
        res.json({ message: err.message });
    }
});

module.exports = router;
