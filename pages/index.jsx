import {
    Activities,
    Exhibitors,
    Giveaway,
    Hero,
    LocationMap,
    Speeches,
    Sponsors,
    Transport,
    Workshops,
} from '@/components/Sections/Sections';
import BasicLayout from '@/layouts/BasicLayout/BasicLayout';

export default function Home() {
    return (
        <BasicLayout>
            <Hero />
            <Activities />
            <Sponsors />
            <Giveaway />
            <Speeches />
            <Workshops />
            <LocationMap />
            <Exhibitors />
            <Transport />
        </BasicLayout>
    );
}
