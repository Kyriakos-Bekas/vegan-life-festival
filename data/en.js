import { childrenActivities } from './children-activities';
import { exhibitors } from './exhibitors';
import { speeches } from './speeches';
import { sponsors } from './sponsors';
import { workshops } from './workshops';

export const en = {
    navLinks: [
        'home',
        'activities',
        'sponsors',
        'newsletter',
        'speeches',
        'workshops',
        'map',
        'exhibitors',
        'transport',
    ],
    hero: {
        athens: 'Athens',
        subtitle: ['The climate is changing.', "Why don't we change with it?"],
        date: 'October 1 & 2',
        location: 'Technopolis City of Athens | Free entrance',
    },
    activities: [
        'Vegan Zero Waste Products',
        'Vegan Food',
        'Speeches',
        'Workshops',
        'Art Exhibition',
        'Swap Bazaar',
        'Children Activities',
        'Live DJ Set',
        'Vegan Meetup',
    ],
    newsletter: {
        title: 'Newsletter',
        description: [
            'Want to stay up to date with our news?',
            "Subscribe to our newsletter and we'll keep you posted!",
        ],
        link: '#',
    },
    sponsors: {
        title: 'Sponsors',
        description: 'We would like to thank our sponsors for their support!',
        sponsors: sponsors,
    },
    speeches: {
        title: 'Speeches',
        description:
            "All the information about the speeches is shown below. The list is updated regularly, so that you won't miss anything!",
        speeches: speeches.en,
    },
    workshops: {
        title: 'Workshops',
        description: 'Find interesting workshops in just one place!',
        workshops: workshops.en,
    },
    childrenActivities: {
        title: 'Children Activities',
        description:
            'Are you sceptical about bringing your children to our event? We already took care of that! We have prepared a lot of activities that will thrill them!',
        activities: childrenActivities.en,
    },
    map: {
        title: 'Location Map',
        description:
            "Discover all the festival's locations and find your way through the map!",
        locations: [
            {
                name: 'Exhibition Avenue 1',
                features: ['Exhibitors 1-80', 'Cooking Workshop'],
                img: {
                    src: '/locations/area-1.jpg',
                    alt: 'Exhibition Avenue 1 Map',
                },
            },
            {
                name: 'Exhibition Avenue 2',
                features: ['Exhibitors 81-120', 'Playground'],
                img: {
                    src: '/locations/area-2.jpg',
                    alt: 'Exhibition Avenue 2 Map',
                },
            },
            {
                name: 'Exhibition Avenue 3',
                features: ['Exhibitors 121-210', 'Live DJ Set'],
                img: {
                    src: '/locations/area-3.jpg',
                    alt: 'Exhibition Avenue 3 Map',
                },
            },
        ],
    },
    exhibitors: {
        title: 'Exhibitors',
        description:
            'Check out the list of exhibitors or search for a specific one',
        list: exhibitors.en,
    },
    transport: {
        title: 'Transport',
        description: "Find out how to get to the festival's location!",
        transportMethods: [
            {
                name: 'Subway',
                img: '/logos/metro.png',
                link: '#',
            },
            {
                name: 'City Bus',
                img: '/logos/bus.png',
                link: '#',
            },
        ],
    },
    taxi: {
        title: 'Beat Taxi',
        description:
            "BEAT's taxis are here to help you return home easily while enjoying the ride",
        logo: '/logos/taxi.png',
        playstore: {
            href: '/#',
            cta: 'Get it on',
            name: 'Google Play',
        },
        appstore: {
            href: '/#',
            cta: 'Download on the',
            name: 'App Store',
        },
    },
};
