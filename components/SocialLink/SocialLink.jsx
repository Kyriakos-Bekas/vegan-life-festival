import Link from 'next/link';
import {
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    YoutubeIcon,
} from '../Icons/Icons';
import style from './SocialLink.module.scss';

const SocialLink = ({ href, type, slug }) => {
    let icon;

    switch (type) {
        case 'facebook':
            icon = <FacebookIcon />;
            break;
        case 'twitter':
            icon = <TwitterIcon />;
            break;
        case 'youtube':
            icon = <YoutubeIcon />;
            break;
        default:
            icon = <InstagramIcon />;
    }

    return (
        <Link href={href}>
            <a
                className={`${style.link} umami--click--visit-${slug}-${type}`}
                target="_blank"
            >
                {icon}
            </a>
        </Link>
    );
};

export default SocialLink;
