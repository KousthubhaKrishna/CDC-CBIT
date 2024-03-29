const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const cookieParser = require("cookie-parser");
const express = require("express");
const router = express.Router();
const { ROLES, PERMISSIONS, authUser } = require("../middleware/Auth");
const SendEmail = require("../middleware/SendEmail");
const Auth = require("../models/Auth");
const Students = require("../models/Students");
const Coordinators = require("../models/Coordinators");
const Token = require("../models/Token")
const Act = require('../models/Activity');

//all studentAccounts
router.get("/accounts/:role", authUser(PERMISSIONS.MED), async (req, res) => {
    try {

        const queryObj = { role: req.params.role };

        const query = Auth.find(queryObj);

        const accounts = await query;
        res.status(200).json(accounts);
    } catch (err) {
        res.json({ message: err.message });
    }
});

//all studentAccounts
router.delete("/deleteAdmin/:userId", authUser(PERMISSIONS.HIGH), async (req, res) => {
    try {
        const admin = await Auth.findByIdAndDelete(req.params.userId);
        res.json(admin);
    }
    catch (err) {
        res.json({ message: err.message });
    }
});

// Login
router.post("/login", async (req, res) => {
    const credentials = req.body;
    try {
        // Check user_email
        const account = await Auth.findOne({
            user_email: credentials.user_email,
        });
        if (account == null)
            return res.status(401).json({ message: "Invalid User Id" });

        // Validate Passoword
        const validPass = await bcrypt.compare(
            credentials.password,
            account.password
        );
        if (!validPass)
            return res.status(401).json({ message: "Incorrect Password" });

        // Start Recording Student Activity if not present
        const act = await Act.findById(account._id);
        if (!act) {
            const newAct = new Act({ _id: account._id, list: [{ text: "Logged in for the first time", actType: "success" }] });
            const savedAct = await newAct.save();
        }

        // Send JWT Token and Set Cookie
        const maxAge = 3 * 24 * 60 * 60;
        const accessToken = jwt.sign(
            account.toJSON(),
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: maxAge }
        );
        res.cookie("jwt", accessToken, {
            maxAge: maxAge * 1000,
            httpOnly: false,
        });
        res.status(200).send({ message: "Login Success" });
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
            role: "student",
            branch: req.body.branch,
            roll_number: req.body.roll_number,
            section: req.body.section,
            placement_batch: req.body.placement_batch,
        };
        const studentObj = new Auth(newStudent);
        const savedStudent = await studentObj.save();
        res.status(201).json(savedStudent);
    } catch (err) {
        // Error : User Already Exists
        console.log(err.message);
        message = err.message;
        if (err.code == 11000) {
            message = "User Already Exists !";
            res.status(400).send(message);
        }
        res.status(400).send({ message: message });
    }
});

// Add PC Account
router.post("/addCoordinator", authUser(PERMISSIONS.HIGH), async (req, res) => {
    console.log("Adding New Coordinator");
    try {
        var newCoordinator = {
            user_email: req.body.user_email,
            role: "coordinator",
            branch: req.body.branch,
            roll_number: req.body.roll_number,
            section: req.body.section,
            placement_batch: req.body.placement_batch,
        };
        var coordinatorObj = new Auth(newCoordinator);
        const savedCoordinator = await coordinatorObj.save();
        res.status(201).json(savedCoordinator);
    } catch (err) {
        // Error : User Already Exists
        message = err.message;
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
            role: "admin",
        };
        var adminObj = new Auth(newAdmin);
        const savedAdmin = await adminObj.save();
        res.status(201).json(savedAdmin);
    } catch (err) {
        // Error : User Already Exists
        message = err.message;
        if (err.code == 11000) {
            message = "User Already Exists !";
            res.status(400).send(message);
        }
        res.json({ message: message });
    }
});

// Add Student Account
router.patch("/updateStudent", authUser(PERMISSIONS.MED), async (req, res) => {
    console.log("Updating Student");
    try {
        const newStudent = {
            user_email: req.body.user_email,
            role: "student",
            branch: req.body.branch,
            roll_number: req.body.roll_number,
            section: req.body.section,
            placement_batch: req.body.placement_batch,
        };
        const studentObj = await Auth.updateOne({ _id: req.body._id }, { $set: { ...newStudent } });

        const newAct = await Act.updateOne({ _id: req.body._id }, {
            $push: { list: { text: "Your Profile has been modified by a Coordinator", actType: "info" } }
        });

        res.status(201).json(studentObj);
    } catch (err) {
        // Error : User Already Exists
        console.log(err.message);
        message = err.message;
        res.status(400).send({ message: message });
    }
});

