const express = require("express");
const InterviewExperience = require("../models/InterviewExperience");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { PERMISSIONS, authUser } = require("../middleware/Auth");
const Act = require('../models/Activity');


// get interview experiences
router.get("/", async (req, res) => {
    try {
        const queryObj = { ...req.query };

        const experiences = await InterviewExperience.find(queryObj).sort([['date', -1]]);
        res.status(200).json(experiences);
    } catch (err) {
        res.json({ message: err.message });
    }
});

// get InterviewExperience based on Id
router.get("/:Id", async (req, res) => {
    try {
        const experience = await InterviewExperience.findById(req.params.Id);
        res.status(200).json(experience);
    } catch (err) {
        res.json({ message: err.message });
    }
});

// get list of interview experiences based on company name
router.get('/exp/:companyName', async (req, res) => {
    try {
        const exp = await InterviewExperience.find({ company_name: req.params.companyName });
        if (exp == null)
            res.status(401).json({ message: "Invalid company name" });
        res.status(200).json(exp);
    }
    catch (err) {
        res.json({ message: err.message });
    }
});

// Add interview experience
router.post("/", authUser(PERMISSIONS.LOW), async (req, res) => {
    try {
        const token = req.cookies.jwt;
        var decoded = jwt.decode(token);

        const newExp = {
            title: req.body.title,
            company_name: req.body.company_name,
            content: req.body.content,
            created_by: decoded._id,
        };
        const expObj = new InterviewExperience(newExp);
        const savedExp = await expObj.save();

        const newAct = await Act.updateOne({ _id: decoded._id }, {
            $push: { list: { text: "Added an Interview Experience - " + req.body.title, actType: "success" } }
        });
        res.status(201).json(savedExp);
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
});


// delete experience 
router.delete('/:expId', authUser(PERMISSIONS.MED), async (req, res) => {
    try {
        const exp = await InterviewExperience.deleteOne({ _id: req.params.expId });
        res.status(200).send(exp);
    }
    catch (err) {
        res.status(400).send({ message: err.message });
    }
});

// delete my exp
router.delete('/deleteMyExp/:expId', authUser(PERMISSIONS.LOW), async (req, res) => {
    try {
        const token = req.cookies.jwt;
        var decoded = jwt.decode(token);

        const creator = await InterviewExperience.findById(req.params.expId);

        if (creator.created_by._id != decoded._id) {
            return res.status(403).json({ message: "Not Authorised" });
        }
        const exp = await InterviewExperience.deleteOne({ _id: req.params.expId });

        const newAct = await Act.updateOne({ _id: decoded._id }, {
            $push: { list: { text: "Deleted a Interview Experience", actType: "error" } }
        });

        res.json(exp);
    }
    catch (err) {
        res.json({ message: err.message });
    }
});

// update experience
router.patch('/:expId', authUser(PERMISSIONS.LOW), async (req, res) => {
    try {
        const token = req.cookies.jwt;
        var decoded = jwt.decode(token);

        const creator = await InterviewExperience.findById(req.params.expId);

        if (creator.created_by._id != decoded._id) {
            return res.status(403).json({ message: "Not Authorised" });
        }

        const updatedExp = await InterviewExperience.updateOne(
            { _id: req.params.expId },
            {
                $set: {
                    title: req.body.title,
                    company_name: req.body.company_name,
                    content: req.body.content,
                    date: new Date(req.body.date),
                }
            });

        const newAct = await Act.updateOne({ _id: decoded._id }, {
            $push: { list: { text: "Updated an Interview Experience -" + req.body.title, actType: "info" } }
        });

        res.json(updatedExp);
    }
    catch (err) {
        res.json({ message: err.message });
    }
});



module.exports = router;

