import { text } from '@/data/data';
import { displayList as list } from '@/data/exhibitor-display-list';
import { useLocaleContext } from '@/hooks/useLocaleContext';
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

            <ExhibitorList exhibitors={list} />
        </section>
    );
};

export default Exhibitors;
