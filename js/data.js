// Sample Data for DVYV Community Platform
const POSTS_DATA = [
    {
        id: 1,
        author: 'Shantanu Acharya',
        avatar: 'SA',
        time: '2 hours ago',
        content: 'Excited to announce our upcoming workshop on traditional craftsmanship and modern entrepreneurship! Open to all DVYV members. Let\'s preserve our heritage while embracing innovation. 🎨',
        likes: 45,
        comments: 12,
        category: 'Education',
        liked: false
    },
    {
        id: 2,
        author: 'Maanikya Acharya',
        avatar: 'MA',
        time: '5 hours ago',
        content: 'Thanks to DVYV\'s career guidance program, I just landed my dream job at a top tech company! Grateful for the mentorship and support from this amazing community. 🙏',
        likes: 89,
        comments: 24,
        category: 'Career',
        liked: false
    },
    {
        id: 3,
        author: 'DVYV Official',
        avatar: 'DV',
        time: '1 day ago',
        content: 'Monthly General Meeting reminder! Join us this Saturday at 6 PM for discussions on upcoming cultural events and community service initiatives. Your voice matters! 📢',
        likes: 126,
        comments: 31,
        category: 'Announcement',
        liked: false
    }
];

const EVENTS_DATA = [
    {
        id: 1,
        title: 'Traditional Craft Workshop',
        date: 'Nov 5, 2025',
        day: '5',
        month: 'Nov',
        participants: 45
    },
    {
        id: 2,
        title: 'Career Guidance Session',
        date: 'Nov 12, 2025',
        day: '12',
        month: 'Nov',
        participants: 78
    },
    {
        id: 3,
        title: 'Cultural Festival Planning',
        date: 'Nov 18, 2025',
        day: '18',
        month: 'Nov',
        participants: 92
    }
];

// Make data available globally
window.DVYV_DATA = {
    posts: POSTS_DATA,
    events: EVENTS_DATA
};
