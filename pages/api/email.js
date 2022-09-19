import Email from '@/models/Email';
import VeganLifeEmail from '@/models/VeganLifeEmail';
import connectDB from '@/util/db';
// import middleware from '@/util/middleware';
// import Cors from 'cors';

// Initialize the cors middleware
// const cors = middleware(
//     Cors({
//         origin: process.env.ORIGIN,
//         methods: ['POST'],
//     })
// );

export default async (req, res) => {
    const { locale, ...data } = req.body;

    if (req.method === 'POST') {
        // Run cors
        // await cors(req, res);

        // Connect to database
        await connectDB();

        try {
            const email =
                data.slug === 'vegan-life'
                    ? await VeganLifeEmail.register(data.email, locale)
                    : await Email.register(data.email, data.slug, locale);

            const message = locale === 'en' ? 'Success!' : 'Επιτυχία!';
            res.status(200).json({ success: true, message, data: email });
        } catch (error) {
            const message =
                locale === 'en'
                    ? 'Something unexpected happened, please try again later'
                    : 'Συνέβη καποιο σφάλμα, παρακαλούμε προσπαθήστε ξανά αργότερα';
            return res.status(400).json({ success: false, message });
        }
    } else {
        const message =
            locale === 'en'
                ? 'Something unexpected happened, please try again later'
                : 'Συνέβη καποιο σφάλμα, παρακαλούμε προσπαθήστε ξανά αργότερα';
        return res.status(400).json({ success: false, message });
    }
};
