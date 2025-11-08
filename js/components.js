// Component rendering functions

function renderPostCreator() {
    return `
        <div class="card">
            <div class="post-creator">
                <div class="avatar">You</div>
                <input type="text" class="post-input" placeholder="What's on your mind?" readonly onclick="document.getElementById('postModal').classList.add('show')">
            </div>
            <div class="post-actions">
                <button class="post-action-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="3" width="18" height="18" rx="2"/>
                        <circle cx="9" cy="9" r="2"/>
                        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                    </svg>
                    Photo
                </button>
                <button class="post-action-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="4" width="18" height="18" rx="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/>
                        <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    Event
                </button>
            </div>
        </div>
    `;
}

function renderPost(post) {
    return `
        <div class="card">
            <div class="card-body">
                <div class="post-header">
                    <div class="post-author">
                        <div class="avatar">${post.avatar}</div>
                        <div class="post-author-info">
                            <h3>${post.author}</h3>
                            <p>${post.time}</p>
                        </div>
                    </div>
                    <span class="post-category">${post.category}</span>
                </div>
                <p class="post-content">${post.content}</p>
            </div>
            <div class="post-stats">
                <span>${post.likes} likes</span>
                <span>${post.comments} comments</span>
            </div>
            <div class="post-interactions">
                <button class="interaction-btn ${post.liked ? 'liked' : ''}" data-action="like" data-post-id="${post.id}">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="${post.liked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                    Like
                </button>
                <button class="interaction-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                    Comment
                </button>
                <button class="interaction-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="18" cy="5" r="3"/>
                        <circle cx="6" cy="12" r="3"/>
                        <circle cx="18" cy="19" r="3"/>
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                    </svg>
                    Share
                </button>
            </div>
        </div>
    `;
}

function renderEvent(event) {
    return `
        <div class="card">
            <div class="event-card">
                <div class="event-date">
                    <span class="event-date-day">${event.day}</span>
                    <span class="event-date-month">${event.month}</span>
                </div>
                <div class="event-content">
                    <h3>${event.title}</h3>
                    <p style="font-size: 0.9rem; color: var(--text-light);">${event.date}</p>
                    <div class="event-meta">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                            <circle cx="9" cy="7" r="4"/>
                        </svg>
                        <span>${event.participants} going</span>
                    </div>
                </div>
            </div>
            <button class="btn-primary">Register Now</button>
        </div>
    `;
}

function renderHome() {
    const posts = window.DVYV_DATA.posts;
    return renderPostCreator() + posts.map(post => renderPost(post)).join('');
}

function renderEvents() {
    const events = window.DVYV_DATA.events;
    return `
        <div class="card">
            <div class="card-body" style="display: flex; justify-content: space-between; align-items: center;">
                <h2 style="font-size: 1.3rem;">Upcoming Events</h2>
                <button class="btn-post" style="padding: 0.75rem 1.5rem; margin: 0;">+ Create</button>
            </div>
        </div>
        ${events.map(event => renderEvent(event)).join('')}
    `;
}

function renderCommunity() {
    return `
        <div class="stats-banner">
            <h2>DVYV Community</h2>
            <p>Coastal Karnataka Vishwakarma Brahmins Youth Association</p>
            <div class="stats-grid">
                <div class="stat-item">
                    <h3>500+</h3>
                    <p>Members</p>
                </div>
                <div class="stat-item">
                    <h3>45</h3>
                    <p>Events</p>
                </div>
                <div class="stat-item">
                    <h3>12</h3>
                    <p>Programs</p>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-body">
                <h3 style="font-size: 1.2rem; margin-bottom: 1rem;">Our Mission</h3>
                <p style="line-height: 1.7; color: var(--text-light);">
                    To provide an inclusive and supportive environment in which all Vishwakarma youth 
                    can acquire knowledge, lead, and grow together through skill development, education, 
                    career assistance, and entrepreneurial support.
                </p>
            </div>
        </div>

        <div class="card">
            <div class="card-body">
                <h3 style="font-size: 1.2rem; margin-bottom: 1rem;">Core Values</h3>
                
                <div class="value-item">
                    <div class="value-icon blue">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                            <circle cx="9" cy="7" r="4"/>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                        </svg>
                    </div>
                    <div class="value-content">
                        <h4>Unity & Inclusivity</h4>
                        <p>Celebrating diversity and ensuring no one gets overlooked</p>
                    </div>
                </div>

                <div class="value-item">
                    <div class="value-icon green">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
                            <polyline points="16 7 22 7 22 13"/>
                        </svg>
                    </div>
                    <div class="value-content">
                        <h4>Empowerment & Equity</h4>
                        <p>Equal opportunities for personal and societal progress</p>
                    </div>
                </div>

                <div class="value-item">
                    <div class="value-icon purple">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="8" r="7"/>
                            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
                        </svg>
                    </div>
                    <div class="value-content">
                        <h4>Service & Integrity</h4>
                        <p>Working selflessly with honesty and transparency</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-body">
                <h3 style="font-size: 1.2rem; margin-bottom: 1rem;">Committees</h3>
                <div class="committees-grid">
                    <div class="committee-item orange">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                        </svg>
                        <span>Education</span>
                    </div>
                    <div class="committee-item blue">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="2" y="7" width="20" height="14" rx="2"/>
                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                        </svg>
                        <span>Career</span>
                    </div>
                    <div class="committee-item purple">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                            <circle cx="9" cy="7" r="4"/>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                        </svg>
                        <span>Culture</span>
                    </div>
                    <div class="committee-item green">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                        </svg>
                        <span>Social Service</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderProfile() {
    return `
        <div class="card">
            <div class="profile-header"></div>
            <div class="profile-info">
                <div class="profile-avatar">You</div>
                <h2>Your Name</h2>
                <p style="color: var(--text-light);">Member since 2025</p>
                <div class="profile-meta">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span>Bangalore, Karnataka</span>
                </div>
                <button class="btn-secondary">Edit Profile</button>
            </div>
        </div>

        <div class="card">
            <div class="card-body">
                <h3 style="font-size: 1.2rem; margin-bottom: 1rem;">Activity Stats</h3>
                <div class="activity-grid">
                    <div class="activity-stat">
                        <div class="activity-stat-value orange">8</div>
                        <div class="activity-stat-label">Events Attended</div>
                    </div>
                    <div class="activity-stat">
                        <div class="activity-stat-value blue">24</div>
                        <div class="activity-stat-label">Posts</div>
                    </div>
                    <div class="activity-stat">
                        <div class="activity-stat-value green">156</div>
                        <div class="activity-stat-label">Connections</div>
                    </div>
                    <div class="activity-stat">
                        <div class="activity-stat-value purple">12</div>
                        <div class="activity-stat-label">Contributions</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-body">
                <h3 style="font-size: 1.2rem; margin-bottom: 1rem;">Membership Status</h3>
                <div class="membership-info">
                    <span style="color: var(--text-light);">Status</span>
                    <span class="status-badge">Active</span>
                </div>
                <div class="membership-info">
                    <span style="color: var(--text-light);">Age Group</span>
                    <span style="font-weight: 600;">18-35</span>
                </div>
                <div class="membership-info">
                    <span style="color: var(--text-light);">Annual Activities</span>
                    <span style="font-weight: 600;">8 / 2 required</span>
                </div>
            </div>
        </div>
    `;
}
