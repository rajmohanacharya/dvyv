// Main application logic
let currentPage = 'home';

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Render initial page
    renderPage('home');
    
    // Setup navigation
    setupNavigation();
    
    // Setup modals
    setupModals();
    
    // Setup PWA install
    setupPWA();
    
    // Register service worker
    registerServiceWorker();
}

function renderPage(page) {
    currentPage = page;
    const content = document.getElementById('mainContent');
    
    switch(page) {
        case 'home':
            content.innerHTML = renderHome();
            setupPostInteractions();
            break;
        case 'events':
            content.innerHTML = renderEvents();
            break;
        case 'community':
            content.innerHTML = renderCommunity();
            break;
        case 'profile':
            content.innerHTML = renderProfile();
            break;
        default:
            content.innerHTML = renderHome();
    }
}

function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            navItems.forEach(i => i.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Render the selected page
            const page = this.getAttribute('data-page');
            renderPage(page);
        });
    });
}

function setupPostInteractions() {
    // Setup like buttons
    const likeButtons = document.querySelectorAll('[data-action="like"]');
    
    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const postId = parseInt(this.getAttribute('data-post-id'));
            toggleLike(postId);
        });
    });
}

function toggleLike(postId) {
    const post = window.DVYV_DATA.posts.find(p => p.id === postId);
    
    if (post) {
        post.liked = !post.liked;
        post.likes += post.liked ? 1 : -1;
        renderPage('home');
    }
}

function setupModals() {
    const postModal = document.getElementById('postModal');
    const closeModal = document.getElementById('closeModal');
    const submitPost = document.getElementById('submitPost');
    
    // Close modal on X button
    closeModal.addEventListener('click', function() {
        postModal.classList.remove('show');
    });
    
    // Close modal on outside click
    postModal.addEventListener('click', function(e) {
        if (e.target === postModal) {
            postModal.classList.remove('show');
        }
    });
    
    // Submit new post
    submitPost.addEventListener('click', function() {
        const postText = document.getElementById('postText');
        const content = postText.value.trim();
        
        if (content) {
            const newPost = {
                id: Date.now(),
                author: 'You',
                avatar: 'YO',
                time: 'Just now',
                content: content,
                likes: 0,
                comments: 0,
                category: 'General',
                liked: false
            };
            
            window.DVYV_DATA.posts.unshift(newPost);
            postText.value = '';
            postModal.classList.remove('show');
            
            if (currentPage === 'home') {
                renderPage('home');
            }
        }
    });
}

function setupPWA() {
    let deferredPrompt;
    const installBanner = document.getElementById('installBanner');
    const installBtn = document.getElementById('installBtn');
    
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        installBanner.classList.add('show');
    });
    
    installBtn.addEventListener('click', async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            deferredPrompt = null;
            installBanner.classList.remove('show');
        }
    });
    
    window.addEventListener('appinstalled', () => {
        installBanner.classList.remove('show');
        console.log('PWA installed successfully');
    });
}

function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('Service Worker registered:', registration);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    }
}
