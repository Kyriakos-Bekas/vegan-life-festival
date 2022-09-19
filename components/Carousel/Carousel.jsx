import style from './Carousel.module.scss';
import CarouselSlide from './CarouselSlide/CarouselSlide';

const Carousel = ({ type, slides }) => {
    return (
        <div className={style.carousel}>
            {slides.map((slide, index) => (
                <CarouselSlide key={index} slide={slide} type={type} />
            ))}
        </div>
    );
};

export default Carousel;
