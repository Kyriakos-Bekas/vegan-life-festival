import { text } from '@/data/data';
import { useLocaleContext } from '@/hooks/useLocaleContext';
import { useEffect, useState } from 'react';
import style from './Activities.module.scss';

const Activities = () => {
    const { locale } = useLocaleContext();
    const [activities, setActivities] = useState(text[locale].activities);

    useEffect(() => {
        setActivities(text[locale].activities);
    }, [locale]);

    return (
        <section
            className={`section uppercase text-accent ${style.activities}`}
            id="activities"
        >
            {activities.map((activity, index) => (
                <div className={style.activity} key={index}>
                    {activity}
                </div>
            ))}
        </section>
    );
};

export default Activities;
