import { useState } from 'react';
import style from './CarouselSlide.module.scss';

const CarouselSlide = ({ slide, type }) => {
    const [finished, setFinished] = useState(false);

    return (
        <article
            className={`${style.slide} ${finished ? style.finished : ''} ${
                type === 'workshop' ? style.workshop : ''
            }`}
            data-finished={finished ? 'finished' : ''}
        >
            <img
                src={slide.img.src}
                alt={slide.img.alt}
                className={style.thumbnail}
            />

            <div className={style.details}>
                {slide.sub && (
                    <h2 className={`${style.sub} fs-100 uppercase`}>
                        {slide.sub}
                    </h2>
                )}

                <h1 className={`${style.title} fs-500`}>{slide.title}</h1>

                <p className={`${style.description} fs-300`}>
                    {slide.description}
                </p>

                <p className={`${style.duration} fs-200`}>{slide.duration}</p>
            </div>
        </article>
    );
};

export default CarouselSlide;
