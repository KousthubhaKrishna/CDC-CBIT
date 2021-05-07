const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    company_name: { 
        type: String,
        required: [true, 'Please enter company name'],
    },
    description: String,
    photo_url: String,
});

module.exports = mongoose.model('Company', CompanySchema);
