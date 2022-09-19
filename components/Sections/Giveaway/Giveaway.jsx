import { text } from '@/data/data';
import { useLocaleContext } from '@/hooks/useLocaleContext';
import { useState } from 'react';
import style from './Giveaway.module.scss';

const Giveaway = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const { locale } = useLocaleContext();
    const { title, description, placeholder, button } = text[locale].giveaway;

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

        const response = await fetch('/api/giveaway', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, slug: 'vegan-life', locale }),
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
        const msg = locale === 'en' ? 'Success!' : 'Επιτυχία!';
        setMessage(msg);

        setTimeout(() => {
            setMessage('');
        }, 5000);
    };

    return (
        <section className={`section ${style.giveaway}`} id="giveaway">
            <h1 className={`fs-700 text-white ff-giveaway ${style.title}`}>
                {title}
            </h1>
            <div className={`fs-300 text-black ${style.description}`}>
                <p>{description[0]}</p>
                <p>{description[1]}</p>
            </div>
            <form className={style.form} onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder={placeholder}
                    className="input"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="on"
                />
                <button className={`ff-giveaway ${style.submit}`}>
                    {button}
                </button>

                <p className={`fs-300 text-black ${style.message}`}>
                    {message}
                </p>
            </form>

            <svg
                className={style.blob}
                width="75"
                height="125"
                viewBox="0 0 75 125"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clipPath="url(#clip0_163_50)">
                    <circle cx="4.5" cy="22.5" r="21.5" fill="#D15E49" />
                    <circle cx="19" cy="75" r="49" fill="#EE674F" />
                </g>
                <defs>
                    <clipPath id="clip0_163_50">
                        <rect width="75" height="125" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </section>
    );
};

export default Giveaway;
