import { useState } from 'react';
import style from './Carousel.module.scss';
import CarouselSlide from './CarouselSlide/CarouselSlide';

const Carousel = ({ type, slides }) => {
    const [carouselSlides, setCarouselSlides] = useState(slides);

    return (
        <div className={style.carousel}>
            {carouselSlides.map((slide, index) => (
                <CarouselSlide key={index} slide={slide} type={type} />
            ))}
        </div>
    );
};

export default Carousel;
