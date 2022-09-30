import { childrenActivities } from './children-activities';
import { exhibitors } from './exhibitors';
import { speeches } from './speeches';
import { sponsors } from './sponsors';
import { workshops } from './workshops';

export const gr = {
    navLinks: [
        'αρχική',
        'χορηγοί',
        'newsletter',
        'ομιλίες',
        'εργαστήρια',
        'παιδικές δραστηριότητες',
        'χάρτης',
        'εκθέτες',
        'μετακίνηση',
    ],
    hero: {
        athens: 'Αθηνα',
        subtitle: ['Το κλίμα αλλάζει.', 'Γιατί δεν αλλάζουμε εμείς;'],
        date: '1 & 2 Οκτωβριου',
        location: 'Τεχνοπολη Δημου Αθηναιων | Εισοδος ελευθερη',
    },
    activities: [
        'Vegan Zero Waste Προϊοντα',
        'Vegan Φαγητο',
        'Ομιλιες',
        'Εργαστηρια',
        'Art Exhibition',
        'Swap Bazaar',
        'Παιδικες Δραστηριοτητες',
        'Live DJ Set',
        'Vegan Meetup',
    ],
    newsletter: {
        title: 'Newsletter',
        description: [
            'Θέλεις να μένεις ενημερωμένος για τα νέα μας;',
            'Εγγράψου στο newsletter μας για να γνωρίζεις τα πάντα για το VeganLife στο email σου!',
        ],
        link: 'https://el.veganlife.gr/contact#comp-kktn8xi2',
    },
    sponsors: {
        title: 'Χορηγοι',
        description:
            'Ευχαριστούμε τους χορηγούς μας για την υποστήριξη του Vegan Athens Festival 2022. Είναι μέσω της συνεργασίας μας που μπορούμε να συνεχίσουμε να δημιουργούμε αυτό το εκπληκτικό εγχείρημα.',
        sponsors: sponsors,
    },
    speeches: {
        title: 'Ομιλιες',
        description:
            'Όλες οι πληροφορίες για τις σημερινές ομιλίες. Η λίστα ενημερώνεται τακτικά ώστε να μη χάσεις τίποτα!',
        speeches: speeches.gr,
    },
    workshops: {
        title: 'Εργαστηρια',
        description:
            'Βρες τα εργαστήρια που σε ενδιαφέρουν με μία μόνο κίνηση!',
        workshops: workshops.gr,
    },
    childrenActivities: {
        title: 'Παιδικες Δραστηριοτητες',
        description:
            'Έχεις αμφιβολίες για το αν θα φέρεις τα παιδιά σου στο event μας; Έχουμε προετοιμάσει πολλές δραστηριότητες που θα τα ξετρελάνουν!',
        activities: childrenActivities.gr,
    },
    map: {
        title: 'Χαρτης Χωρου',
        description:
            'Ανακάλυψε όλους τους χώρους του φεστιβάλ και βρες τον εκθέτη που σε ενδιαφέρει!',
        locations: [
            {
                name: 'Προαύλιο',
                features: ['Περίπτερα  201-283', 'GOLD 1-9', 'Χώρος DJ'],
                img: {
                    src: '/locations/area-1.jpg',
                    alt: 'Χάρτης Προαυλίου',
                },
            },
            {
                name: 'Mηχανουργείο',
                features: ['Περίπτερα 114-157'],
                img: {
                    src: '/locations/area-2.jpg',
                    alt: 'Χάρτης Mηχανουργείου',
                },
            },
            {
                name: 'Πίσω Αυλή',
                features: ['Περίπτερα 304-342', 'Αμφιθέατρο Ομιλιών'],
                img: {
                    src: '/locations/area-3.jpg',
                    alt: 'Χάρτης Πίσω Αυλής',
                },
            },
        ],
    },
    exhibitors: {
        title: 'Εκθετες',
        description:
            'Δες την λίστα των εκθέτων ή αναζήτησε κατευθείαν τον εκθέτη που θες να επισκεφτείς',
        list: exhibitors.gr,
    },
    transport: {
        title: 'Μετακινηση',
        description:
            'Μετακινηθείτε εύκολα στο φεστιβάλ με τα διαθέσιμα μέσα μεταφοράς',
        transportMethods: [
            {
                name: 'Μετρό',
                description: 'Γραμμή 3, Κεραμεικός',
                img: '/logos/metro.png',
                link: 'https://www.google.gr/maps/place/Kerameikos/@37.9777903,23.7095874,17z/data=!4m12!1m6!3m5!1s0x14a1bcdf88978a8b:0x198e1f6bb95c46b4!2sTechnopolis+City+of+Athens!8m2!3d37.9777776!4d23.7136161!3m4!1s0x14a1bcde46c9d1f5:0x196d5e5c3ed95d76!8m2!3d37.97863!4d23.7114956?hl=en&authuser=0',
            },
            {
                name: 'Μετρό',
                description: 'Γραμμή 1, Θησείο',
                img: '/logos/metro.png',
                link: 'https://www.google.com/maps/place/%CE%98%CE%B7%CF%83%CE%B5%CE%AF%CE%BF/@37.9782185,23.7150687,17z/data=!4m21!1m15!4m14!1m6!1m2!1s0x14a1bcdf88978a8b:0x198e1f6bb95c46b4!2zzqTOtc-Hzr3PjM-Azr_Ou865z4IsIM6RzrjOrs69zrE!2m2!1d23.7136161!2d37.9777776!1m6!1m2!1s0x14a1bd219380f125:0x4ed75d14aa1b1a2c!2zzpjOt8-DzrXOr86_LCDOkc64zq7Ovc6xIDExOCA1MQ!2m2!1d23.7207061!2d37.9767093!3m4!1s0x14a1bd219380f125:0x4ed75d14aa1b1a2c!8m2!3d37.9767093!4d23.7207061',
            },
            {
                name: 'Λεωφορείο',
                description: 'Φωταέριο',
                img: '/logos/bus.png',
                link: 'https://www.google.gr/maps/place/Ph%C5%8Dtaerio/@37.9777903,23.7095874,17z/data=!4m12!1m6!3m5!1s0x14a1bcdf88978a8b:0x198e1f6bb95c46b4!2sTechnopolis+City+of+Athens!8m2!3d37.9777776!4d23.7136161!3m4!1s0x14a1bcdfd5b00099:0xb5813dfd04f09946!8m2!3d37.9770748!4d23.713095?hl=en&authuser=0',
            },
            {
                name: 'Λεωφορείο',
                description: 'Παλαιά Αγορά, Πειραιώς',
                img: '/logos/bus.png',
                link: 'https://www.google.gr/maps/place/%CE%A0%CE%91%CE%9B%CE%91%CE%99%CE%91+%CE%91%CE%93%CE%9F%CE%A1%CE%91/@37.9777903,23.7095874,17z/data=!4m12!1m6!3m5!1s0x14a1bcdf88978a8b:0x198e1f6bb95c46b4!2sTechnopolis+City+of+Athens!8m2!3d37.9777776!4d23.7136161!3m4!1s0x14a1bcdf88a5e3e7:0x9b540a48493c4508!8m2!3d37.9781077!4d23.7152644?hl=en&authuser=0',
            },
            {
                name: 'Λεωφορείο',
                description: 'Παλαιά Αγορά, Ιερά Οδός',
                img: '/logos/bus.png',
                link: 'https://www.google.gr/maps/place/%CE%A0%CE%91%CE%9B%CE%91%CE%99%CE%91+%CE%91%CE%93%CE%9F%CE%A1%CE%91/@37.9777903,23.7095874,17z/data=!4m12!1m6!3m5!1s0x14a1bcdf88978a8b:0x198e1f6bb95c46b4!2sTechnopolis+City+of+Athens!8m2!3d37.9777776!4d23.7136161!3m4!1s0x14a1bcdf7a55c625:0x92c61cf1107e6368!8m2!3d37.9796016!4d23.7146614?hl=en&authuser=0',
            },
        ],
    },
    taxi: {
        title: 'Beat Ταξι',
        description:
            'Τα ταξί του BEAT είναι στην διάθεσή σου! Γύρισε στο σπίτι σου με την μεγαλύτερη ευκολία και απόλαυσε την διαδρομή',
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
