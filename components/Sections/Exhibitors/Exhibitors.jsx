import { text } from '@/data/data';
import { displayList as list } from '@/data/exhibitor-display-list';
import { useLocaleContext } from '@/hooks/useLocaleContext';
// import style from '@/styles/pages/Exhibitors.module.scss';
import ExhibitorList from './ExhibitorList/ExhibitorList';
import Search from './Search/Search';

const Exhibitors = () => {
    const { locale } = useLocaleContext();
    const { title, description } = text[locale].exhibitors;

    return (
        <section className="section" id="exhibitors">
            <div className="details">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>

            <Search />

            {/* <div className={style['list-container']}> */}
            <ExhibitorList exhibitors={list} />
            {/* </div> */}
        </section>
    );
};

export default Exhibitors;
