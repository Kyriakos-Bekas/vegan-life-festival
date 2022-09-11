import { text } from '@/data/data';
import { useLocaleContext } from '@/hooks/useLocaleContext';
import style from './Activities.module.scss';

const Activities = () => {
    const { locale } = useLocaleContext();
    const activities = text[locale].activities;

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
