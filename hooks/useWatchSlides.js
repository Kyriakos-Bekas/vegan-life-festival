const checkSlides = (slides) => {
    const updatedSlides = [];

    slides.forEach((slide) => {
        if (slide.finished) {
            updatedSlides.push(slide);
        } else {
            const date = new Date(slide.end);
            updatedSlides.push({
                ...slide,
                finished: date < new Date(),
            });
        }
    });

    return updatedSlides;
};

export const useWatchSlides = () => {
    const updateSlides = (array) => {
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
