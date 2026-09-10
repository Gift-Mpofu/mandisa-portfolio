# 💼 Mandisa Portfolio - Customization Guide

## Table of Contents
1. [Quick Start](#quick-start)
2. [File Structure](#file-structure)
3. [Personalizing Content](#personalizing-content)
4. [Styling & Design](#styling--design)
5. [Adding Projects](#adding-projects)
6. [Deployment](#deployment)
7. [Optimization](#optimization)

---

## Quick Start

### Prerequisites
- Text editor (VS Code, Sublime, etc.)
- Web browser
- Basic HTML/CSS knowledge (optional)

### Local Setup

```bash
# Option 1: Python
python -m http.server 8000
# Visit: http://localhost:8000

# Option 2: Node.js
npx http-server
# Visit: http://localhost:8080

# Option 3: VS Code Live Server
# Right-click index.html → "Open with Live Server"
```

---

## File Structure

```
mandisa-portfolio/
├── index.html          # Home/hero page
├── projects.html       # Projects showcase
├── about.html          # About/bio page
├── contact.html        # Contact page
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── main.js         # JavaScript functionality
├── images/
│   ├── hero/          # Hero/banner images
│   ├── projects/      # Project thumbnails
│   ├── profile/       # Profile/about images
│   └── icons/         # UI icons
└── README.md          # Project overview
```

---

## Personalizing Content

### Update Your Name

Edit `index.html`:
```html
<h1>Mandisa [Your Name]</h1>
<!-- Change to -->
<h1>Your Name</h1>
```

Also update in `about.html`, `projects.html`, and `contact.html`.

### Update Hero Section

Edit `index.html`:
```html
<section class="hero">
  <h1>Your Name</h1>
  <p class="tagline">Your profession/role</p>
  <p class="description">
    Brief description of what you do...
  </p>
  <button class="cta-button">View My Work</button>
</section>
```

### Update Bio/About

Edit `about.html`:
```html
<section class="about">
  <h2>About Me</h2>
  <p>Your story here...</p>
  <p>What you're passionate about...</p>
  <p>Your goals and vision...</p>
</section>
```

### Update Contact Information

Edit `contact.html`:
```html
<div class="contact-info">
  <p><strong>Email:</strong> your.email@example.com</p>
  <p><strong>Phone:</strong> +1 (123) 456-7890</p>
  <p><strong>Location:</strong> City, Country</p>
</div>

<!-- Update form action -->
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <!-- form fields -->
</form>
```

### Add Social Links

```html
<div class="social-links">
  <a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn</a>
  <a href="https://github.com/yourprofile" target="_blank">GitHub</a>
  <a href="https://twitter.com/yourprofile" target="_blank">Twitter</a>
</div>
```

---

## Styling & Design

### Color Scheme

Edit `css/style.css`:
```css
:root {
  --primary-color: #2c3e50;      /* Main color */
  --secondary-color: #e74c3c;    /* Accent color */
  --success-color: #27ae60;       /* Success state */
  --text-dark: #333;             /* Text color */
  --text-light: #666;            /* Muted text */
  --bg-light: #f8f9fa;           /* Light background */
  --bg-white: #ffffff;           /* White background */
}
```

### Typography

```css
/* Main fonts */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-dark);
}

/* Headings */
h1, h2, h3 {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  margin-bottom: 1rem;
}
```

### Change Background

```css
body {
  background-color: var(--bg-white);
  background-image: url('path-to-your-image');
  background-attachment: fixed;
  background-size: cover;
}
```

### Modify Button Styles

```css
.btn, .cta-button {
  background-color: var(--primary-color);
  color: white;
  padding: 12px 24px;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.btn:hover {
  background-color: var(--secondary-color);
  transform: translateY(-2px);
}
```

---

## Adding Projects

### Add to Projects Page

Edit `projects.html`:
```html
<div class="project-card">
  <div class="project-image">
    <img src="images/projects/project-name.jpg" alt="Project Name">
  </div>
  <div class="project-info">
    <h3>Project Name</h3>
    <p class="tech-stack">HTML • CSS • JavaScript</p>
    <p class="description">
      Brief description of your project, what it does, and what you learned.
    </p>
    <div class="project-links">
      <a href="https://github.com/yourprofile/project" target="_blank">
        Code
      </a>
      <a href="https://project-demo.com" target="_blank">
        Live Demo
      </a>
    </div>
  </div>
</div>
```

### Project Card Template

```html
<!-- Minimum required fields -->
<div class="project-card">
  <img src="images/projects/thumbnail.jpg" alt="Project name">
  <h3>Project Title</h3>
  <p>Short description</p>
  <a href="link-to-project">View Project →</a>
</div>
```

### Multiple Projects Example

```html
<section class="projects">
  <h2>My Work</h2>
  
  <div class="projects-grid">
    <!-- Project 1 -->
    <div class="project-card">
      <img src="images/projects/project1.jpg">
      <h3>Project 1</h3>
      <p>Description...</p>
    </div>
    
    <!-- Project 2 -->
    <div class="project-card">
      <img src="images/projects/project2.jpg">
      <h3>Project 2</h3>
      <p>Description...</p>
    </div>
    
    <!-- Add more projects -->
  </div>
</section>
```

---

## Deployment

### GitHub Pages

1. Push to GitHub:
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

2. Enable GitHub Pages:
   - Go to Settings → Pages
   - Select "main" branch
   - Save

3. Site available at: `https://yourprofile.github.io/mandisa-portfolio/`

### Custom Domain

1. Add `CNAME` file:
```
yourportfolio.com
```

2. Update DNS at registrar:
   - Add CNAME record pointing to: `yourprofile.github.io`

3. Enable HTTPS in GitHub Pages settings

### Netlify Deployment

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

### Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

---

## Optimization

### Image Optimization

```bash
# Reduce image sizes
# Using ImageOptim (Mac) or similar tool
# Or use online tools like:
# - tinypng.com
# - imagecompressor.com
```

### Performance Checklist

- [ ] Compress all images
- [ ] Minify CSS and JavaScript
- [ ] Enable gzip compression
- [ ] Add lazy loading to images
- [ ] Remove unused CSS
- [ ] Use CDN for assets

### Lazy Loading Images

```html
<img src="images/project.jpg" loading="lazy" alt="Project">
```

### Minify Assets

```bash
# Using online tools
# - minify-js.com
# - cssnano.co
# Then replace original files
```

---

## SEO Optimization

### Meta Tags

Edit `index.html`:
```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Professional portfolio of [Your Name]...">
  <meta name="keywords" content="portfolio, design, development, [your skills]">
  <meta name="author" content="Your Name">
  
  <!-- Open Graph -->
  <meta property="og:title" content="Your Name - Portfolio">
  <meta property="og:description" content="Professional portfolio...">
  <meta property="og:image" content="images/og-image.jpg">
  <meta property="og:url" content="https://yourportfolio.com">
</head>
```

### XML Sitemap

Create `sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourportfolio.com/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://yourportfolio.com/projects.html</loc>
    <priority>0.8</priority>
  </url>
  <!-- Add other pages -->
</urlset>
```

### robots.txt

Create `robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://yourportfolio.com/sitemap.xml
```

---

## Troubleshooting

### Images Not Loading
- Check file paths are relative: `images/photo.jpg`
- Verify image files exist in images folder
- Check file permissions

### Links Not Working
- Ensure HTML files in same directory
- Use relative paths: `about.html` (not `/about.html`)
- Test in browser before deploying

### Styles Not Applying
- Clear browser cache: Ctrl+Shift+Delete
- Check CSS file path
- Verify CSS file is linked in HTML

### Form Not Working
- Update form action to your Formspree ID
- Test submission before deploying
- Check browser console for errors

---

## Advanced Customization

### Add Dark Mode

```javascript
// js/main.js
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Load saved preference
if (localStorage.getItem('darkMode')) {
  document.body.classList.add('dark-mode');
}
```

### Add Smooth Scrolling

```javascript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
```

---

## Support

**Issues**: [GitHub Issues](https://github.com/Gift-Mpofu/mandisa-portfolio/issues)  
**Email**: giftmpofud@gmail.com

---

**Last Updated**: September 2026  
**Version**: 1.0.0
