const mongoose = require('mongoose');

const VeganLifeEmailSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
    },
    { timestamps: true }
);

VeganLifeEmailSchema.statics.register = async function (email, locale = 'gr') {
    const exists = await this.findOne({ email });

    if (exists) {
        const message =
            locale === 'en'
                ? 'This email has already been registered.'
                : 'Αυτό το email έχει ήδη καταχωρηθεί.';
        throw new Error(message);
    }

    const savedEmail = await this.create({ email });

    return savedEmail;
};

const VeganLifeEmail =
    mongoose.models.VeganLifeEmail ||
    mongoose.model('VeganLifeEmail', VeganLifeEmailSchema);

module.exports = VeganLifeEmail;
