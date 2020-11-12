const express = require("express");
const router = express.Router();
const { PERMISSIONS, authUser } = require("../middleware/Auth");
const Company = require("../models/Company");


// get company list
router.get("/company", async (req, res) => {
    try {
        const companies = await Company.find();
        res.status(200).json(companies);
    } catch (err) {
        res.json({ message: err.message });
    }
});


// get company based on ID
router.get('/company/:companyId',async ( req, res) => {
    console.log(req.params.companyId);
    try{
        const company = await Company.findOne({company_id : req.params.companyId});
        console.log(company);
        if(company == null)
            res.status(401).json({ message: "Invalid company Id" });
        res.status(200).json(company);
    }
    catch(err){
        res.json({ message: err.message });
    }
});

// Add Company Account
router.post("/addCompany", authUser(PERMISSIONS.MED), async (req, res) => {
    console.log("Adding New Company");
    try {

        const newCompany = await Company.create(req.body);
        res.status(201).json(newCompany);

    } catch (err) {
        // Error : User Already Exists
        message = err.message;
        if (err.code == 11000) {
            message = "Company Already Exists !";
            res.status(400).send(message);
        }
        res.json({ message: message });
    }
});


// delete company 
router.delete('/delete_company/:companyId', authUser(PERMISSIONS.MED), async ( req, res) => {
    try{
        const company = await Company.deleteOne({company_id : req.params.companyId});
        res.json(company);
    }
    catch(err){
        res.json({ message: err.message });
    }
});

// update company
router.patch('/update_company/:companyId', authUser(PERMISSIONS.MED), async ( req, res) => {
    try{
        const updatedCompany = await Company.updateOne(
            {company_id : req.params.companyId},
            {$set: {
                company_id : req.body.company_id,
                company_name : req.body.company_name,
                description : req.body.description,
                photo_url : req.body.photo_url
                }    
            });
        res.json(updatedCompany);
    }
    catch(err){
        res.json({ message: err.message });
    }
});



module.exports = router;

