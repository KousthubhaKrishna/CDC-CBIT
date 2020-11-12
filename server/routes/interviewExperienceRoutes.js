const express = require("express");
const InterviewExperience = require("../models/InterviewExperience");
const router = express.Router();
const jwt_decode = require('jwt-decode');
const { decode } = require("jsonwebtoken");
const { PERMISSIONS, authUser } = require("../middleware/Auth");
 

// get interview experiences
router.get("/interviewExp", async (req, res) => {
    try {
        const experiences = await InterviewExperience.find();
        res.status(200).json(experiences);
    } catch (err) {
        res.json({ message: err.message });
    }
});


// get list of interview experiences based on company name
router.get('/exp/:companyName',async ( req, res) => {
    try{
        const exp = await InterviewExperience.find({company_name : req.params.companyName});
        if(exp == null)
            res.status(401).json({ message: "Invalid company name" });
        res.status(200).json(exp);
    }
    catch(err){
        res.json({ message: err.message });
    }
});

// Add interview experience
router.post("/addInterviewExperience", authUser(PERMISSIONS.LOW), async (req, res) => {
    try {
        const token = req.cookies.jwt;
        var decoded = jwt_decode(token);

        const newExp = {
            company_name: req.body.company_name,
            content: req.body.content,
            date: new Date(req.body.date),
            created_by: decoded._id,
        };
        const expObj = new InterviewExperience(newExp);
        const savedExp = await expObj.save();
        res.status(201).json(savedExp);
    } catch (err) {
        res.json({ message: err.message });
    }
});


// delete experience 
router.delete('/delete_exp/:expId', authUser(PERMISSIONS.LOW), async ( req, res) => {
    try{
        const exp = await InterviewExperience.deleteOne({_id : req.params.expId});
        res.json(exp);
    }
    catch(err){
        res.json({ message: err.message });
    }
});

// update experience
router.patch('/update_exp/:expId', authUser(PERMISSIONS.LOW), async ( req, res) => {
    try{
        const token = req.cookies.jwt;
        var decoded = jwt_decode(token);

        const creator = await InterviewExperience.findById(req.params.expId);

        if(creator.created_by != decoded._id)
        {
            return res.status(403).json({ message: "Not Authorised"});
        }

        const updatedExp = await InterviewExperience.updateOne(
            {_id : req.params.expId},
            {$set: {
                company_name: req.body.company_name,
                content: req.body.content,
                date: new Date(req.body.date),
                }    
            });
        res.json(updatedExp);
    }
    catch(err){
        res.json({ message: err.message });
    }
});



module.exports = router;

