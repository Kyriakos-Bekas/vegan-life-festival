import Image from 'next/image';
import Link from 'next/link';
import style from './TransportLink.module.scss';

const TransportLink = ({ name, img, link }) => {
    return (
        <Link href={link}>
            <a className={style['transport-link']} target="_blank">
                <Image src={img} alt={`${name} Logo`} width={72} height={72} />
                <h1 className="fs-500 text-dark">{name}</h1>
            </a>
        </Link>
    );
};

export default TransportLink;
