import style from './CarouselSlide.module.scss';

const CarouselSlide = ({ title, sub, description, img, duration, type }) => {
    return (
        <article
            className={`${style.slide} ${
                type === 'workshop' ? style.workshop : ''
            }`}
        >
            <img src={img.src} alt={img.alt} className={style.thumbnail} />

            <div className={style.details}>
                {sub && (
                    <h2 className={`${style.sub} fs-100 uppercase`}>{sub}</h2>
                )}

                <h1 className={`${style.title} fs-500`}>{title}</h1>

                <p className={`${style.description} fs-300`}>{description}</p>

                <p className={`${style.duration} fs-200`}>{duration}</p>
            </div>
        </article>
    );
};

export default CarouselSlide;
