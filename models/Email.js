const mongoose = require('mongoose');

const EmailSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    slug: {
        type: String,
        required: true,
    },
    destination: String,
});

const Email = mongoose.models.Email || mongoose.model('Email', EmailSchema);

module.exports = Email;
