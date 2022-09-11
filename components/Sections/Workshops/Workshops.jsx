import Carousel from '@/components/Carousel/Carousel';
import { text } from '@/data/data';
import { useLocaleContext } from '@/hooks/useLocaleContext';

const Workshops = () => {
    const { locale } = useLocaleContext();
    const { title, description, workshops } = text[locale].workshops;

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
