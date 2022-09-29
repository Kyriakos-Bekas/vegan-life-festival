import { text } from '@/data/data';
import { useLocaleContext } from '@/hooks/useLocaleContext';
import Link from 'next/link';
import style from './Newsletter.module.scss';

const Newsletter = () => {
    const { locale } = useLocaleContext();
    const { title, description, link } = text[locale].newsletter;

    return (
        <section className={`section ${style.newsletter}`} id="newsletter">
            <h1 className={`fs-700 text-white ff-giveaway ${style.title}`}>
                {title}
            </h1>
            <div className={`fs-300 text-black ${style.description}`}>
                <p>{description[0]}</p>
                <p>{description[1]}</p>
            </div>

            <div className={style.util}>
                <Link href={link}>
                    <a
                        className={`ff-giveaway ${style.subscribe}`}
                        target="_blank"
                    >
                        {locale === 'en' ? 'Subscribe' : 'Εγγραφή'}
                    </a>
                </Link>
            </div>

            <svg
                className={style.blob}
                width="105"
                height="125"
                viewBox="0 0 105 125"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="34.5" cy="22.5" r="21.5" fill="#D15E49" />
                <circle cx="49" cy="75" r="49" fill="#EE674F" />
            </svg>
        </section>
    );
};

export default Newsletter;
