import { AiOutlineLink } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { BsStarFill } from 'react-icons/bs';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import { MdLocationOn } from 'react-icons/md';

const LocationIcon = () => <MdLocationOn />;
const SearchIcon = () => <BiSearch />;
const DownIcon = () => <FiChevronDown />;
const StarIcon = () => <BsStarFill />;
const LinkIcon = () => <AiOutlineLink />;
const FacebookIcon = () => <FaFacebookF />;
const TwitterIcon = () => <FaTwitter />;
const InstagramIcon = () => <FaInstagram />;
const YoutubeIcon = () => <FaYoutube />;

export {
    LocationIcon,
    SearchIcon,
    DownIcon,
    StarIcon,
    LinkIcon,
    FacebookIcon,
    TwitterIcon,
    InstagramIcon,
    YoutubeIcon,
};
