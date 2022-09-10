import Carousel from '@/components/Carousel/Carousel';
import { text } from '@/data/data';

const Workshops = () => {
    const locale = 'gr';
    const { title, description, workshops } = text[locale].workshops;

    return (
        <section className="section" id="workshops">
            <div className="details">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>

            <Carousel type="workshop" />
        </section>
    );
};

export default Workshops;
