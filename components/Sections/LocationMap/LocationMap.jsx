import { text } from '@/data/data';
import Location from './Location/Location';

const LocationMap = () => {
    const locale = 'gr';
    const { title, description } = text[locale].map;
    // const { title, description, locations } = text[locale].map;

    const locationsGR = [
        {
            name: 'Εκθεσιακός Χώρος 1',
            features: ['Εκθέτες 1-80', 'Εργαστήριο Μαγειρικής'],
            img: {
                src: '/locations/1.png',
                alt: 'Exhibition Avenue 1 Map',
            },
        },
        {
            name: 'Εκθεσιακός Χώρος 2',
            features: ['Εκθέτες 81-120', 'Χώρος Playground'],
            img: {
                src: '/locations/2.png',
                alt: 'Exhibition Avenue 2 Map',
            },
        },
    ];

    const locationsEN = [
        {
            name: 'Exhibition Avenue 1',
            features: ['Exhibitors 1-80', 'Cooking Workshop'],
            img: {
                src: '/locations/1.png',
                alt: 'Exhibition Avenue 1 Map',
            },
        },
        {
            name: 'Exhibition Avenue 2',
            features: ['Exhibitors 81-120', 'Playground'],
            img: {
                src: '/locations/2.png',
                alt: 'Exhibition Avenue 2 Map',
            },
        },
    ];

    const locations = locale === 'en' ? locationsEN : locationsGR;

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
