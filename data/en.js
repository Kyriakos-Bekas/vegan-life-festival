import { exhibitors } from './exhibitors';
import { speeches } from './speeches';
import { workshops } from './workshops';

export const en = {
    navLinks: [
        'home',
        'activities',
        'sponsors',
        'giveaway',
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
    giveaway: {
        title: 'Special Giveaway',
        description: [
            'Do you want to be one of the 5 lucky winners to win a 100€ voucher?',
            'Register now by simply entering your email below!',
        ],
        button: 'Submit',
    },
    sponsors: {
        title: 'Sponsors',
        description: 'We would like to thank our sponsors for their support!',
        sponsors: [
            {
                name: 'Vegan Zero Waste Products',
                prime: true,
                img: '/sponsors/1.png',
                link: '/#',
            },
            {
                name: 'Vegan Zero Waste Products',
                img: '/sponsors/1.png',
                link: '/#',
            },
            {
                name: 'Vegan Zero Waste Products',
                img: '/sponsors/1.png',
                link: '/#',
            },
            {
                name: 'Vegan Zero Waste Products',
                img: '/sponsors/1.png',
                link: '/#',
            },
            {
                name: 'Vegan Zero Waste Products',
                img: '/sponsors/1.png',
                link: '/#',
            },
            {
                name: 'Vegan Zero Waste Products',
                img: '/sponsors/1.png',
                link: '/#',
            },
            {
                name: 'Vegan Zero Waste Products',
                img: '/sponsors/1.png',
                link: '/#',
            },
            {
                name: 'Vegan Zero Waste Products',
                img: '/sponsors/1.png',
                link: '/#',
            },
            {
                name: 'Vegan Zero Waste Products',
                img: '/sponsors/1.png',
                link: '/#',
            },
        ],
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
    map: {
        title: 'Location Map',
        description:
            "Discover all the festival's locations and find your way through the map!",
        locations: [
            {
                name: 'Exhibition Avenue 1',
                features: ['Exhibitors 1-80', 'Cooking Workshop'],
                img: {
                    src: '/locations/1.png',
                    alt: 'Exhibition Avenue 1 Map',
                },
                link: '#',
            },
            {
                name: 'Exhibition Avenue 2',
                features: ['Exhibitors 81-120', 'Playground'],
                img: {
                    src: '/locations/2.png',
                    alt: 'Exhibition Avenue 2 Map',
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
                link: '/#',
            },
            {
                name: 'City Bus',
                img: '/logos/bus.png',
                link: '/#',
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
