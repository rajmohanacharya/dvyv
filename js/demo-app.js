// js/demo-app.js - Main application logic

let currentPage = 'social-feed';
let currentCommittee = 'education';
let currentUser = null;
let socialPosts = [...DEMO_DATA.socialPosts];

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    setupLoginForm();
});

// Login handling
function setupLoginForm() {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (username === 'shantanu' && password === 'shantanu') {
            currentUser = username;
            document.getElementById('loggedUsername').textContent = 'Shantanu';
            document.getElementById('loginPage').classList.add('hidden');
            document.getElementById('mainApp').classList.remove('hidden');
            renderPage('social-feed');
            setupNavigation();
        } else {
            alert('Invalid credentials! Use username: shantanu, password: shantanu');
        }
    });
}

// Logout
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        currentUser = null;
        document.getElementById('mainApp').classList.add('hidden');
        document.getElementById('loginPage').classList.remove('hidden');
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }
}

// Setup Navigation
function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item, .desktop-nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const page = this.getAttribute('data-page');
            if (!page) return;
            
            // Remove active from all
            document.querySelectorAll('.nav-item, .desktop-nav-item').forEach(i => {
                i.classList.remove('active');
            });
            
            // Add active to current
            document.querySelectorAll(`[data-page="${page}"]`).forEach(i => {
                i.classList.add('active');
            });
            
            renderPage(page);
        });
    });
}

