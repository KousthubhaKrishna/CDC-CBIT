const express = require("express");
const router = express.Router();
const { PERMISSIONS, authUser } = require("../middleware/Auth");
const Coordinators = require("../models/Coordinators");
const Auth = require("../models/Auth");
const jwt = require("jsonwebtoken");



// get Coordinators list
router.get("/", authUser(PERMISSIONS.MED), async (req, res) => {
    try {

        const queryObj = { ...req.query };
        console.log(queryObj);

        const query = Coordinators.find(queryObj);

        const coordinators = await query;
        res.status(200).json(coordinators);
    } catch (err) {
        res.json({ message: err.message });
    }
});

// get Coordinator using ID
router.get("/:Id", authUser(PERMISSIONS.MED), async (req, res) => {
    try {
        const coordinators = await Coordinators.findById(req.params.Id);
        res.status(200).json(coordinators);
    } catch (err) {
        res.json({ message: err.message });
    }
});


// // add coordinator details
// router.post('/', authUser(PERMISSIONS.MED), async(req,res) => {
//     try{
//         const token = req.cookies.jwt;
//         var decoded = jwt_decode(token);

//         const crObj = new Coordinators( {
//             _id : decoded._id,
//             basic_info:{
//                 first_name:req.body.first_name,
//                 last_name:req.body.last_name,
//                 full_name:req.body.full_name,
//                 roll_number:req.body.roll_number,
//                 branch:req.body.branch.toLowerCase(),
//                 section:req.body.section,
//                 placement_batch:req.body.placement_batch,
//             },
//             contact_info:{
//                 primary_email: req.body.primary_email,
//                 secondary_email:req.body.secondary_email,
//                 mobile: req.body.mobile,
//                 secondary_mobile:req.body.secondary_mobile,
//             },
//             photo_url: req.body.photo_url
//         } );

//         const savedCoordinator = await crObj.save();
//         res.status(201).json(savedCoordinator);
//     }
//     catch(err){
//         res.json({ message: err.message });
//     }
// });

// delete coordinator 
router.delete('/:userId', authUser(PERMISSIONS.HIGH), async (req, res) => {
    try {
        const account = await Auth.findByIdAndDelete(req.params.userId);
        const coordinator = await Coordinators.findByIdAndDelete(req.params.userId);
        res.json(account);
    }
    catch (err) {
        res.status(400).send({ message: err.message });
    }
});

// update coordinator
router.patch('/', authUser(PERMISSIONS.MED), async (req, res) => {
    try {
        const token = req.cookies.jwt;
        if (token == null) {
            return res.json({ message: "Not Authorised" });
        }
        var decoded = jwt.decode(token);

        branchStr = req.body.branch.toLowerCase()

        const updatedCoordinator = await Coordinators.findByIdAndUpdate(
            decoded._id,
            {
                $set: {
                    basic_info: {
                        first_name: req.body.first_name,
                        last_name: req.body.last_name,
                        full_name: req.body.full_name,
                        roll_number: req.body.roll_number,
                        branch: branchStr,
                        section: req.body.section,
                        placement_batch: req.body.placement_batch,
                    },
                    contact_info: {
                        primary_email: req.body.primary_email,
                        secondary_email: req.body.secondary_email,
                        mobile: req.body.mobile,
                        secondary_mobile: req.body.secondary_mobile,
                    },
                    photo_url: req.body.photo_url
                }
            });
        res.json(updatedCoordinator);
    }
    catch (err) {
        res.json({ message: err.message });
    }
});



module.exports = router;

