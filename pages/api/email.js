import Email from '@/models/Email';
import VeganLifeEmail from '@/models/VeganLifeEmail';
import connectDB from '@/util/db';

export default async function handler(req, res) {
    const { locale, ...data } = req.body;

    if (req.method === 'POST') {
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
}
