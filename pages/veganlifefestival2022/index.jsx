import {
    Activities,
    ChildrenActivities,
    Exhibitors,
    Hero,
    LocationMap,
    Newsletter,
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
            <Newsletter />
            <Speeches />
            <Workshops />
            <ChildrenActivities />
            <LocationMap />
            <Exhibitors />
            <Transport />
        </BasicLayout>
    );
}
