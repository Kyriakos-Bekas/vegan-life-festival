import { useLocaleContext } from '@/hooks/useLocaleContext';
import { useState } from 'react';
import style from './EmailInput.module.scss';

const EmailInput = ({ destination, type = 'newsletter' }) => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const { locale } = useLocaleContext();

    const handleSubmit = (e) => {
        e.preventDefault();

        setMessage('');

        if (!email) {
            const msg =
                locale === 'gr'
                    ? 'Παρακαλώ συμπληρώστε το email σας'
                    : 'Please enter your email';
            setMessage(msg);
            return;
        }

        // TODO : Handle email submission and storing
        console.log('email: ', email);

        setEmail('');
        const msg = locale === 'gr' ? 'Ευχαριστούμε!' : 'Thank you!';
        setMessage(msg);
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
            />

            <button className={style.submit}>
                {locale === 'gr' ? 'Εγγραφή' : 'Subscribe'}
            </button>

            {message && <p className="fs-200 text-gray">{message}</p>}
        </form>
    );
};

export default EmailInput;
