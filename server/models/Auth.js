const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Auth = new mongoose.Schema({
    user_email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: true

    },
    password: {
        type: String,
        default: "password"
    },
    role: {
        type: String,
        enum: ["student", "coordinator", "admin"],
        default: "student"
    },
    roll_number: {
        type: String,
        unique: [true, "Student with Roll Number Already Exists"],
        maxlength: 12,
        minlength: 12,
    },
    branch: {
        type: String,
        lowercase: true
    },
    section: {
        type: String,
        maxlength: 1
    },
    placement_batch: {
        type: String,
    },
});
Auth.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

module.exports = mongoose.model("auth", Auth);