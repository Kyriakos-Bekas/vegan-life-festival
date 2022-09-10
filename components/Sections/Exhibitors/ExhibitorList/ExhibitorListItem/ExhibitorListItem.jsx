import { LinkIcon, StarIcon } from '@/components/Icons/Icons';
import Link from 'next/link';
import style from './ExhibitorListItem.module.scss';

const ExhibitorListItem = ({ exhibitor }) => {
    const { name, number, sponsor, link } = exhibitor;

    return (
        <li className={style.item}>
            <article>
                {sponsor && <StarIcon />}

                <div className={style.data}>
                    <h1 className={`${style.name} text-dark`}>{name}</h1>
                    <div className={style.divider}></div>
                    <p className={`${style.number} text-gray`}>{number}</p>
                </div>
                {link && (
                    <Link href={link}>
                        <a className={style.link}>
                            <LinkIcon />
                        </a>
                    </Link>
                )}
            </article>
        </li>
    );
};

export default ExhibitorListItem;
