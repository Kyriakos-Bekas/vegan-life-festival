import { SearchIcon } from '@/components/Icons/Icons';
import { displayList as exhibitors } from '@/data/exhibitor-display-list';
import { useLocaleContext } from '@/hooks/useLocaleContext';
import { searchExhibitors } from '@/util/searchExhibitors';
import { useEffect, useState } from 'react';
import ExhibitorListItem from '../ExhibitorList/ExhibitorListItem/ExhibitorListItem';
import style from './Search.module.scss';

// ! Only searches correctly for one of the options in each locale
const Search = () => {
    const { locale } = useLocaleContext();
    const [searchString, setSearchString] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        const searchResults = searchExhibitors(searchString, exhibitors);
        setResults(searchResults);
    }, [searchString]);

    const handleChange = (e) => setSearchString(e.target.value);

    return (
        <div className={style.search}>
            <div className={style['input-container']}>
                <input
                    type="search"
                    placeholder={
                        locale === 'en'
                            ? 'Search for a specific exhibitor'
                            : 'Αναζήτησε έναν συγκεκριμένο εκθέτη'
                    }
                    className={`${style.input} bg-light-card`}
                    onChange={handleChange}
                />

                <SearchIcon />
            </div>

            {searchString !== '' && (
                <div className={style.results}>
                    <p>
                        {locale === 'en'
                            ? 'Search Results'
                            : 'Αποτελέσματα αναζήτησης'}
                    </p>

                    {results.length > 0 ? (
                        <ul>
                            {results.map((exhibitor, index) => (
                                <ExhibitorListItem
                                    key={index}
                                    exhibitor={exhibitor}
                                />
                            ))}
                        </ul>
                    ) : (
                        <p
                            className={`fs-200 text-gray ${style['no-results']}`}
                        >
                            {locale === 'en'
                                ? 'No results found'
                                : 'Δεν βρέθηκαν αποτελέσματα'}
                        </p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Search;
