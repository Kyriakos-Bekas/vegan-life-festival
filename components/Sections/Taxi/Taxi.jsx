import { text } from '@/data/data';
import { useLocaleContext } from '@/hooks/useLocaleContext';
import Image from 'next/image';
import Link from 'next/link';
import style from './Taxi.module.scss';

const Taxi = () => {
    const { locale } = useLocaleContext();
    const { logo, title, description, appstore, playstore } = text[locale].taxi;

    return (
        <section className={`section ${style.taxi}`} id="taxi">
            <div className="details">
                <h1 className={style.title}>
                    <Image
                        src={logo}
                        alt="Beat Taxi Logo"
                        width={48}
                        height={48}
                    />
                    {title}
                </h1>
                <p>{description}</p>
            </div>

            <div className={style.container}>
                <Link href={playstore.href}>
                    <a className={style.link} target="_blank">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={style.logo}
                        >
                            <path
                                d="M20.9189 10.6531C20.6044 10.4832 17.9081 8.91875 16.8964 8.32989L16.8935 8.32789L4.6386 1.25275C4.42982 1.1253 4.19572 1.04501 3.95266 1.01749C3.70961 0.989977 3.46348 1.0159 3.23149 1.09345C3.20531 1.10285 3.18071 1.11231 3.15526 1.12396C3.09617 1.14322 3.03841 1.16634 2.98235 1.19318C2.74804 1.33323 2.55581 1.53385 2.42589 1.77393C2.29597 2.01401 2.23316 2.28468 2.24407 2.55744V21.5428C2.23664 21.7969 2.29682 22.0484 2.41847 22.2717C2.54012 22.4949 2.71888 22.6818 2.93645 22.8133C2.98664 22.8378 3.03834 22.8591 3.09124 22.877C3.12017 22.8904 3.14775 22.902 3.1776 22.9125C3.32081 22.9645 3.47164 22.9923 3.62395 22.9949C3.91645 22.9918 4.203 22.912 4.45501 22.7635C4.84368 22.5379 16.8935 15.5809 16.8935 15.5809L20.914 13.2596C21.1626 13.1351 21.3724 12.945 21.5207 12.7099C21.6691 12.4747 21.7504 12.2035 21.7558 11.9256C21.7436 11.6578 21.6594 11.3983 21.5121 11.1744C21.3648 10.9505 21.1599 10.7704 20.9189 10.6531V10.6531ZM4.24407 19.8391V4.10199L12.1842 11.9611L4.24407 19.8391ZM9.26207 17.6774L13.6056 13.3679L14.7551 14.5057C13.4905 15.236 11.3538 16.4697 9.26207 17.6775V17.6774ZM13.6039 10.5524L9.206 6.19946L14.7597 9.40576L13.6039 10.5524ZM16.5507 13.4691L15.0253 11.9594L16.553 10.4435C17.2733 10.8618 18.3958 11.5129 19.1689 11.9578L16.5507 13.4691Z"
                                fill="white"
                            />
                        </svg>
                        <h2 className="fs-300 text-dark">
                            <span className="fs-100 uppercase">
                                {playstore.cta}
                            </span>
                            {playstore.name}
                        </h2>
                    </a>
                </Link>

                <Link href={appstore.href}>
                    <a className={style.link} target="_blank">
                        <svg
                            width="20"
                            height="24"
                            viewBox="0 0 20 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={style.logo}
                        >
                            <path
                                d="M13.2996 3.82775C13.7532 3.30492 14.0991 2.69763 14.3174 2.04075C14.5356 1.38387 14.622 0.690347 14.5715 0C13.1788 0.112417 11.8861 0.767416 10.9717 1.82388C10.5339 2.33022 10.2021 2.91926 9.99596 3.55614C9.78985 4.19301 9.71363 4.86477 9.7718 5.53163C10.4511 5.53729 11.1227 5.38656 11.7344 5.09109C12.3461 4.79563 12.8817 4.36336 13.2996 3.82775ZM16.3234 12.7552C16.3314 11.8357 16.5736 10.9335 17.0271 10.1336C17.4806 9.33368 18.1304 8.66253 18.9152 8.18346C18.4199 7.46979 17.7651 6.88134 17.0028 6.46478C16.2405 6.04822 15.3916 5.815 14.5235 5.78362C12.6516 5.59163 10.9237 6.87554 9.92779 6.87554C8.93186 6.87554 7.52795 5.80761 5.96806 5.83161C4.94828 5.8652 3.95461 6.16253 3.08398 6.69458C2.21335 7.22663 1.49548 7.97525 1.00039 8.86741C-1.11147 12.5392 0.460422 17.9988 2.57228 20.9626C3.53222 22.4145 4.73214 24.0584 6.31603 23.9984C7.89993 23.9384 8.41589 23.0145 10.2518 23.0145C12.0876 23.0145 12.6516 23.9984 14.2115 23.9624C15.7714 23.9264 16.8753 22.4745 17.8833 21.0226C18.5973 19.9685 19.155 18.8167 19.5392 17.6028C18.5882 17.1973 17.7769 16.522 17.2054 15.6605C16.6339 14.799 16.3272 13.789 16.3234 12.7552Z"
                                fill="white"
                            />
                        </svg>

                        <h2 className="fs-300 text-dark">
                            <span className="fs-100">{appstore.cta}</span>
                            {appstore.name}
                        </h2>
                    </a>
                </Link>
            </div>
        </section>
    );
};

export default Taxi;
