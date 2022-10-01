import Image from 'next/image';
import Link from 'next/link';
import style from './TransportLink.module.scss';

const TransportLink = ({ name, img, description, link }) => {
    return (
        <Link href={link}>
            <a
                className={`${style['transport-link']} umami--click--use-transport-link`}
                target="_blank"
            >
                <Image src={img} alt={`${name} Logo`} width={72} height={72} />
                <h1 className="fs-500 text-dark">{name}</h1>

                <p className={`${style.description} fs-300`}>{description}</p>
            </a>
        </Link>
    );
};

export default TransportLink;
