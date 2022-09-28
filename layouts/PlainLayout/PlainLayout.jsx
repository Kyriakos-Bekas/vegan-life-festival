import { useLocaleContext } from '@/hooks/useLocaleContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const PlainLayout = ({ children }) => {
    const router = useRouter();
    const { dispatch } = useLocaleContext();

    const localeCode = router.asPath.split('/')[1] === 'en' ? 'en' : 'gr';

    useEffect(() => {
        dispatch({ type: localeCode.toUpperCase(), payload: localeCode });
    }, [localeCode]);

    return <>{children}</>;
};

export default PlainLayout;
