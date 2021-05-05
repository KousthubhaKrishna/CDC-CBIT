const express = require("express");
const router = express.Router();
const { PERMISSIONS, authUser } = require("../middleware/Auth");
const Company = require("../models/Company");


// get company list
router.get("/", async (req, res) => {
    try {

        const queryObj = { ...req.query };

        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);

        const query = Company.find(JSON.parse(queryStr));

        const companies = await query;
        res.status(200).json(companies);
    } catch (err) {
        res.json({ message: err.message });
    }
});


// get company based on ID
router.get('/:companyId', async (req, res) => {
    try {
        const company = await Company.findOne({ _id: req.params.companyId });
        if (company == null)
            res.status(401).json({ message: "Invalid company Id" });
        res.status(200).json(company);
    }
    catch (err) {
        res.json({ message: err.message });
    }
});

// Add Company Account
router.post("/", authUser(PERMISSIONS.MED), async (req, res) => {
    console.log("Adding New Company");
    try {

        // const newCompany = await Company.create(req.body);
        // res.status(201).json(newCompany);

        const companyObj = new Company({
            company_id: req.body.companyId,
            company_name: req.body.company_name,
            description: req.body.description,
            photo_url: req.body.photo_url,
        });
        const savedCompany = await companyObj.save();
        res.status(201).json(savedCompany);

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
router.delete('/:companyId', authUser(PERMISSIONS.MED), async (req, res) => {
    try {
        const company = await Company.deleteOne({ company_id: req.params.companyId });
        res.json(company);
    }
    catch (err) {
        res.json({ message: err.message });
    }
});

// update company
router.patch('/:companyId', authUser(PERMISSIONS.MED), async (req, res) => {
    try {
        const updatedCompany = await Company.updateOne(
            { _id: req.params.companyId },
            {
                $set: {
                    company_id: req.body.company_id,
                    company_name: req.body.company_name,
                    description: req.body.description,
                    photo_url: req.body.photo_url
                }
            });
        res.json(updatedCompany);
    }
    catch (err) {
        res.json({ message: err.message });
    }
});



module.exports = router;

