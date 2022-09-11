import { text } from '@/data/data';
import { useLocaleContext } from '@/hooks/useLocaleContext';
import Location from './Location/Location';

const LocationMap = () => {
    const { locale } = useLocaleContext();
    // const { title, description } = text[locale].map;
    const { title, description, locations } = text[locale].map;

    return (
        <section className="section" id="map">
            <div className="details">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>

            {locations.map((location, index) => (
                <Location key={index} {...location} />
            ))}
        </section>
    );
};

export default LocationMap;
