import Carousel from '@/components/Carousel/Carousel';
import { text } from '@/data/data';
import { useLocaleContext } from '@/hooks/useLocaleContext';

const Speeches = () => {
    const { locale } = useLocaleContext();
    const { title, description, speeches } = text[locale].speeches;

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
