const express = require("express");
const router = express.Router();
const { PERMISSIONS, authUser } = require("../middleware/Auth");
const Coordinators = require("../models/Coordinators");


// get Coordinators list
router.get("/coordinators", async (req, res) => {
    try {
        const coordinators = await Coordinators.find();
        res.status(200).json(coordinators);
    } catch (err) {
        res.json({ message: err.message });
    }
});

// add coordinatoe details
router.post('/register_coordinator', authUser(PERMISSIONS.MED), async(req,res) => {
    try{
        const token = req.cookies.jwt;
        var decoded = jwt_decode(token);

        const crObj = new Coordinators( {
            _id : decoded._id,
            basic_info:{
                first_name:req.body.first_name,
                last_name:req.body.last_name,
                full_name:req.body.full_name,
                roll_number:req.body.roll_number,
                branch:req.body.branch,
                section:req.body.section,
                placement_batch:req.body.placement_batch,
            },
            contact_info:{
                primary_email: req.body.primary_email,
                secondary_email:req.body.secondary_email,
                mobile: req.body.mobile,
                secondary_mobile:req.body.secondary_mobile,
            },
            photo_url: req.body.photo_url
        } );
        
        const savedCoordinator = await crObj.save();
        res.status(201).json(savedCoordinator);
    }
    catch(err){
        res.json({ message: err.message });
    }
});

// delete coordinator 
router.delete('/delete_coordinator/:userId', authUser(PERMISSIONS.HIGH), async ( req, res) => {
    try{
        const coordinator = await Coordinators.findByIdAndDelete(req.params.userId);
        res.json(coordinator);
    }
    catch(err){
        res.json({ message: err.message });
    }
});

// update coordinator
router.patch('/update_coordinator/:Id', authUser(PERMISSIONS.MED), async ( req, res) => {
    try{
        const updatedCoordinator = await Coordinators.findByIdAndUpdate( 
            req.params.Id,
            {$set: {
                basic_info:{
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    full_name: req.body.full_name,
                    roll_number: req.body.roll_number,
                    branch: req.body.branch,
                    section: req.body.section,
                    placement_batch: req.body.placement_batch,
                },
                contact_info:{
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
    catch(err){
        res.json({ message: err.message });
    }
});



module.exports = router;

