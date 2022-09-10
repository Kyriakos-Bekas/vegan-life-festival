import style from './Carousel.module.scss';
import CarouselSlide from './CarouselSlide/CarouselSlide';

const Carousel = ({ type }) => {
    const speeches = [
        {
            title: 'Test Slide 1',
            sub: 'carousel',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, consequatur! Quam repellendus eius adipisci velit amet. Rem neque, omnis aliquid voluptate totam adipisci maxime!',
            img: {
                src: '/speeches/speech-1.png',
                alt: '',
            },
            duration: '13:00-14:30',
        },
        {
            title: 'Test Slide 2',
            sub: 'carousel',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, consequatur! Quam repellendus eius adipisci velit amet. Rem neque, omnis aliquid voluptate totam adipisci maxime!',
            img: {
                src: '/speeches/speech-2.png',
                alt: '',
            },
            duration: '14:30-16:00',
        },
        {
            title: 'Test Slide 3',
            sub: 'carousel',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, consequatur! Quam repellendus eius adipisci velit amet. Rem neque, omnis aliquid voluptate totam adipisci maxime!',
            img: {
                src: '/speeches/speech-1.png',
                alt: '',
            },
            duration: '16:00-17:30',
        },
    ];

    const workshops = [
        {
            title: 'Test Slide 1',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, consequatur! Quam repellendus eius adipisci velit amet. Rem neque, omnis aliquid voluptate totam adipisci maxime!',
            img: {
                src: '/speeches/speech-1.png',
                alt: '',
            },
            duration: '13:00-14:30',
        },
        {
            title: 'Test Slide 2',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, consequatur! Quam repellendus eius adipisci velit amet. Rem neque, omnis aliquid voluptate totam adipisci maxime!',
            img: {
                src: '/speeches/speech-2.png',
                alt: '',
            },
            duration: '14:30-16:00',
        },
        {
            title: 'Test Slide 3',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, consequatur! Quam repellendus eius adipisci velit amet. Rem neque, omnis aliquid voluptate totam adipisci maxime!',
            img: {
                src: '/speeches/speech-1.png',
                alt: '',
            },
            duration: '16:00-17:30',
        },
    ];

    const slides = type === 'speech' ? speeches : workshops;

    return (
        <div className={style.carousel}>
            {slides.map((slide, index) => (
                <CarouselSlide key={index} {...slide} type={type} />
            ))}
        </div>
    );
};

export default Carousel;
