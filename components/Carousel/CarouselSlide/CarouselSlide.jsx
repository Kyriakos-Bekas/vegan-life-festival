import style from './CarouselSlide.module.scss';

const CarouselSlide = ({ slide, type, locale }) => {
    return (
        <article
            className={`${style.slide} ${
                slide.finished ? style.finished : ''
            } ${type === 'workshop' ? style.workshop : ''}`}
            data-finished={
                slide.finished
                    ? locale === 'en'
                        ? 'finished'
                        : 'ολοκληρώθηκε'
                    : ''
            }
        >
            {slide.img?.src !== '/workshops/' && (
                <img
                    src={slide.img.src}
                    alt={slide.img.alt}
                    className={style.thumbnail}
                />
            )}

            <div className={style.details}>
                {slide.sub && (
                    <h2 className={`${style.sub} fs-100 uppercase`}>
                        {slide.sub}
                    </h2>
                )}

                <h1 className="fs-400">{slide.title}</h1>

                <p className={`${style.description} fs-300`}>
                    {slide.description}
                </p>

                <p className={`${style.duration} fs-200`}>{slide.duration}</p>
            </div>
        </article>
    );
};

export default CarouselSlide;
