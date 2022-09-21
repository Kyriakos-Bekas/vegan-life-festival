import { useLocaleContext } from '@/hooks/useLocaleContext';
import style from './Carousel.module.scss';
import CarouselSlide from './CarouselSlide/CarouselSlide';

const Carousel = ({ type, slides }) => {
    const { locale } = useLocaleContext();

    return (
        <div className={style.carousel}>
            {slides.map((slide, index) => (
                <CarouselSlide
                    key={index}
                    slide={slide}
                    type={type}
                    locale={locale}
                />
            ))}
        </div>
    );
};

export default Carousel;
