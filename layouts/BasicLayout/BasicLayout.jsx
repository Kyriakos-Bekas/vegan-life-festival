import Footer from '@/components/Footer/Footer';
import Navigation from '@/components/Navigation/Navigation';
import PlainLayout from '../PlainLayout/PlainLayout';
import style from './BasicLayout.module.scss';

const BasicLayout = ({ children }) => {
    return (
        <PlainLayout>
            <div className={style.layout}>
                <Navigation />

                <div className={style.content}>{children}</div>

                <Footer />
            </div>
        </PlainLayout>
    );
};

export default BasicLayout;
