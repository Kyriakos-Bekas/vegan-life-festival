import { exhibitors } from './exhibitors';
import { speeches } from './speeches';
import { workshops } from './workshops';

export const gr = {
    navLinks: [
        'αρχική',
        'δραστηριότητες',
        'χορηγοί',
        'giveaway',
        'ομιλίες',
        'εργαστήρια',
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
    giveaway: {
        title: 'Μοναδικό Giveaway',
        description: [
            'Θες να είσαι ανάμεσα στους 5 τυχερούς που θα κερδίσουν κουπόνια αξίας 100€;',
            'Δήλωσε συμμετοχή τώρα απλά εισάγοντας το email σου παρακάτω!',
        ],
        placeholder: 'Γράψε το email σου εδώ',
        button: 'Αποστολή',
    },
    sponsors: {
        title: 'Χορηγοι',
        description:
            'Ευχαριστούμε τους χορηγούς μας για την υποστήριξη του Vegan Athens Festival 2022. Είναι μέσω της συνεργασίας μας που μπορούμε να συνεχίσουμε να δημιουργούμε αυτό το εκπληκτικό εγχείρημα.',
        sponsors: [
            {
                name: 'Ελληνική Ομοσπονδία Βιολογικής Γεωργίας',
                prime: true,
                img: '/sponsors/1.png',
                link: '#',
            },
            {
                name: 'Ελληνική Ομοσπονδία Βιολογικής Γεωργίας',
                img: '/sponsors/1.png',
                link: '#',
            },
            {
                name: 'Ελληνική Ομοσπονδία Βιολογικής Γεωργίας',
                img: '/sponsors/1.png',
                link: '#',
            },
            {
                name: 'Ελληνική Ομοσπονδία Βιολογικής Γεωργίας',
                img: '/sponsors/1.png',
                link: '#',
            },
            {
                name: 'Ελληνική Ομοσπονδία Βιολογικής Γεωργίας',
                img: '/sponsors/1.png',
                link: '#',
            },
            {
                name: 'Ελληνική Ομοσπονδία Βιολογικής Γεωργίας',
                img: '/sponsors/1.png',
                link: '#',
            },
            {
                name: 'Ελληνική Ομοσπονδία Βιολογικής Γεωργίας',
                img: '/sponsors/1.png',
                link: '#',
            },
            {
                name: 'Ελληνική Ομοσπονδία Βιολογικής Γεωργίας',
                img: '/sponsors/1.png',
                link: '#',
            },
            {
                name: 'Ελληνική Ομοσπονδία Βιολογικής Γεωργίας',
                img: '/sponsors/1.png',
                link: '#',
            },
        ],
    },
    speeches: {
        title: 'Ομιλιες',
        description:
            'Όλες οι πληροφορίες για τις σημερινές ομιλίες. Η λίστα ενημερώνεται τακτικά ώστε να μην χάσεις τίποτα!',
        speeches: speeches.gr,
    },
    workshops: {
        title: 'Εργαστηρια',
        description:
            'Βρες τα εργαστήρια που σε ενδιαφέρουν με μία μόνο κίνηση!',
        workshops: workshops.gr,
    },
    map: {
        title: 'Χαρτης Χωρου',
        description:
            'Ανακάλυψε όλους τους χώρους του φεστιβάλ και μην χάσεις τίποτα!',
        locations: [
            {
                name: 'Εκθεσιακός Χώρος 1',
                features: ['Εκθέτες 1-80', 'Εργαστήριο Μαγειρικής'],
                img: {
                    src: '/locations/1.png',
                    alt: 'Exhibition Avenue 1 Map',
                },
                link: '#',
            },
            {
                name: 'Εκθεσιακός Χώρος 2',
                features: ['Εκθέτες 81-120', 'Χώρος Playground'],
                img: {
                    src: '/locations/2.png',
                    alt: 'Exhibition Avenue 2 Map',
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
                img: '/logos/metro.png',
                link: '#',
            },
            {
                name: 'Λεωφορείο',
                img: '/logos/bus.png',
                link: '#',
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
