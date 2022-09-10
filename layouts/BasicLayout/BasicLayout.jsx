import Footer from '@/components/Footer/Footer';
import Navigation from '@/components/Navigation/Navigation';
import styles from './BasicLayout.module.scss';

const BasicLayout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Navigation />

            <div className={styles.content}>{children}</div>

            <Footer />
        </div>
    );
};

export default BasicLayout;
