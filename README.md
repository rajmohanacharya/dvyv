# DVYV Community PWA

Progressive Web App for Dakshina Kannada Vishwabrahmana Yuva Vedike (DVYV).

## 🌐 Live Site

Visit: `https://rajmohanacharya.github.io/dvyv-community-pwa`

## 📱 Features

- **Social Feed** - Share updates, like and comment on posts
- **Events** - Discover and register for community events
- **Community Info** - Learn about DVYV mission, values, and committees
- **Member Profiles** - View activity stats and membership status
- **PWA** - Install as app on any device
- **Offline Support** - Works without internet connection

## 🚀 Quick Start

1. Create GitHub repository: `dvyv-community-pwa`
2. Upload all files maintaining folder structure
3. Go to Settings > Pages
4. Select branch: `main`
5. Click Save
6. Your site will be live in 2-3 minutes!

## 📁 Project Structure
```css
dvyv-community-pwa/
├── index.html          # Main HTML file
├── manifest.json       # PWA manifest
├── sw.js              # Service Worker
├── css/
│   └── style.css      # All styles
├── js/
│   ├── app.js         # Main app logic
│   ├── components.js  # UI components
│   └── data.js        # Sample data
├── icons/
│   ├── icon-72x72.png
│   ├── icon-192x192.png
│   └── icon-512x512.png
└── README.md
```

## 🎨 Customization

### Change Colors
Edit `css/style.css` - line 10-16:
```css
:root {
    --primary: #f97316;  /* Change this */
    --secondary: #dc2626; /* And this */
}
```

### Add Posts
Edit `js/data.js` - add items to `POSTS_DATA` array

### Add Events
Edit `js/data.js` - add items to `EVENTS_DATA` array

### Change Logo
Replace "DV" text in `index.html` - line 30

## 📲 Installing as App

### On Android:
1. Open site in Chrome
2. Tap "Install App" banner
3. Or: Menu > Add to Home Screen

### On iOS:
1. Open site in Safari
2. Tap Share button
3. Tap "Add to Home Screen"

### On Desktop:
1. Look for install icon in address bar
2. Click and confirm installation

## 🔧 Technical Details

- **No Build Process** - Pure HTML/CSS/JS
- **No Dependencies** - Works standalone
- **Offline First** - Service Worker caching
- **Responsive** - Works on all screen sizes
- **Fast** - Loads in under 2 seconds

## 📊 Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support  
- Safari: ✅ Full support (iOS 11.3+)
- Opera: ✅ Full support

## 🐛 Troubleshooting

### Site not loading?
- Check GitHub Pages is enabled
- Wait 2-3 minutes after enabling
- Clear browser cache

### PWA not installing?
- Must use HTTPS (GitHub Pages has this)
- Check manifest.json is accessible
- Try different browser

### Icons not showing?
- Ensure icons are in `/icons/` folder
- Check file names match exactly
- Icons must be PNG format

## 📝 License

MIT License - Free to use and modify

## 👥 Community

- Website: dvyvcommunity.com (coming soon)
- Instagram: @dvyv_bengaluru_official
- Location: Bangalore, Karnataka

## 🎯 Roadmap

- [ ] User authentication
- [ ] Real database (Firebase)
- [ ] Image uploads
- [ ] Push notifications
- [ ] Member directory
- [ ] Event calendar
- [ ] Admin panel

## 📧 Support

For issues or questions:
- Create GitHub issue
- Email: support@dvyvcommunity.com (setup needed)

---

**Built with ❤️ for the DVYV Community**

Last Updated: October 2025
Version: 1.0.0

