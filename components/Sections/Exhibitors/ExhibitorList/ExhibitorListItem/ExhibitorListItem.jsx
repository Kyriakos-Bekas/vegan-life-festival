import { LinkIcon, StarIcon } from '@/components/Icons/Icons';
import { useLocaleContext } from '@/hooks/useLocaleContext';
import Link from 'next/link';
import style from './ExhibitorListItem.module.scss';

const ExhibitorListItem = ({ exhibitor }) => {
    const { name, number, sponsor, slug } = exhibitor;
    const { locale } = useLocaleContext();

    return (
        <li className={style.item}>
            {slug ? (
                <Link href={`${locale === 'en' ? '/en' : ''}/${slug}`}>
                    <a>
                        <article>
                            {sponsor && <StarIcon />}

                            <div className={style.data}>
                                <h1 className={`${style.name} text-dark`}>
                                    {name}
                                </h1>
                                <div className={style.divider}></div>
                                <p className={`${style.number} text-gray`}>
                                    {number}
                                </p>
                            </div>

                            <div className={style.icon}>
                                <LinkIcon />
                            </div>
                        </article>
                    </a>
                </Link>
            ) : (
                <article>
                    {sponsor && <StarIcon />}

                    <div className={style.data}>
                        <h1 className={`${style.name} text-dark`}>{name}</h1>
                        <div className={style.divider}></div>
                        <p className={`${style.number} text-gray`}>{number}</p>
                    </div>
                </article>
            )}
        </li>
    );
};

export default ExhibitorListItem;
