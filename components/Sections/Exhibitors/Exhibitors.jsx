import { SearchIcon } from '@/components/Icons/Icons';
import { text } from '@/data/data';
import { useLocaleContext } from '@/hooks/useLocaleContext';
import ExhibitorList from './ExhibitorList/ExhibitorList';
import style from './Exhibitors.module.scss';

const Exhibitors = () => {
    const { locale } = useLocaleContext();
    const { title, description, exhibitors } = text[locale].exhibitors;

    const placeholder =
        locale === 'en'
            ? 'Search for a specific exhibitor'
            : 'Αναζήτησε έναν συγκεκριμένο εκθέτη';

    return (
        <section className={`${style.exhibitors} section`} id="exhibitors">
            <div className="details">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>

            <div className={style.search}>
                <input
                    type="search"
                    placeholder={placeholder}
                    className={`${style.input} bg-light-card`}
                />

                <SearchIcon />
            </div>

            <ExhibitorList exhibitors={exhibitors} />
        </section>
    );
};

export default Exhibitors;
