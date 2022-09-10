import {
    Exhibitors,
    Hero,
    LocationMap,
    Speeches,
    Workshops,
} from '@/components/Sections/Sections';

export default function Home() {
    return (
        <>
            <Hero />
            <Speeches />
            <Workshops />
            <LocationMap />
            <Exhibitors />
        </>
    );
}
