import Footer from '@/components/Footer/Footer';
import Navigation from '@/components/Navigation/Navigation';
import PlainLayout from '../PlainLayout/PlainLayout';
import styles from './BasicLayout.module.scss';

const BasicLayout = ({ children }) => {
    return (
        <PlainLayout>
            <div className={styles.layout}>
                <Navigation />

                <div className={styles.content}>{children}</div>

                <Footer />
            </div>
        </PlainLayout>
    );
};

export default BasicLayout;
