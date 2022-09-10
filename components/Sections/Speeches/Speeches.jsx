import Carousel from '@/components/Carousel/Carousel';
import { text } from '@/data/data';

const Speeches = () => {
    const locale = 'gr';
    const { title, description, speeches } = text[locale].speeches;

    return (
        <section className="section" id="speeches">
            <div className="details">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>

            <Carousel type="speech" />
        </section>
    );
};

export default Speeches;