// Add PC Account
router.patch("/updateCoordinator", authUser(PERMISSIONS.HIGH), async (req, res) => {
    console.log("Updating Coordinator");
    try {
        var newCoordinator = {
            user_email: req.body.user_email,
            password: req.body.password,
            role: "coordinator",
            branch: req.body.branch,
            roll_number: req.body.roll_number,
            section: req.body.section,
            placement_batch: req.body.placement_batch,
        };
        var coordinatorObj = await Auth.updateOne({ _id: req.body._id }, { $set: { ...newCoordinator } });

        const newAct = await Act.updateOne({ _id: req.body._id }, {
            $push: { list: { text: "Your Profile has been modified by a Coordinator", actType: "info" } }
        });

        res.status(201).json(coordinatorObj);
    } catch (err) {
        // Error : User Already Exists
        message = err.message;
        res.json({ message: message });
    }
});

// Logout
router.delete("/logout", async (req, res) => {
    const token = req.cookies.jwt;
    if (token != null) {
        res.clearCookie("jwt");
    }
    res.status(200).json({ message: "Logged out" });
});

module.exports = router;

// Password Reset Request
router.get("/forgot_password/:user_email", async (req, res) => {
    try {
        user_email = req.params.user_email
        const account = await Auth.findOne({
            user_email: user_email,
        });
        if (account == null)
            return res.status(401).json({ message: "Account does not exists for given email" });

        reset_token = crypto.randomBytes(20).toString('hex');
        const existing_token = await Token.findOne({
            user_email: user_email,
        });
        if (existing_token != null) {

            const updateToken = await Token.updateOne(
                { user_email: user_email },
                {
                    $set: {
                        value: reset_token,
                        createdAt: new Date(),
                    }
                });

            console.log(updateToken);

        } else {
            const insObj = new Token({
                user_email: user_email,
                value: reset_token,
                createdAt: new Date(),
            });
            const insertToken = await insObj.save();

            console.log(insertToken);
        }

        const link = `${process.env.WEBSITE_URL}${user_email}/${reset_token}`;
        const responseMessage = await SendEmail(user_email, "Password Reset Request", { email: user_email, link: link, }, "./template/requestResetPassword.handlebars");
        res.json({ message: responseMessage.message });
    } catch (err) {

        res.status(400).json({ message: err.message });
    }
});

router.post("/forgot_password_reset/", async (req, res) => {
    // body has token email and new password
    try {
        const password_token = req.body.token;
        const user_email = req.body.email;

        const salt = await bcrypt.genSalt();
        const new_password = await bcrypt.hash(req.body.newPassword, salt);

        const obj = await Token.findOne({ user_email: user_email });

        if (obj.value == password_token) {
            const updateAuth = await Auth.updateOne(
                { user_email: user_email },
                {
                    $set: {
                        password: new_password
                    },
                });

            const newAct = await Act.updateOne({ _id: updateAuth._id }, {
                $push: { list: { text: "Your Password was changed.", actType: "success" } }
            });
            res.status(200).send({ message: "Password change Successful" });
        }
        else {
            res.status(403).json({ message: "Token not matched" });
        }
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// reset passowor func
// reset pasword via email or id

// change passowrd - input old passowrd and new password , comapre and call reset password

router.post("/password_reset/", async (req, res) => {
    //body has old password,new password
    try {
        const token = req.cookies.jwt;
        if (token == null) {
            return res.json({ message: "Not Authorised" });
        }

        var decoded = jwt.decode(token);
        const old_password_object = await Auth.findById(decoded._id);
        old_password_db = old_password_object.password;

        const salt = await bcrypt.genSalt();
        const new_password = await bcrypt.hash(req.body.new_password, salt);

        const validPass = await bcrypt.compare(
            req.body.old_password,
            old_password_db
        );

        if (validPass) {
            const updateAUth = await Auth.findByIdAndUpdate(decoded._id,
                { password: new_password }
            );
            res.status(200).send({ message: "Password change Successful" });
        }
        else {
            res.json({ message: "Old Password is incorrect " });
        }
    }
    catch (err) {
        res.json({ message: err.message });
    }
});

