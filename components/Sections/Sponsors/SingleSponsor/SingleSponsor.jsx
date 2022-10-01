import { useLocaleContext } from '@/hooks/useLocaleContext';
import Image from 'next/image';
import Link from 'next/link';
import style from './SingleSponsor.module.scss';

const SingleSponsor = ({ name, prime = false, img, link }) => {
    const { locale } = useLocaleContext();

    return (
        <Link
            href={`${
                locale === 'en' ? '/en' : ''
            }/veganlifefestival2022/${link}`}
        >
            <a
                className={`${style.sponsor} ${
                    prime ? style.prime : ''
                } umami--click--visit-${link}-page-sponsor`}
            >
                <article>
                    <Image
                        src={img}
                        alt={`${name} Logo`}
                        width={prime ? 98 : 80}
                        height={prime ? 98 : 80}
                    />

                    <h1 className={`fs-${prime ? '500' : '300'} text-accent`}>
                        {name}
                    </h1>
                </article>
            </a>
        </Link>
    );
};

export default SingleSponsor;
