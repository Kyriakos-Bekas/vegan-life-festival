import Footer from '@/components/Footer/Footer';
import Navigation from '@/components/Navigation/Navigation';
import { useLocaleContext } from '@/hooks/useLocaleContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styles from './BasicLayout.module.scss';

const BasicLayout = ({ children }) => {
    const router = useRouter();
    const { dispatch } = useLocaleContext();

    const localeCode = router.asPath.split('/')[1] || 'gr';
    useEffect(() => {
        dispatch({ type: localeCode.toUpperCase(), payload: localeCode });
    }, [localeCode]);

    return (
        <div className={styles.layout}>
            <Navigation />

            <div className={styles.content}>{children}</div>

            <Footer />
        </div>
    );
};

export default BasicLayout;
