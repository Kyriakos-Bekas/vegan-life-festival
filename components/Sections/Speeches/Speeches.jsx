import Carousel from '@/components/Carousel/Carousel';
import { text } from '@/data/data';
import { useLocaleContext } from '@/hooks/useLocaleContext';
import { useTimer } from '@/hooks/useTimer';
import { useWatchSlides } from '@/hooks/useWatchSlides';
import { useEffect, useState } from 'react';

const Speeches = () => {
    const { locale } = useLocaleContext();
    const [speeches, setSpeeches] = useState(text[locale].speeches.speeches);
    const { title, description } = text[locale].speeches;
    const { timer } = useTimer();
    const { updateSlides } = useWatchSlides();

    // Run on locale change
    useEffect(() => {
        setSpeeches(updateSlides(text[locale].speeches.speeches));
    }, [locale]);

    // Run on timer change
    useEffect(() => setSpeeches(updateSlides(speeches)), [timer]);

    return (
        <section className="section" id="speeches">
            <div className="details">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>

            <Carousel type="speech" slides={speeches} />
        </section>
    );
};

export default Speeches;
