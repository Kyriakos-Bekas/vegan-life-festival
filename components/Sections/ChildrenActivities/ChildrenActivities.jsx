import Carousel from '@/components/Carousel/Carousel';
import { text } from '@/data/data';
import { useLocaleContext } from '@/hooks/useLocaleContext';
import { useTimer } from '@/hooks/useTimer';
import { useWatchSlides } from '@/hooks/useWatchSlides';
import { useEffect, useState } from 'react';

const ChildrenActivities = () => {
    const { locale } = useLocaleContext();
    const [childrenActivities, setChildrenActivities] = useState(
        text[locale].childrenActivities.activities
    );
    const { title, description } = text[locale].childrenActivities;
    const { timer } = useTimer();
    const { updateSlides } = useWatchSlides();

    // Run on locale change
    useEffect(() => {
        setChildrenActivities(
            updateSlides(text[locale].childrenActivities.activities)
        );
    }, [locale]);

    // Run on timer change
    useEffect(
        () => setChildrenActivities(updateSlides(childrenActivities)),
        [timer]
    );

    return (
        <section className="section" id="children-activities">
            <div className="details">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>

            <Carousel type="speech" slides={childrenActivities} />
        </section>
    );
};

export default ChildrenActivities;
