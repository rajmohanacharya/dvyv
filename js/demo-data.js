// js/demo-data.js - All demo data and content

const DEMO_DATA = {
    // Social Feed Posts
    socialPosts: [
        {
            id: 1,
            author: 'Priya Vishwakarma',
            avatar: 'PV',
            time: '2 hours ago',
            content: 'Excited to share that our recent workshop on traditional craftsmanship was a huge success! Over 50 members participated and learned amazing skills. 🎨 #DVYV #Community',
            likes: 45,
            comments: [
                { author: 'Rahul', avatar: 'RA', text: 'Was great! Learned so much.', time: '1 hour ago' },
                { author: 'Meera', avatar: 'ME', text: 'When is the next one?', time: '45 min ago' }
            ]
        },
        {
            id: 2,
            author: 'Shantanu',
            avatar: 'SH',
            time: '5 hours ago',
            content: 'Looking forward to the Deepotsava celebration next month! Who else is excited? Let\'s make it memorable! 🪔',
            likes: 67,
            comments: [
                { author: 'Anita', avatar: 'AN', text: 'Can\'t wait! Already preparing.', time: '4 hours ago' }
            ]
        },
        {
            id: 3,
            author: 'Karthik Acharya',
            avatar: 'KA',
            time: '1 day ago',
            content: 'Career Guidance Committee is organizing a resume building session. DM if interested! Limited seats. 📄 #Career',
            likes: 89,
            comments: []
        }
    ],

    // Committee Posts
    committeePost: {
        education: [
            {
                id: 101,
                author: 'Dr. Ramesh',
                avatar: 'DR',
                time: '3 hours ago',
                content: 'Looking for recommendations for MBA colleges in Bangalore. Any suggestions from those who\'ve been through the process?',
                likes: 23,
                comments: [
                    { author: 'Sneha', avatar: 'SN', text: 'IIM Bangalore and ISB are great options!', time: '2 hours ago' },
                    { author: 'Vikram', avatar: 'VI', text: 'Consider XLRI too. Great placements.', time: '1 hour ago' }
                ]
            },
            {
                id: 102,
                author: 'Priya Kumar',
                avatar: 'PK',
                time: '1 day ago',
                content: 'My daughter is preparing for NEET. Anyone knows good coaching institutes in Bangalore?',
                likes: 34,
                comments: [
                    { author: 'Arun', avatar: 'AR', text: 'Aakash Institute is excellent!', time: '18 hours ago' }
                ]
            }
        ],
        career: [
            {
                id: 201,
                author: 'Suresh Patil',
                avatar: 'SP',
                time: '4 hours ago',
                content: 'Hiring for Software Engineer position at my company. Experience: 2-5 years. Tech Stack: React, Node.js. DM for details!',
                likes: 56,
                comments: [
                    { author: 'Nithin', avatar: 'NI', text: 'Sent you a DM!', time: '3 hours ago' }
                ]
            },
            {
                id: 202,
                author: 'Deepa Shenoy',
                avatar: 'DS',
                time: '6 hours ago',
                content: 'Tips for interview preparation: Practice coding daily, understand system design basics, and work on communication skills. Happy to help anyone preparing!',
                likes: 78,
                comments: []
            }
        ],
        culture: [
            {
                id: 301,
                author: 'Lakshmi Rao',
                avatar: 'LR',
                time: '2 hours ago',
                content: 'Planning to organize a classical music evening. Looking for volunteers and performers! Let\'s celebrate our rich cultural heritage. 🎵',
                likes: 41,
                comments: [
                    { author: 'Geetha', avatar: 'GE', text: 'I can sing Carnatic!', time: '1 hour ago' }
                ]
            },
            {
                id: 302,
                author: 'Mohan Bhat',
                avatar: 'MB',
                time: '1 day ago',
                content: 'Teaching Sanskrit to kids on weekends. Free classes! Contact me if interested. Let\'s preserve our language. 📚',
                likes: 63,
                comments: []
            }
        ],
        socialService: [
            {
                id: 401,
                author: 'Anand Kumar',
                avatar: 'AK',
                time: '5 hours ago',
                content: 'Blood donation camp organized by DVYV tomorrow at Jayanagar. Please spread the word and participate! Save lives. 🩸',
                likes: 92,
                comments: [
                    { author: 'Rajesh', avatar: 'RJ', text: 'Will be there!', time: '4 hours ago' }
                ]
            },
            {
                id: 402,
                author: 'Savitha Nayak',
                avatar: 'SN',
                time: '2 days ago',
                content: 'Collecting old clothes and books for underprivileged children. Drop-off location: Malleshwaram community center. Every contribution counts! 🙏',
                likes: 71,
                comments: []
            }
        ]
    },

    // Events
    events: [
        {
            id: 1,
            title: 'Deepotsava',
            date: 'November 15, 2025',
            day: '15',
            month: 'Nov',
            time: '6:00 PM - 9:00 PM',
            location: 'DVYV Community Hall, Jayanagar',
            description: 'Join us for a grand Deepotsava celebration - Festival of Lights! Experience the beauty of traditional lamp lighting ceremony with cultural programs.',
            details: {
                about: 'Deepotsava is a traditional festival celebrating the victory of light over darkness. DVYV community comes together to light thousands of diyas and celebrate our cultural heritage.',
                agenda: [
                    '6:00 PM - Registration and Welcome',
                    '6:30 PM - Traditional Lamp Lighting Ceremony',
                    '7:00 PM - Cultural Programs (Dance, Music)',
                    '8:00 PM - Dinner',
                    '8:45 PM - Group Photo',
                    '9:00 PM - Closing'
                ],
                thingsToBring: [
                    'Traditional attire (encouraged)',
                    'Your enthusiasm and positive energy!',
                    'Camera to capture memories'
                ],
                contact: 'Event Coordinator: Priya (+91 98765 43210)',
                participants: 156
            }
        },
        {
            id: 2,
            title: 'Mahila Mandala',
            date: 'November 20, 2025',
            day: '20',
            month: 'Nov',
            time: '4:00 PM - 7:00 PM',
            location: 'Auditorium, Malleshwaram',
            description: 'Empowering women through discussion, networking, and workshops. A special gathering for all women members of DVYV.',
            details: {
                about: 'Mahila Mandala is DVYV\'s initiative to create a platform for women to connect, share experiences, learn new skills, and support each other in personal and professional growth.',
                agenda: [
                    '4:00 PM - Registration',
                    '4:30 PM - Welcome Address',
                    '5:00 PM - Panel Discussion: Women in Leadership',
                    '6:00 PM - Skill Workshop: Financial Planning',
                    '6:45 PM - Tea & Networking',
                    '7:00 PM - Closing'
                ],
                thingsToBring: [
                    'Notebook and pen for workshop',
                    'Business cards (if available)',
                    'Ideas to share!'
                ],
                contact: 'Coordinator: Lakshmi (+91 98765 43211)',
                participants: 89
            }
        },
        {
            id: 3,
            title: 'Muddu Krishna',
            date: 'November 25, 2025',
            day: '25',
            month: 'Nov',
            time: '10:00 AM - 1:00 PM',
            location: 'Open Ground, Indiranagar',
            description: 'Adorable Krishna & Radha costume competition for kids below 5 years! Prizes, games, and fun activities for little ones.',
            details: {
                about: 'Muddu Krishna is a delightful event celebrating childhood and our cultural traditions. Watch little ones dress up as Krishna and Radha, participate in fun activities, and create wonderful memories!',
                agenda: [
                    '10:00 AM - Registration',
                    '10:30 AM - Costume Parade',
                    '11:00 AM - Photography Session',
                    '11:30 AM - Fun Games & Activities',
                    '12:00 PM - Prize Distribution',
                    '12:30 PM - Lunch',
                    '1:00 PM - Closing'
                ],
                categories: [
                    'Best Krishna Costume (Boys)',
                    'Best Radha Costume (Girls)',
                    'Most Creative Costume',
                    'Cutest Smile Award'
                ],
                thingsToBring: [
                    'Krishna/Radha costume',
                    'Accessories (flute, peacock feather, jewelry)',
                    'Extra clothes for kids',
                    'Water bottle and snacks'
                ],
                prizes: 'Winners receive certificates, trophies, and gift vouchers!',
                contact: 'Coordinator: Anita (+91 98765 43212)',
                participants: 67,
                note: 'Open only for kids below 5 years of age'
            }
        }
    ]
};
