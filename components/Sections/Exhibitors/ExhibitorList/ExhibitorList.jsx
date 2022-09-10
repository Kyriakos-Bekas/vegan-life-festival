import { DownIcon } from '@/components/Icons/Icons';
import { useAlphabetically } from '@/hooks/useAlphabetically';
import { useState } from 'react';
import style from './ExhibitorList.module.scss';
import ExhibitorListItem from './ExhibitorListItem/ExhibitorListItem';

const listEN = [
    {
        name: 'John Doe',
        number: 123,
        sponsor: true,
        link: '#',
    },
    {
        name: 'Owen Wilson',
        number: 32,
        sponsor: false,
        link: '#',
    },
    {
        name: 'Zendaya',
        number: 80,
        sponsor: false,
        link: '',
    },
    {
        name: 'Aaron Paul',
        number: 24,
        sponsor: true,
        link: '#',
    },
];

const listGR = [
    {
        name: 'Γιάννης Παπαδόπουλος',
        number: 123,
        sponsor: true,
        link: '#',
    },
    {
        name: 'Γιώργος Ηλιάδης',
        number: 105,
        sponsor: true,
        link: '',
    },
    {
        name: 'Ορφέας Γεωργίου',
        number: 32,
        sponsor: false,
        link: '#',
    },
    {
        name: 'Ζαχαρίας Καραγιάννης',
        number: 80,
        sponsor: false,
        link: '#',
    },
    {
        name: 'Άρτεμις Ιορδάνου',
        number: 24,
        sponsor: true,
        link: '#',
    },
];

const ExhibitorList = () => {
    const [collapsed, setCollapsed] = useState(true);
    const locale = 'gr';

    const text =
        locale === 'en'
            ? collapsed
                ? 'Show list'
                : 'Hide list'
            : collapsed
            ? 'Εμφάνιση λίστας'
            : 'Απόκρυψη λίστας';

    const list = locale === 'en' ? listEN : listGR;

    const arrays = useAlphabetically(list, locale);

    return (
        <div className={`${style.list} ${collapsed ? style.collapsed : ''}`}>
            <div className={style.head}>
                <div onClick={() => setCollapsed((prev) => !prev)}>
                    <h3 className="fs-400 text-dark">{text}</h3>
                    <DownIcon />
                </div>
            </div>

            <div className={style['list-content']}>
                <ul className={style['letter-list']}>
                    {arrays.map((array, index) => (
                        <li key={index}>
                            <h2 className={`${style.index} fs-300 text-gray`}>
                                {array.letter}
                            </h2>

                            <ul>
                                {array.exhibitors.map((exhibitor, index) => (
                                    <ExhibitorListItem
                                        key={index}
                                        exhibitor={exhibitor}
                                    />
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ExhibitorList;
