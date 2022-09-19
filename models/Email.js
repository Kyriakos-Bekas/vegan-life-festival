const mongoose = require('mongoose');

const EmailSchema = new mongoose.Schema(
    {
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
    },
    { timestamps: true }
);

EmailSchema.statics.register = async function (email, slug, locale = 'gr') {
    const exists = await this.findOne({ email });

    if (exists) {
        const message =
            locale === 'en'
                ? 'This email has already been registered.'
                : 'Αυτό το email έχει ήδη καταχωρηθεί.';
        throw new Error(message);
    }

    const savedEmail = await this.create({ email, slug });

    return savedEmail;
};

const Email = mongoose.models.Email || mongoose.model('Email', EmailSchema);

module.exports = Email;