import { text } from '@/data/data';
import { useLocaleContext } from '@/hooks/useLocaleContext';
import style from './Transport.module.scss';
import TransportLink from './TransportLink/TransportLink';

const Transport = () => {
    const { locale } = useLocaleContext();
    const { title, description, transportMethods } = text[locale].transport;

    return (
        <div className="section" id="transport">
            <div className="details">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>

            <div className={style.container}>
                {transportMethods.map((transportMethod, index) => (
                    <TransportLink key={index} {...transportMethod} />
                ))}
            </div>
        </div>
    );
};

export default Transport;