// Main render function
function renderPage(page) {
    currentPage = page;
    const content = document.getElementById('mainContent');
    
    switch(page) {
        case 'social-feed':
            content.innerHTML = renderCommittees();
            setupCommunityActions();
            break;
        case 'events':
            content.innerHTML = renderEvents();
            setupEventActions();
            break;
        case 'community':
            content.innerHTML = renderCommunityInfo();
            break;
        case 'profile':
            content.innerHTML = renderProfile();
            setupProfileActions();
            break;
        case 'faq':
            content.innerHTML = renderFAQ();
            break;
        default:
            content.innerHTML = renderCommittees();
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Social Feed
function renderSocialFeed() {
    return `
        <h2 style="font-size: 1.8rem; margin-bottom: 1.5rem;">Social Feed</h2>
        
        <div class="create-post-area">
            <textarea id="newPostContent" placeholder="What's on your mind, ${currentUser}?"></textarea>
            <button class="btn-primary" onclick="createNewPost()">Post</button>
        </div>
        
        ${socialPosts.map(post => renderPostCard(post)).join('')}
    `;
}

function renderPostCard(post) {
    return `
        <div class="post-card">
            <div class="post-header">
                <div class="avatar">${post.avatar}</div>
                <div class="post-author">
                    <h4>${post.author}</h4>
                    <p>${post.time}</p>
                </div>
            </div>
            <div class="post-content">${post.content}</div>
            <div class="post-actions">
                <button class="post-action-btn" onclick="likePost(${post.id})">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                    ${post.likes} Likes
                </button>
                <button class="post-action-btn" onclick="toggleComments(${post.id})">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                    ${post.comments.length} Comments
                </button>
            </div>
            <div id="comments-${post.id}" class="comments-section hidden">
                ${post.comments.map(c => renderComment(c)).join('')}
                <div style="margin-top: 1rem;">
                    <textarea id="comment-input-${post.id}" placeholder="Write a comment..." style="width: 100%; padding: 0.5rem; border-radius: 8px; border: 1px solid var(--border); font-family: inherit;"></textarea>
                    <button class="btn-primary" style="margin-top: 0.5rem;" onclick="addComment(${post.id})">Comment</button>
                </div>
            </div>
        </div>
    `;
}

function renderComment(comment) {
    return `
        <div class="comment-item">
            <div class="comment-avatar">${comment.avatar}</div>
            <div class="comment-content">
                <div class="comment-author">${comment.author}</div>
                <div class="comment-text">${comment.text}</div>
                <div class="comment-time">${comment.time}</div>
            </div>
        </div>
    `;
}

function setupSocialFeedActions() {
    // Actions are setup via onclick in HTML
}

function createNewPost() {
    const content = document.getElementById('newPostContent').value.trim();
    if (!content) {
        alert('Please write something!');
        return;
    }
    
    const newPost = {
        id: Date.now(),
        author: 'Shantanu',
        avatar: 'SH',
        time: 'Just now',
        content: content,
        likes: 0,
        comments: []
    };
    
    socialPosts.unshift(newPost);
    renderPage('social-feed');
}

function likePost(postId) {
    const post = socialPosts.find(p => p.id === postId);
    if (post) {
        post.likes++;
        renderPage('social-feed');
    }
}

function toggleComments(postId) {
    const commentsSection = document.getElementById(`comments-${postId}`);
    commentsSection.classList.toggle('hidden');
}

function addComment(postId) {
    const input = document.getElementById(`comment-input-${postId}`);
    const text = input.value.trim();
    if (!text) return;
    
    const post = socialPosts.find(p => p.id === postId);
    if (post) {
        post.comments.push({
            author: 'Shantanu',
            avatar: 'SH',
            text: text,
            time: 'Just now'
        });
        renderPage('social-feed');
    }
}

// Events
function renderEvents() {
    return `
        <h2 style="font-size: 1.8rem; margin-bottom: 1.5rem;">Upcoming Events</h2>
        
        ${DEMO_DATA.events.map(event => `
            <div class="card event-card" onclick="viewEventDetail(${event.id})">
                <div class="event-date">
                    <div class="event-date-day">${event.day}</div>
                    <div class="event-date-month">${event.month}</div>
                </div>
                <div class="event-content">
                    <h3>${event.title}</h3>
                    <p>${event.description}</p>
                    <p style="margin-top: 0.5rem; font-weight: 600; color: var(--primary);">${event.participants} registered</p>
                </div>
            </div>
        `).join('')}
    `;
}

function setupEventActions() {
    // Handled via onclick
}

function viewEventDetail(eventId) {
    const event = DEMO_DATA.events.find(e => e.id === eventId);
    if (!event) return;
    
    document.getElementById('mainContent').innerHTML = `
        <button class="back-btn" onclick="renderPage('events')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="19" y1="12" x2="5" y2="12"/>
                <polyline points="12 19 5 12 12 5"/>
            </svg>
            Back to Events
        </button>
        
        <div class="event-detail-header">
            <h2>${event.title}</h2>
            <p style="font-size: 1.1rem; margin-top: 0.5rem;">${event.description}</p>
            <div class="event-detail-meta">
                <div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    ${event.date}
                </div>
                <div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                    ${event.time}
                </div>
                <div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                    ${event.location}
                </div>
            </div>
            <button class="btn-primary" style="margin-top: 1.5rem;" onclick="registerForEvent(${event.id})">Register Now (${event.details.participants} registered)</button>
        </div>
        
        <div class="card">
            <div class="card-body">
                <div class="event-detail-section">
                    <h3>About This Event</h3>
                    <p>${event.details.about}</p>
                </div>
                
                <div class="event-detail-section">
                    <h3>Agenda</h3>
                    <ul>
                        ${event.details.agenda.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="event-detail-section">
                    <h3>Things to Bring</h3>
                    <ul>
                        ${event.details.thingsToBring.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                
                ${event.details.categories ? `
                    <div class="event-detail-section">
                        <h3>Competition Categories</h3>
                        <ul>
                            ${event.details.categories.map(cat => `<li>${cat}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
                
                ${event.details.prizes ? `
                    <div class="event-detail-section">
                        <h3>Prizes</h3>
                        <p>${event.details.prizes}</p>
                    </div>
                ` : ''}
                
                ${event.details.note ? `
                    <div class="event-detail-section">
                        <h3>Important Note</h3>
                        <p style="color: var(--secondary); font-weight: 600;">${event.details.note}</p>
                    </div>
                ` : ''}
                
                <div class="event-detail-section">
                    <h3>Contact</h3>
                    <p>${event.details.contact}</p>
                </div>
            </div>
        </div>
    `;
}

function registerForEvent(eventId) {
    alert('Registration successful! You will receive a confirmation email shortly.');
}

// Community
function renderCommunity() {
    return `
        <h2 style="font-size: 1.8rem; margin-bottom: 1.5rem;">Community Committees</h2>
        
        <div class="committee-tabs">
            <button class="committee-tab ${currentCommittee === 'education' ? 'active' : ''}" onclick="switchCommittee('education')">Education</button>
            <button class="committee-tab ${currentCommittee === 'career' ? 'active' : ''}" onclick="switchCommittee('career')">Career</button>
            <button class="committee-tab ${currentCommittee === 'culture' ? 'active' : ''}" onclick="switchCommittee('culture')">Culture</button>
            <button class="committee-tab ${currentCommittee === 'socialService' ? 'active' : ''}" onclick="switchCommittee('socialService')">Social Service</button>
        </div>
        
        <div class="create-post-area">
            <textarea id="committeePostContent" placeholder="Ask a question or share something..."></textarea>
            <button class="btn-primary" onclick="createCommitteePost()">Post to ${currentCommittee}</button>
        </div>
        
        ${DEMO_DATA.committeePost[currentCommittee].map(post => renderPostCard(post)).join('')}
    `;
}

function setupCommunityActions() {
    // Handled via onclick
}

function switchCommittee(committee) {
    currentCommittee = committee;
    renderPage('community');
}

function createCommitteePost() {
    const content = document.getElementById('committeePostContent').value.trim();
    if (!content) {
        alert('Please write something!');
        return;
    }
    
    alert(`Post created in ${currentCommittee} committee!`);
    document.getElementById('committeePostContent').value = '';
}

// Profile
function renderProfile() {
    return `
        <div class="card">
            <div class="profile-header"></div>
            <div class="profile-info">
                <div class="profile-avatar">SH</div>
                <h2>Shantanu</h2>
                <p style="color: var(--text-light); margin-bottom: 1rem;">Active Member since 2025</p>
                <p style="color: var(--text-light);">📍 Bangalore, Karnataka</p>
            </div>
        </div>
        
        <div class="card">
            <div class="card-body">
                <h3 style="margin-bottom: 1.5rem;">Account Settings</h3>
                
                <div style="margin-bottom: 2rem;">
                    <h4 style="margin-bottom: 1rem;">Reset Password</h4>
                    <div style="margin-bottom: 1rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Current Password</label>
                        <input type="password" id="currentPassword" style="width: 100%; padding: 0.75rem; border: 2px solid var(--border); border-radius: 8px; font-family: inherit;">
                    </div>
                    <div style="margin-bottom: 1rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">New Password</label>
                        <input type="password" id="newPassword" style="width: 100%; padding: 0.75rem; border: 2px solid var(--border); border-radius: 8px; font-family: inherit;">
                    </div>
                    <div style="margin-bottom: 1rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Confirm New Password</label>
                        <input type="password" id="confirmPassword" style="width: 100%; padding: 0.75rem; border: 2px solid var(--border); border-radius: 8px; font-family: inherit;">
                    </div>
                    <button class="btn-primary" onclick="resetPassword()">Update Password</button>
                </div>
                
                <div>
                    <h4 style="margin-bottom: 1rem;">Committees</h4>
                    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                        <span style="padding: 0.5rem 1rem; background: rgba(249, 115, 22, 0.1); color: var(--primary); border-radius: 20px; font-size: 0.9rem;">Education</span>
                        <span style="padding: 0.5rem 1rem; background: rgba(59, 130, 246, 0.1); color: #3b82f6; border-radius: 20px; font-size: 0.9rem;">Career</span>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="card">
            <div class="card-body">
                <h3 style="margin-bottom: 1rem;">Activity Stats</h3>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
                    <div style="text-align: center; padding: 1rem; background: var(--bg); border-radius: 10px;">
                        <div style="font-size: 2rem; font-weight: bold; color: var(--primary);">8</div>
                        <div style="font-size: 0.9rem; color: var(--text-light);">Posts</div>
                    </div>
                    <div style="text-align: center; padding: 1rem; background: var(--bg); border-radius: 10px;">
                        <div style="font-size: 2rem; font-weight: bold; color: #3b82f6;">5</div>
                        <div style="font-size: 0.9rem; color: var(--text-light);">Events Attended</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function setupProfileActions() {
    // Handled via onclick
}

function resetPassword() {
    const current = document.getElementById('currentPassword').value;
    const newPass = document.getElementById('newPassword').value;
    const confirm = document.getElementById('confirmPassword').value;
    
    if (!current || !newPass || !confirm) {
        alert('Please fill all fields');
        return;
    }
    
    if (newPass !== confirm) {
        alert('New passwords do not match!');
        return;
    }
    
    if (current !== 'shantanu') {
        alert('Current password is incorrect!');
        return;
    }
    
    alert('Password updated successfully!');
    document.getElementById('currentPassword').value = '';
    document.getElementById('newPassword').value = '';
    document.getElementById('confirmPassword').value = '';
}

// FAQ & Info
function renderFAQ() {
    return `
        <h2 style="font-size: 1.8rem; margin-bottom: 1.5rem;">FAQ & Information</h2>
        
        <div class="card info-card">
            <h4><a href="#mission" onclick="showInfo('mission')" style="color: var(--primary); text-decoration: none;">Mission Statement</a></h4>
        </div>
        
        <div class="card info-card">
            <h4><a href="#values" onclick="showInfo('values')" style="color: var(--primary); text-decoration: none;">Core Values</a></h4>
        </div>
        
        <div class="card info-card">
            <h4><a href="#norms" onclick="showInfo('norms')" style="color: var(--primary); text-decoration: none;">Team Norms</a></h4>
        </div>
        
        <div class="card info-card">
            <h4><a href="#faq" onclick="showInfo('faq')" style="color: var(--primary); text-decoration: none;">Frequently Asked Questions</a></h4>
        </div>
    `;
}

function showInfo(type) {
    const content = document.getElementById('mainContent');
    let html = '';
    
    switch(type) {
        case 'mission':
            html = `
                <button class="back-btn" onclick="renderPage('faq')">← Back</button>
                <div class="card">
                    <div class="card-body">
                        <h2 style="color: var(--primary); margin-bottom: 1.5rem;">Our Mission</h2>
                        <div class="info-section">
                            <p>To provide an inclusive and supportive environment in which all Vishwakarma youth can acquire knowledge, lead, and grow together.</p>
                            <p style="margin-top: 1rem;">To foster a diverse youth force through skill development, education, career assistance, and entrepreneurial support.</p>
                            <p style="margin-top: 1rem;">To conserve and promote the Vishwakarma community's values, culture, and traditions while also encouraging growth and innovation.</p>
                            <p style="margin-top: 1rem;">To develop effective community service programs that benefit both members and society at large.</p>
                        </div>
                    </div>
                </div>
            `;
            break;
        case 'values':
            html = `
                <button class="back-btn" onclick="renderPage('faq')">← Back</button>
                <div class="card">
                    <div class="card-body">
                        <h2 style="color: var(--primary); margin-bottom: 1.5rem;">Core Values</h2>
                        
                        <div class="info-section">
                            <h3>Unity, Respect, and Inclusivity</h3>
                            <p>Valuing all members equally, celebrating diversity, and ensuring that no one gets overlooked.</p>
                        </div>
                        
                        <div class="info-section">
                            <h3>Empowerment and Equity</h3>
                            <p>Entails empowering one another by giving equal opportunities for personal and societal progress.</p>
                        </div>
                        
                        <div class="info-section">
                            <h3>Service & Integrity</h3>
                            <p>Entails working selflessly to benefit the community and society while upholding honesty, fairness, and transparency in all acts and decisions.</p>
                        </div>
                        
                        <div class="info-section">
                            <h3>Excellence & Innovation</h3>
                            <p>Aiming for constant learning, creativity, and improvement in everything we do.</p>
                        </div>
                    </div>
                </div>
            `;
            break;
        case 'norms':
            html = `
                <button class="back-btn" onclick="renderPage('faq')">← Back</button>
                <div class="card">
                    <div class="card-body">
                        <h2 style="color: var(--primary); margin-bottom: 1.5rem;">Team Norms</h2>
                        
                        <div class="info-section">
                            <h3>Membership</h3>
                            <ul>
                                <li>Open to all Vishwakarma youth (ages 18-35)</li>
                                <li>Membership involves registration and adherence to the code of conduct</li>
                                <li>Members must take part in at least two community/team activities each year</li>
                            </ul>
                        </div>
                        
                        <div class="info-section">
                            <h3>Meetings</h3>
                            <ul>
                                <li>Monthly team meetings (mandatory for Core committee)</li>
                                <li>Quarterly general meetings with all members</li>
                                <li>Special committees meet as needed</li>
                            </ul>
                        </div>
                        
                        <div class="info-section">
                            <h3>Code of Conduct</h3>
                            <ul>
                                <li>Respect all members, regardless of gender, background, or views</li>
                                <li>Zero tolerance for discrimination, harassment, or abuse of position</li>
                                <li>Transparent financial management with annual audits</li>
                                <li>Members represent the community well in public forums and social media</li>
                            </ul>
                        </div>
                        
                        <div class="info-section">
                            <h3>Disciplinary Norms</h3>
                            <ul>
                                <li>Warning for the first infraction of the code of conduct</li>
                                <li>Suspension for repeat infractions</li>
                                <li>Membership may be revoked in the event of extreme misconduct</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `;
            break;
        case 'faq':
            html = `
                <button class="back-btn" onclick="renderPage('faq')">← Back</button>
                <div class="card">
                    <div class="card-body">
                        <h2 style="color: var(--primary); margin-bottom: 1.5rem;">Frequently Asked Questions</h2>
                        
                        <div class="info-section">
                            <h3>How do I join DVYV?</h3>
                            <p>Contact us through our Instagram handle @dvyv_bengaluru_official or fill out the registration form on our website.</p>
                        </div>
                        
                        <div class="info-section">
                            <h3>Is there a membership fee?</h3>
                            <p>Currently, DVYV membership is free for all eligible youth aged 18-35.</p>
                        </div>
                        
                        <div class="info-section">
                            <h3>What committees can I join?</h3>
                            <p>We have four main committees: Education, Career, Culture, and Social Service. You can join multiple committees based on your interests.</p>
                        </div>
                        
                        <div class="info-section">
                            <h3>How often are events organized?</h3>
                            <p>We organize events monthly, including workshops, cultural programs, networking sessions, and community service activities.</p>
                        </div>
                        
                        <div class="info-section">
                            <h3>Can I volunteer for events?</h3>
                            <p>Absolutely! We encourage all members to volunteer. Contact the event coordinator or post in the relevant committee forum.</p>
                        </div>
                    </div>
                </div>
            `;
            break;
    }
    
    content.innerHTML = html;
}
