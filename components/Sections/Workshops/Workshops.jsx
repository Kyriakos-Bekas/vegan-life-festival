import Carousel from '@/components/Carousel/Carousel';
import { text } from '@/data/data';
import { useLocaleContext } from '@/hooks/useLocaleContext';
import { useTimer } from '@/hooks/useTimer';
import { useWatchSlides } from '@/hooks/useWatchSlides';
import { useEffect, useState } from 'react';

const Workshops = () => {
    const { locale } = useLocaleContext();
    const [workshops, setWorkshops] = useState(
        text[locale].workshops.workshops
    );
    const { title, description } = text[locale].workshops;
    const { timer } = useTimer();
    const { updateSlides } = useWatchSlides();

    // Run on locale change
    useEffect(() => {
        setWorkshops(updateSlides(text[locale].workshops.workshops));
    }, [locale]);

    // Run on timer change
    useEffect(() => setWorkshops(updateSlides(workshops)), [timer]);

    return (
        <section className="section" id="workshops">
            <div className="details">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>

            <Carousel type="workshop" slides={workshops} />
        </section>
    );
};

export default Workshops;
