const express = require("express");
const router = express.Router();
const { PERMISSIONS, authUser } = require("../middleware/Auth");
const Act = require('../models/Activity');
const jwt = require("jsonwebtoken");


// get announcements
router.get("/:id", authUser(PERMISSIONS.LOW), async (req, res) => {
    try {
        const act = await Act.findById(req.params.id);
        res.status(200).json(act);
    } catch (err) {
        res.json({ message: err.message });
    }
});

module.exports = router;


