import { DownIcon } from '@/components/Icons/Icons';
import { useAlphabetically } from '@/hooks/useAlphabetically';
import { useLocaleContext } from '@/hooks/useLocaleContext';
import { useState } from 'react';
import style from './ExhibitorList.module.scss';
import ExhibitorListItem from './ExhibitorListItem/ExhibitorListItem';

const ExhibitorList = ({ exhibitors }) => {
    const [collapsed, setCollapsed] = useState(true);
    const { locale } = useLocaleContext();

    const text =
        locale === 'en'
            ? collapsed
                ? 'Show list'
                : 'Hide list'
            : collapsed
            ? 'Εμφάνιση λίστας'
            : 'Απόκρυψη λίστας';

    const arrays = useAlphabetically(exhibitors, locale);

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
