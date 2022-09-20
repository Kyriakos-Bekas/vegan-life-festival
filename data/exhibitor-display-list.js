import { createExhibitorList } from '@/util/createExhibitorList';
// import { exhibitors } from "./exhibitors";

// Demo Data
export const demoExhibitors = [
    {
        name: 'Artemis stores',
        number: 13,
        sponsor: true,
        slug: 'artemis-stores',
        webAddress: 'artemis.stores',
        bio: [
            'We invest in the power of nature, we support its harmonious coexistence with us, we believe in the value of the earth and we wait for it to give us with its rhythm what is better and purer for us. We believe in the future of all of us.',
            'We see the future of all of us there.',
        ],
        products: [
            {
                title: 'Oregano 30 gr.',
                description:
                    'The herb that accompanies most Greek and Mediterranean dishes and salads, known since antiquity',
            },
            {
                title: 'Thyme 30 gr.',
                description:
                    'The favorite herb of Hippocrates for its antioxidant, antibacterial and antiseptic properties',
            },
            {
                title: 'Mountain Tea 20 gr.',
                description:
                    'Mountain tea is one of the most beloved and widespread herbs of Greek nature, which is consumed for centuries as a decoction',
            },
        ],
        links: [
            {
                href: 'https://www.facebook.com',
                type: 'facebook',
            },
            {
                href: 'https://www.instagram.com',
                type: 'instagram',
            },
            {
                href: 'https://www.twitter.com',
                type: 'twitter',
            },
        ],
    },
    {
        name: 'ipethros',
        number: 80,
        sponsor: false,
        slug: 'ipethros',
        webAddress: 'ipethros.eu',
        bio: [
            'We invest in the power of nature, we support its harmonious coexistence with us, we believe in the value of the earth and we wait for it to give us with its rhythm what is better and purer for us. We believe in the future of all of us.',
            'We see the future of all of us there.',
        ],
        products: [
            {
                title: 'Oregano 30 gr.',
                description:
                    'The herb that accompanies most Greek and Mediterranean dishes and salads, known since antiquity',
            },
            {
                title: 'Thyme 30 gr.',
                description:
                    'The favorite herb of Hippocrates for its antioxidant, antibacterial and antiseptic properties',
            },
            {
                title: 'Mountain Tea 20 gr.',
                description:
                    'Mountain tea is one of the most beloved and widespread herbs of Greek nature, which is consumed for centuries as a decoction',
            },
        ],
        links: [
            {
                href: 'https://www.facebook.com',
                type: 'facebook',
            },
            {
                href: 'https://www.instagram.com',
                type: 'instagram',
            },
            {
                href: 'https://www.twitter.com',
                type: 'twitter',
            },
        ],
        email: 'john@gmail.com',
    },
    {
        name: 'Vegan Food',
        number: 110,
        sponsor: false,
    },
    {
        name: 'Φρούτα Καραμπίδης',
        number: 29,
        sponsor: true,
        slug: 'karambides-fruits',
        webAddress: 'fruits.karambides',
        bio: [
            'We invest in the power of nature, we support its harmonious coexistence with us, we believe in the value of the earth and we wait for it to give us with its rhythm what is better and purer for us. We believe in the future of all of us.',
            'We see the future of all of us there.',
        ],
        products: [
            {
                title: 'Oregano 30 gr.',
                description:
                    'The herb that accompanies most Greek and Mediterranean dishes and salads, known since antiquity',
            },
            {
                title: 'Thyme 30 gr.',
                description:
                    'The favorite herb of Hippocrates for its antioxidant, antibacterial and antiseptic properties',
            },
            {
                title: 'Mountain Tea 20 gr.',
                description:
                    'Mountain tea is one of the most beloved and widespread herbs of Greek nature, which is consumed for centuries as a decoction',
            },
        ],
        links: [
            {
                href: 'https://www.facebook.com',
                type: 'facebook',
            },
            {
                href: 'https://www.instagram.com',
                type: 'instagram',
            },
            {
                href: 'https://www.twitter.com',
                type: 'twitter',
            },
        ],
        email: 'john@gmail.com',
    },
    {
        name: 'Ζωή',
        number: 3,
        sponsor: false,
        slug: 'zoe',
        webAddress: 'zoe.vegan.gr',
        bio: [
            'We invest in the power of nature, we support its harmonious coexistence with us, we believe in the value of the earth and we wait for it to give us with its rhythm what is better and purer for us. We believe in the future of all of us.',
            'We see the future of all of us there.',
        ],
        products: [
            {
                title: 'Oregano 30 gr.',
                description:
                    'The herb that accompanies most Greek and Mediterranean dishes and salads, known since antiquity',
            },
            {
                title: 'Thyme 30 gr.',
                description:
                    'The favorite herb of Hippocrates for its antioxidant, antibacterial and antiseptic properties',
            },
            {
                title: 'Mountain Tea 20 gr.',
                description:
                    'Mountain tea is one of the most beloved and widespread herbs of Greek nature, which is consumed for centuries as a decoction',
            },
        ],
        links: [
            {
                href: 'https://www.facebook.com',
                type: 'facebook',
            },
            {
                href: 'https://www.instagram.com',
                type: 'instagram',
            },
            {
                href: 'https://www.twitter.com',
                type: 'twitter',
            },
        ],
        email: 'john@gmail.com',
    },
    {
        name: 'Μαρία Ιωάννου',
        number: 75,
        sponsor: false,
    },
    {
        name: 'Green Solution',
        number: 89,
        sponsor: true,
        slug: 'green-solution',
        webAddress: 'green-solution.io',
        bio: [
            'We invest in the power of nature, we support its harmonious coexistence with us, we believe in the value of the earth and we wait for it to give us with its rhythm what is better and purer for us. We believe in the future of all of us.',
            'We see the future of all of us there.',
        ],
        products: [
            {
                title: 'Oregano 30 gr.',
                description:
                    'The herb that accompanies most Greek and Mediterranean dishes and salads, known since antiquity',
            },
            {
                title: 'Thyme 30 gr.',
                description:
                    'The favorite herb of Hippocrates for its antioxidant, antibacterial and antiseptic properties',
            },
            {
                title: 'Mountain Tea 20 gr.',
                description:
                    'Mountain tea is one of the most beloved and widespread herbs of Greek nature, which is consumed for centuries as a decoction',
            },
        ],
        links: [
            {
                href: 'https://www.facebook.com',
                type: 'facebook',
            },
            {
                href: 'https://www.instagram.com',
                type: 'instagram',
            },
            {
                href: 'https://www.twitter.com',
                type: 'twitter',
            },
        ],
        email: 'john@gmail.com',
    },
    {
        name: 'Πράσινοι Φίλοι',
        number: 76,
        sponsor: false,
        slug: 'green-friends',
        webAddress: 'green-friends.edu',
        bio: [
            'We invest in the power of nature, we support its harmonious coexistence with us, we believe in the value of the earth and we wait for it to give us with its rhythm what is better and purer for us. We believe in the future of all of us.',
            'We see the future of all of us there.',
        ],
        products: [
            {
                title: 'Oregano 30 gr.',
                description:
                    'The herb that accompanies most Greek and Mediterranean dishes and salads, known since antiquity',
            },
            {
                title: 'Thyme 30 gr.',
                description:
                    'The favorite herb of Hippocrates for its antioxidant, antibacterial and antiseptic properties',
            },
            {
                title: 'Mountain Tea 20 gr.',
                description:
                    'Mountain tea is one of the most beloved and widespread herbs of Greek nature, which is consumed for centuries as a decoction',
            },
        ],
        links: [
            {
                href: 'https://www.facebook.com',
                type: 'facebook',
            },
            {
                href: 'https://www.instagram.com',
                type: 'instagram',
            },
            {
                href: 'https://www.twitter.com',
                type: 'twitter',
            },
        ],
    },
];

export const displayList = Object.entries(createExhibitorList(demoExhibitors));
