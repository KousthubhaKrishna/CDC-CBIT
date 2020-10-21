const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const express = require('express');
const router = express.Router();
const { PERMISSIONS, authUser } = require('../middleware/Auth');
const Auth = require('../models/Auth');

// Login
router.post('/login', async (req, res) => {
    const credentials = req.body;
    try {
        // Check user_email
        const account = await Auth.findOne({ "user_email": credentials.user_email });
        if (account == null) return res.status(401).json({ message: "Invalid User Id" });
        
        // Validate Passoword
        const validPass = await bcrypt.compare(credentials.password, account.password);
        if (!validPass) return res.status(401).json({ message: "Incorrect Password" });   
            
        // Send JWT Token and Set Cookie
        const maxAge = 3 * 24 * 60 * 60
        const accessToken = jwt.sign(account.toJSON(), process.env.ACCESS_TOKEN_SECRET, { expiresIn: maxAge });
        res.cookie('jwt', accessToken, { maxAge: maxAge * 1000 });
        res.status(200).send({ message : "Login Success" });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add Student Account
router.post("/addStudent", authUser(PERMISSIONS.MED), async (req, res) => {
    console.log("Adding New Student");
    try {   
        const newStudent = { 
            user_email: req.body.user_email,
            password: req.body.password,
            role: 'student'
        }
        const studentObj = new Auth(newStudent);
        const savedStudent = await studentObj.save();
        res.status(201).json(savedStudent);
    } catch (err) {
        // Error : User Already Exists
        message = err.message
        if (err.code == 11000) {
            message = "User Already Exists !";
            res.status(400).send(message);
        }
        res.json({ message: message });
    }
});

// Add PC Account
router.post("/addCoordinator", authUser(PERMISSIONS.HIGH), async (req, res) => {
    console.log("Adding New Coordinator");
    try {
       var newCoordinator = { 
            user_email: req.body.user_email,
            password: req.body.password,
            role: 'coordinator'
        }
        var coordinatorObj = new Auth(newCoordinator);
        const savedCoordinator = await coordinatorObj.save();
        res.status(201).json(savedCoordinator);
    } catch (err) {
        // Error : User Already Exists
        message = err.message
        if (err.code == 11000) {
            message = "User Already Exists !";
            res.status(400).send(message);
        }
        res.json({ message: message });
    }
});

// Add Admin Account
router.post("/addAdmin", authUser(PERMISSIONS.HIGH), async (req, res) => {
    console.log("Adding New Admin");
    try {
        var newAdmin = { 
            user_email: req.body.user_email,
            password: req.body.password,
            role: 'admin'
        }
        var adminObj = new Auth(newAdmin);
        const savedAdmin = await adminObj.save();
        res.status(201).json(savedAdmin);
    } catch (err) {
        // Error : User Already Exists
        message = err.message
        if (err.code == 11000) {
            message = "User Already Exists !";
            res.status(400).send(message);
        }
        res.json({ message: message });
    }
});

module.exports = router;