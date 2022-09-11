import Image from 'next/image';
import Link from 'next/link';
import style from './SingleSponsor.module.scss';

const SingleSponsor = ({ name, prime = false, img, link }) => {
    return (
        <Link href={link}>
            <a className={`${style.sponsor} ${prime ? style.prime : ''}`}>
                <article>
                    <Image
                        src={img}
                        alt={`${name} Logo`}
                        width={prime ? 61 : 48}
                        height={prime ? 61 : 48}
                    />
                    {/* <img src={img} alt={`${name} Logo`} /> */}

                    <h1 className={`fs-${prime ? '400' : '200'} text-dark`}>
                        {name}
                    </h1>
                </article>
            </a>
        </Link>
    );
};

export default SingleSponsor;
