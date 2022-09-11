import { LocationIcon } from '@/components/Icons/Icons';
import { text } from '@/data/data';
import { useLocaleContext } from '@/hooks/useLocaleContext';
import Image from 'next/image';
import style from './Hero.module.scss';

const Hero = () => {
    const { locale } = useLocaleContext();
    const { athens, subtitle, date, location } = text[locale].hero;

    return (
        <section className={style.hero}>
            <Image src="/logos/vegan-life-logo.png" width={140} height={140} />

            <h1 className="uppercase text-light">
                <span className={style['place-athens']}>{athens}</span>
                <span className={style['place-2022']}>2022</span>
            </h1>

            <div className={`${style.subtitles} ff-giveaway text-white`}>
                <h3 className={style['subtitle-0']}>{subtitle[0]}</h3>
                <h3 className={style['subtitle-1']}>{subtitle[1]}</h3>
            </div>
            <h2 className="text-white uppercase fs-700">go vegan.</h2>

            <div className={`${style.about} text-light`}>
                <h4 className="uppercase fs-400">{date} | 11:00 - 13:00</h4>
                <div className={style.location}>
                    <LocationIcon />
                    <p className="uppercase fs-200">{location}</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
