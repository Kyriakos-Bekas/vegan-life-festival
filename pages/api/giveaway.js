import middleware from '@/lib/middleware';
import Email from '@/models/Email';
import connectDB from '@/util/db';
import Cors from 'cors';

const cors = middleware(
    Cors({
        origin: 'http://127.0.0.1:3000',
        methods: ['POST'],
    })
);

// Set CORS Allow Origin

export default async (req, res) => {
    const { locale, ...data } = req.body;
    if (req.method === 'POST') {
        await cors(req, res);

        await connectDB();

        try {
            const email = Email(data);
            const savedEmail = await email.save();

            // const message = locale === 'en' ? "This email has already been registered." : "Αυτό το email έχει ήδη καταχωρηθεί.";
            // const message = locale === 'en' ? 'Something unexpected happened, please try again later' : 'Συνέβη καποιο σφάλμα, παρακαλούμε προσπαθήστε ξανά αργότερα';
            const message = locale === 'en' ? 'Success!' : 'Επιτυχία!';
            res.status(200).json({ success: true, message, data: savedEmail });
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
