import { LocationIcon } from '@/components/Icons/Icons';
import style from './Location.module.scss';

const Location = ({ name, features, img }) => {
    return (
        <article className={style.location}>
            <div className={style.details}>
                <div className={style.title}>
                    <LocationIcon />

                    <h2 className="fs-500 text-dark">{name}</h2>
                </div>
                <ul className={style.features}>
                    {features.map((feature, index) => (
                        <li key={index} className="fs-300 text-gray">
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="location__img">
                <img src={img.src} alt={img.alt} />
            </div>
        </article>
    );
};

export default Location;
