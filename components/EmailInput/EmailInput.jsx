import { useLocaleContext } from '@/hooks/useLocaleContext';
import { useState } from 'react';
import style from './EmailInput.module.scss';

const EmailInput = ({ destination, type = 'newsletter', slug }) => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const { locale } = useLocaleContext();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setMessage('');

        if (!email) {
            const msg =
                locale === 'en'
                    ? 'Please enter your email'
                    : 'Παρακαλώ εισάγετε το email σας';
            setMessage(msg);
            return;
        }

        const response = await fetch('/api/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, slug, destination }),
        });
        const data = await response.json();

        if (!data.success || !response.ok) {
            const msg =
                locale === 'en'
                    ? 'Something went wrong, please try again in a bit'
                    : 'Συνέβη κάποιο σφάλμα, παρακαλώ δοκιμάστε ξανά σε λίγο';
            setMessage(msg);
            return;
        }

        setEmail('');
        e.target.reset();
        const msg = locale === 'en' ? 'Thank you!' : 'Ευχαριστούμε!';
        setMessage(msg);

        setTimeout(() => {
            setMessage('');
        }, 5000);
    };

    return (
        <form onSubmit={handleSubmit} className={style.form}>
            <input
                type="email"
                name="email"
                placeholder={
                    locale === 'gr'
                        ? 'Εισάγετε το email σας'
                        : 'Enter your email here'
                }
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
            />

            <button className={style.submit}>
                {locale === 'gr' ? 'Εγγραφή' : 'Subscribe'}
            </button>

            {message && <p className="fs-200 text-gray">{message}</p>}
        </form>
    );
};

export default EmailInput;
