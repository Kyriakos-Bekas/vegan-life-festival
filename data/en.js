import { childrenActivities } from './children-activities';
import { exhibitors } from './exhibitors';
import { speeches } from './speeches';
import { sponsors } from './sponsors';
import { workshops } from './workshops';

export const en = {
    navLinks: [
        'home',
        'sponsors',
        'newsletter',
        'speeches',
        'workshops',
        'children activities',
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
        link: 'https://el.veganlife.gr/contact#comp-kktn8xi2',
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
                name: 'Front Yard',
                features: ['Benches 201-283', 'MEGA', 'GOLD 1-9', 'DJ Booth'],
                img: {
                    src: '/locations/area-1.jpg',
                    alt: 'Front Yard Map',
                },
            },
            {
                name: 'Michanourgio',
                features: ['Benches 114-157'],
                img: {
                    src: '/locations/area-2.jpg',
                    alt: 'Michanourgio Map',
                },
            },
            {
                name: 'Back Yard',
                features: ['Benches 304-342', 'Speech Auditorium'],
                img: {
                    src: '/locations/area-3.jpg',
                    alt: 'Back Yard Map',
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
                description: 'Line 3, Kerameikos',
                img: '/logos/metro.png',
                link: 'https://www.google.gr/maps/place/Kerameikos/@37.9777903,23.7095874,17z/data=!4m12!1m6!3m5!1s0x14a1bcdf88978a8b:0x198e1f6bb95c46b4!2sTechnopolis+City+of+Athens!8m2!3d37.9777776!4d23.7136161!3m4!1s0x14a1bcde46c9d1f5:0x196d5e5c3ed95d76!8m2!3d37.97863!4d23.7114956?hl=en&authuser=0',
            },
            {
                name: 'Subway',
                description: 'Line 1, Thisseio',
                img: '/logos/metro.png',
                link: 'https://www.google.com/maps/place/%CE%98%CE%B7%CF%83%CE%B5%CE%AF%CE%BF/@37.9782185,23.7150687,17z/data=!4m21!1m15!4m14!1m6!1m2!1s0x14a1bcdf88978a8b:0x198e1f6bb95c46b4!2zzqTOtc-Hzr3PjM-Azr_Ou865z4IsIM6RzrjOrs69zrE!2m2!1d23.7136161!2d37.9777776!1m6!1m2!1s0x14a1bd219380f125:0x4ed75d14aa1b1a2c!2zzpjOt8-DzrXOr86_LCDOkc64zq7Ovc6xIDExOCA1MQ!2m2!1d23.7207061!2d37.9767093!3m4!1s0x14a1bd219380f125:0x4ed75d14aa1b1a2c!8m2!3d37.9767093!4d23.7207061',
            },
            {
                name: 'City Bus',
                description: 'Photaerio',
                img: '/logos/bus.png',
                link: 'https://www.google.gr/maps/place/Ph%C5%8Dtaerio/@37.9777903,23.7095874,17z/data=!4m12!1m6!3m5!1s0x14a1bcdf88978a8b:0x198e1f6bb95c46b4!2sTechnopolis+City+of+Athens!8m2!3d37.9777776!4d23.7136161!3m4!1s0x14a1bcdfd5b00099:0xb5813dfd04f09946!8m2!3d37.9770748!4d23.713095?hl=en&authuser=0',
            },
            {
                name: 'City Bus',
                description: 'Palaia Agora, Peiraios',
                img: '/logos/bus.png',
                link: 'https://www.google.gr/maps/place/%CE%A0%CE%91%CE%9B%CE%91%CE%99%CE%91+%CE%91%CE%93%CE%9F%CE%A1%CE%91/@37.9777903,23.7095874,17z/data=!4m12!1m6!3m5!1s0x14a1bcdf88978a8b:0x198e1f6bb95c46b4!2sTechnopolis+City+of+Athens!8m2!3d37.9777776!4d23.7136161!3m4!1s0x14a1bcdf88a5e3e7:0x9b540a48493c4508!8m2!3d37.9781077!4d23.7152644?hl=en&authuser=0',
            },
            {
                name: 'City Bus',
                description: 'Palaia Agora, Iera Odos',
                img: '/logos/bus.png',
                link: 'https://www.google.gr/maps/place/%CE%A0%CE%91%CE%9B%CE%91%CE%99%CE%91+%CE%91%CE%93%CE%9F%CE%A1%CE%91/@37.9777903,23.7095874,17z/data=!4m12!1m6!3m5!1s0x14a1bcdf88978a8b:0x198e1f6bb95c46b4!2sTechnopolis+City+of+Athens!8m2!3d37.9777776!4d23.7136161!3m4!1s0x14a1bcdf7a55c625:0x92c61cf1107e6368!8m2!3d37.9796016!4d23.7146614?hl=en&authuser=0',
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
