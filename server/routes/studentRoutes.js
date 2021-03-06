const express = require("express");
const router = express.Router();
const { PERMISSIONS, authUser } = require("../middleware/Auth");
const Students = require("../models/Students");
const Auth = require("../models/Auth");
const jwt = require("jsonwebtoken");
const Act = require('../models/Activity');

// get students list
router.get("/", authUser(PERMISSIONS.MED), async (req, res) => {
    try {

        const queryObj = { ...req.query };

        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);

        const query = Students.find(JSON.parse(queryStr));

        const students = await query;
        res.status(200).json(students);
    } catch (err) {
        res.json({ message: err.message });
    }
});

// get student based on Id
router.get("/myProfile", authUser(PERMISSIONS.LOW), async (req, res) => {
    try {
        const token = req.cookies.jwt;
        if (token == null) {
            return res.json({ message: "Not Authorised" });
        }
        var decoded = jwt.decode(token);

        const students = await Students.findById(decoded._id);
        res.status(200).json(students);
    } catch (err) {
        res.json({ message: err.message });
    }
});

// add student details
router.post('/', authUser(PERMISSIONS.LOW), async (req, res) => {
    try {
        const token = req.cookies.jwt;
        if (token == null) {
            return res.json({ message: "Not Authorised" });
        }
        var decoded = jwt.decode(token);

        const stObj = new Students({
            _id: decoded._id,
            basic_info: {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                full_name: req.body.full_name,
                roll_number: req.body.roll_number,
                branch: req.body.branch,
                section: req.body.section,
                placement_batch: req.body.placement_batch,
            },
            contact_info: {
                primary_email: req.body.primary_email,
                secondary_email: req.body.secondary_email,
                mobile: req.body.mobile,
                secondary_mobile: req.body.secondary_mobile,
            },
            education: {
                cgpa: req.body.cgpa,
                backlogs: req.body.backlogs,
                inter_or_diploma_college: req.body.inter_or_diploma_college,
                inter_or_diploma_percentage: req.body.inter_or_diploma_percentage,
                school: req.body.school,
                school_percentage: req.body.school_percentage,
                eamcet_rank: req.body.eamcet_rank,
                jee_rank: req.body.jee_rank,
            },
            personal_info: {
                parent_name: req.body.parent_name,
                address: req.body.address,
                city: req.body.city,
                state: req.body.state,
                zipcode: req.body.zipcode,
                gender: req.body.gender,
                date_of_birth: req.body.date_of_birth,

            },
            photo_url: req.body.photo_url,
            resume_url: req.body.resume_url
        });

        const savedStudent = await stObj.save();

        const newAct = await Act.updateOne({ _id: decoded._id }, {
            $push: { list: { text: "Added Profile Information", actType: "success" } }
        });

        res.status(201).json(savedStudent);
    }
    catch (err) {
        res.json({ message: err.message });
    }
});

// delete student
router.delete('/:userId', authUser(PERMISSIONS.MED), async (req, res) => {
    try {
        const account = await Auth.findByIdAndDelete(req.params.userId);
        const student = await Students.findByIdAndDelete(req.params.userId);
        res.json(account);
    }
    catch (err) {
        res.json({ message: err.message });
    }
});

// update student
router.patch('/', authUser(PERMISSIONS.LOW), async (req, res) => { //use jwt token
    try {
        const token = req.cookies.jwt;
        if (token == null) {
            return res.json({ message: "Not Authorised" });
        }
        var decoded = jwt.decode(token);
        const updatedStudent = await Students.findByIdAndUpdate(
            decoded._id,
            {
                $set: {
                    is_verified: req.body.is_verified,
                    basic_info: {
                        first_name: req.body.first_name,
                        last_name: req.body.last_name,
                        full_name: req.body.full_name,
                        roll_number: req.body.roll_number,
                        branch: req.body.branch,
                        section: req.body.section,
                        placement_batch: req.body.placement_batch,
                    },
                    contact_info: {
                        primary_email: req.body.primary_email,
                        secondary_email: req.body.secondary_email,
                        mobile: req.body.mobile,
                        secondary_mobile: req.body.secondary_mobile,
                    },
                    education: {
                        cgpa: req.body.cgpa,
                        backlogs: req.body.backlogs,
                        inter_or_diploma_college: req.body.inter_or_diploma_college,
                        inter_or_diploma_percentage: req.body.inter_or_diploma_percentage,
                        school: req.body.school,
                        school_percentage: req.body.school_percentage,
                        eamcet_rank: req.body.eamcet_rank,
                        jee_rank: req.body.jee_rank,
                    },
                    personal_info: {
                        parent_name: req.body.parent_name,
                        address: req.body.address,
                        city: req.body.city,
                        state: req.body.state,
                        zipcode: req.body.zipcode,
                        gender: req.body.gender,
                        date_of_birth: req.body.date_of_birth,

                    },
                    photo_url: req.body.photo_url,
                    resume_url: req.body.resume_url
                }
            });

        const newAct = await Act.updateOne({ _id: decoded._id }, {
            $push: { list: { text: "Updated Profile information", actType: "secondary" } }
        });

        res.json(updatedStudent);
    }
    catch (err) {
        res.json({ message: err.message });
    }
});

// verify students
router.patch('/verifyStudents/:stId', authUser(PERMISSIONS.MED), async (req, res) => {
    try {

        const verifiedSt = await Students.updateOne(
            { _id: req.params.stId },
            {
                $set: {
                    is_verified: true,
                }
            });

        const newAct = await Act.updateOne({ _id: req.params.stId }, {
            $push: { list: { text: "Your Profile has been verified", actType: "success" } }
        });

        const token = req.cookies.jwt;
        var decoded = jwt.decode(token);

        const anotherAct = await Act.updateOne({ _id: decoded._id }, {
            $push: { list: { text: "You verified a student", actType: "info" } }
        });

        res.status(200).json({ message: "Student verified", actType: "info" });
    }
    catch (err) {
        res.json({ message: err.message });
    }
});

module.exports = router;

