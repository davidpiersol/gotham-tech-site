# Gotham Tech Solutions Website

A modern, responsive website for Gotham Tech Solutions. This is a static site built with HTML, CSS, and JavaScript, originally designed on Squarespace and migrated to be a standalone static site for hosting on Netlify.

## Project Structure

```
gotham-tech-site/
├── index.html              # Main landing page
├── css/
│   └── styles.css         # Main stylesheet
├── js/
│   └── script.js          # JavaScript functionality
├── pages/
│   ├── services.html      # Services page
│   ├── shop.html          # Shop page (template)
│   ├── about.html         # About page (template)
│   └── contact.html       # Contact page (template)
└── images/                # (Reserved for future images)
```

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern Navigation**: Smooth scrolling and navigation menu
- **Service Cards**: Interactive service showcase with hover effects
- **SEO Optimized**: Proper semantic HTML and meta tags
- **Fast Loading**: Lightweight CSS and minimal JavaScript
- **Netlify Ready**: Configured for easy deployment

## Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with flexbox and grid
- **JavaScript (Vanilla)**: No external dependencies
- **SVG**: Vector graphics for logo

## Getting Started

### Local Development

1. Clone or download this repository:
   ```bash
   git clone <repo-url>
   cd gotham-tech-site
   ```

2. Open `index.html` in your browser or use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   
   # Using Ruby
   ruby -run -ehttpd . -p8000
   ```

3. Visit `http://localhost:8000` in your browser

## Deployment to Netlify

### Option 1: GitHub Integration (Recommended)

1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. Connect to Netlify:
   - Go to [netlify.com](https://www.netlify.com)
   - Click "New site from Git"
   - Select GitHub and authorize
   - Choose your repository
   - Leave build settings as default (no build command needed)
   - Click "Deploy site"

### Option 2: Manual Deployment

1. Build a production-ready version:
   ```bash
   # Compress CSS and JavaScript (optional)
   # Most sites can deploy as-is
   ```

2. Deploy via Netlify CLI:
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify deploy --prod --dir=.
   ```

3. Or drag-and-drop:
   - Go to [netlify.com](https://www.netlify.com)
   - Create a new site and drag the project folder directly

### Option 3: Direct Upload

1. Zip the project folder
2. Go to [netlify.com](https://www.netlify.com)
3. Click "New site from template"
4. Select "Drag and drop"
5. Drop the zipped folder

## Custom Domain Setup

After deploying to Netlify:

1. Go to **Domain settings**
2. Click **Add custom domain**
3. Enter your domain (e.g., `www.thegotechs.com`)
4. Follow DNS configuration instructions from your domain registrar
5. Wait for DNS propagation (usually 24-48 hours)

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Colors
Edit CSS variables in `css/styles.css`:
- Primary colors
- Background colors
- Button styles

### Content
Edit HTML files directly:
- Update company information
- Modify service descriptions
- Change contact details

### Fonts
Current font stack uses system fonts for optimal performance. To change:
1. Edit `font-family` in `css/styles.css`
2. Update `@import` statements if using Google Fonts

### Images
- Replace placeholder SVGs with actual images
- Add images to the `images/` folder
- Update image paths in HTML files

## Performance Tips

- Images are optimized for web
- Minimize external dependencies
- CSS and JS are minified (optional)
- Lazy loading recommended for future image additions

## SEO Optimization

The site includes:
- Proper meta tags and descriptions
- Semantic HTML structure
- Alt text for images (add as needed)
- Mobile-friendly viewport
- Open Graph tags (add for social sharing)

## Adding New Pages

1. Create new HTML file in `pages/` folder
2. Copy header and footer from existing pages
3. Update navigation links in header
4. Update relative paths for CSS and JS files
5. Test all links

## Contact & Support

For website updates or issues:
- Contact: [your-email]
- Domain: www.thegotechs.com

## License

© 2024 Gotham Tech Solutions. All rights reserved.

---

## Migration Checklist

- [ ] Download files from Squarespace
- [ ] Extract this repository
- [ ] Test locally in browser
- [ ] Push to GitHub
- [ ] Connect to Netlify
- [ ] Set up custom domain
- [ ] Test in production
- [ ] Update social media links
- [ ] Set up form submissions (if needed)

## Future Enhancements

- [ ] Add contact form with form submission
- [ ] Implement blog section
- [ ] Add product gallery/shop
- [ ] Setup email notifications
- [ ] Add analytics tracking
- [ ] Implement search functionality
- [ ] Create admin dashboard

