import {
    Activities,
    Exhibitors,
    Giveaway,
    Hero,
    LocationMap,
    Speeches,
    Sponsors,
    Taxi,
    Transport,
    Workshops,
} from '@/components/Sections/Sections';

export default function Home() {
    return (
        <>
            <Hero />
            <Activities />
            <Sponsors />
            <Giveaway />
            <Speeches />
            <Workshops />
            <LocationMap />
            <Exhibitors />
            <Transport />
            <Taxi />
        </>
    );
}
