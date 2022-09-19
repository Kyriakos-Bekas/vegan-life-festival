const checkSlides = (slides) => {
    // * Comment below is for debugging
    // const checkSlides = (slides, index) => {
    const updatedSlides = [];

    slides.forEach((slide) => {
        if (slide.finished) {
            updatedSlides.push(slide);
        } else {
            const date = new Date(slide.end);
            updatedSlides.push({
                ...slide,
                finished: date < new Date(),
                // * Comment below is for debugging
                // finished:
                //     slide.title === `Speech ${index}` ||
                //     `Ομιλία ${index}` ||
                //     `Workshop ${index}` ||
                //     `Εργαστήριο ${index}`,
            });
        }
    });

    return updatedSlides;
};

export const useWatchSlides = () => {
    const updateSlides = (array) => {
        // * Comments below are for debugging
        // const rand = Math.floor(Math.random() * array.length + 1);
        // const checked = checkSlides(array, rand);
        const checked = checkSlides(array);
        const updatedSlides = [],
            unfinished = [],
            finished = [];

        checked.filter((slide) => {
            !slide.finished ? unfinished.push(slide) : finished.push(slide);
        });
        unfinished.forEach((slide) => updatedSlides.push(slide));
        finished.forEach((slide) => updatedSlides.push(slide));

        return updatedSlides;
    };

    return { updateSlides };
};
