# Hi, I'm Das - Personal Portfolio Website 🚀

A minimal, blog-style personal resume website designed to amaze visitors at first glance. Built for GitHub Pages deployment.

## 🌟 Features

- **Responsive Design** - Looks amazing on all devices
- **Minimal & Clean** - Professional blog-like aesthetic
- **Smooth Animations** - Engaging scroll animations and transitions
- **SEO Optimized** - Meta tags and semantic HTML
- **Fast Loading** - Optimized CSS and minimal dependencies
- **Interactive Elements** - Hover effects, typewriter animation, and more
- **Contact Form Ready** - Easy to integrate with form services

## 🔧 Customization Guide

### 1. Personal Information
Update these placeholders in `index.html`:

- **Name**: Replace "Manyabar Das" with your full name
- **Title**: Update "Software Developer" to your role
- **Email**: Replace `[your.email@example.com]` with your actual email
- **Social Links**: Update LinkedIn, GitHub, and Twitter URLs

### 2. Profile Picture
Replace the placeholder in the hero section:
```html
<div class="profile-placeholder">
    <!-- Replace this with: -->
    <img src="your-photo.jpg" alt="Your Name" class="profile-image">
</div>
```

Add this CSS for the image:
```css
.profile-image {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid rgba(255, 255, 255, 0.2);
}
```

### 3. About Section
Replace all `[PLACEHOLDER:...]` text with your actual content:
- Personal story and background
- Your journey into tech
- What drives you as a developer
- Your approach to solving problems

### 4. Experience Timeline
Update the timeline items:
- Job titles and company names
- Employment dates
- Key achievements with metrics
- Educational background

### 5. Projects
For each project card, update:
- Project names and descriptions
- Technology stacks used
- Live demo and GitHub links
- Add actual project images

### 6. Skills
Replace placeholder skills with your actual technologies:
- Frontend frameworks/libraries you use
- Backend technologies you're proficient in
- Tools and platforms you work with

### 7. Blog Posts
Replace blog placeholders with your actual content:
- Real blog post titles and links
- Publishing dates
- Categories and excerpts

### 8. Contact Information
- Update your actual email address
- Add your real social media profiles
- Consider integrating with a form service

## 🚀 Deployment to GitHub Pages

### Option 1: Simple Upload
1. Create a new repository named `hi-Das.github.io`
2. Upload all files to the repository
3. Go to Settings → Pages
4. Select "Deploy from a branch" and choose `main`
5. Your site will be live at `https://hi-Das.github.io`

### Option 2: Git Commands
```bash
# Clone your repository
git clone https://github.com/hi-Das/hi-Das.github.io.git

# Add your files
cp index.html styles.css script.js your-repo-folder/

# Commit and push
cd hi-Das.github.io
git add .
git commit -m "Initial portfolio site"
git push origin main
```

## 📧 Contact Form Integration

The contact form is ready to integrate with services like:

### Netlify Forms (Recommended)
Add `netlify` attribute to the form:
```html
<form class="form" netlify>
```

### Formspree
Update form action:
```html
<form class="form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### EmailJS
Include EmailJS library and update the JavaScript in `script.js`:
```javascript
// Uncomment and configure the EmailJS section
```

## 🎨 Color Customization

Update CSS variables in `styles.css`:
```css
:root {
    --primary: #2563eb;        /* Your brand color */
    --secondary: #64748b;      /* Secondary text */
    --accent: #f59e0b;         /* Accent/CTA color */
    --gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

## 📱 Additional Features

### Dark Mode
Uncomment the dark mode functions in `script.js` and add corresponding CSS.

### Analytics
Add Google Analytics or similar:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
```

### SEO Enhancements
- Update meta descriptions
- Add structured data
- Create a sitemap.xml
- Add robots.txt

## 🔧 File Structure

```
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── README.md           # This file
└── assets/            # (Create this folder)
    ├── images/        # Your photos and project images
    └── resume.pdf     # Your resume (optional)
```

## 🚀 Performance Tips

1. **Optimize Images**: Use WebP format and compress images
2. **Add Loading**: Implement lazy loading for images
3. **Minify Files**: Minify CSS and JavaScript for production
4. **CDN**: Consider using a CDN for faster loading

## ✨ Easter Eggs

The site includes some fun features:
- Konami code easter egg (↑↑↓↓←→←→BA)
- Smooth parallax scrolling
- Interactive skill tags
- Typewriter effect animation

## 🤝 Contributing

Feel free to fork this repository and customize it for your own use! If you make improvements, consider sharing them back with the community.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Made with ❤️ by Das** | Customize it and make it your own! 🚀
