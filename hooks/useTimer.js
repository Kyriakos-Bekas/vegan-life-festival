import { useEffect, useState } from 'react';

// Set slide checking frequency
const FREQUENCY = 5000;

export const useTimer = (initialValue = 0) => {
    const [timer, setTimer] = useState(initialValue);

    useEffect(() => {
        const interval = setInterval(
            () => setTimer((prev) => prev + 1),
            FREQUENCY
        );

        return () => clearInterval(interval);
    }, []);

    return { timer };
};
