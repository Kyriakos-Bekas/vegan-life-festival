/* NextJS handler to save email to db */

// import { connectDB } from '@/util/db'

export default async (req, res) => {
    if (req.method === 'POST') {
        const data = req.body;

        console.log('>>> in handler data', data);

        res.status(200).json({ success: true, data: data });
    } else {
        return res.status(400).json({ success: false });
    }
};
