import { useLocaleContext } from '@/hooks/useLocaleContext';
import style from '@/styles/pages/404.module.scss';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const NotFound = () => {
    const { locale } = useLocaleContext();
    const [countdown, setCountdown] = useState(5);
    const router = useRouter();

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => (prev - 1 > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (countdown === 0) router.push(`/${locale === 'en' ? '/en' : ''}`);

    return (
        <div className={`text-white ${style['not-found']}`}>
            <h1 className="text-light">404...</h1>
            <h2 className="fs-500">
                {locale === 'gr'
                    ? `Η σελίδα που ψάχνετε δεν υπάρχει`
                    : `The page you are looking for does not exist`}
            </h2>
            <p className="fs-300">
                {locale === 'gr'
                    ? `Θα ανακατευθυνθείτε στην αρχική σελίδα σε ${countdown} δευτερόλεπτα.`
                    : `You will be redirected to the home page in ${countdown} seconds.`}
            </p>

            <img src="/sprites/bear.png" alt="404" className={style.sprite} />
        </div>
    );
};

export default NotFound;
