# 🚀 Quick Deployment Guide

Your EZ Plumbing Inc website is ready to deploy! Choose one of these super-easy deployment options:

---

## ⚡ Option 1: Vercel (RECOMMENDED - Easiest & Free)

### One-Click Deploy

1. **Push to GitHub** (if not already done):
   ```bash
   # Create a new repository on GitHub first, then:
   git remote add origin https://github.com/YOUR_USERNAME/ez-plumbing-inc.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Click "Deploy" (Vercel auto-detects Vite!)
   - Done! Your site is live in ~2 minutes

### Or use Vercel CLI:
```bash
npm install -g vercel
vercel
```
Follow the prompts and you're done!

**✅ Automatic Features:**
- Free SSL certificate
- Automatic deployments on git push
- Global CDN
- Preview deployments for branches
- Custom domain support

---

## 🌐 Option 2: Netlify (Also Free & Easy)

### Drag & Drop Deploy (Fastest!)

1. **Build the site**:
   ```bash
   npm run build
   ```

2. **Deploy**:
   - Go to [app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag and drop the `dist` folder
   - Done! Instant deployment

### Or use Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Or connect to GitHub:
- Go to [netlify.com](https://netlify.com)
- Click "Add new site" → "Import from Git"
- Select your repository
- Click "Deploy" (auto-configured with netlify.toml!)

**✅ Automatic Features:**
- Free SSL certificate
- Continuous deployment
- Form handling (for contact form!)
- Custom domain support

---

## 📦 Option 3: GitHub Pages (Free)

1. **Update package.json** - Add these scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

2. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Update vite.config.js** - Add base URL:
   ```javascript
   export default defineConfig({
     base: '/ez-plumbing-inc/',
     plugins: [react()],
   })
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**:
   - Go to your repo Settings → Pages
   - Select `gh-pages` branch
   - Save

Your site will be live at: `https://YOUR_USERNAME.github.io/ez-plumbing-inc/`

---

## 🔧 Pre-Deployment Checklist

Before deploying, make sure:

- [ ] All content is finalized
- [ ] Contact information is correct
- [ ] Phone numbers are accurate
- [ ] Email addresses work
- [ ] Service areas are correct
- [ ] Test the site locally: `npm run build && npm run preview`
- [ ] All links work
- [ ] Images are optimized (if you added any)

---

## 🌟 After Deployment

### 1. Set Up Custom Domain (Optional)

**Vercel:**
- Go to Project Settings → Domains
- Add your domain (e.g., ezplumbinginc.com)
- Update DNS records as shown
- SSL auto-configured!

**Netlify:**
- Go to Site Settings → Domain Management
- Add custom domain
- Update DNS records
- SSL auto-configured!

### 2. Configure Contact Form

The contact form currently only validates on the frontend. To make it functional:

**Option A: Use Netlify Forms** (if deployed on Netlify)
- Add `netlify` attribute to form in `ContactForm.jsx`:
  ```jsx
  <form name="contact" method="POST" data-netlify="true">
  ```
- Netlify automatically handles form submissions!

**Option B: Use Formspree**
- Sign up at [formspree.io](https://formspree.io)
- Get your form endpoint
- Update form action in `ContactForm.jsx`

**Option C: Use EmailJS**
- Sign up at [emailjs.com](https://emailjs.com)
- Install: `npm install @emailjs/browser`
- Configure in `ContactForm.jsx`

### 3. Add Google Maps API Key

Update the Google Maps iframe in `src/pages/Contact/Contact.jsx` with a real API key:
- Get API key from [Google Cloud Console](https://console.cloud.google.com)
- Enable Maps JavaScript API
- Replace the iframe src with proper embed URL

### 4. Set Up Analytics (Optional)

**Google Analytics:**
- Create GA4 property
- Add tracking code to `index.html`

**Vercel Analytics:**
- Enable in Vercel dashboard (free!)

### 5. SEO Setup

- Submit sitemap to Google Search Console
- Verify site ownership
- Test rich results with Google's Rich Results Test
- Set up Google My Business

---

## 📊 Monitoring Your Site

### Check Performance
```bash
# Build and check size
npm run build

# Preview production build
npm run preview
```

### Run Lighthouse Audit
1. Open site in Chrome
2. Press F12 (DevTools)
3. Go to Lighthouse tab
4. Run audit

**Target Scores:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

---

## 🆘 Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Routes Don't Work (404 errors)
- Vercel: Already configured in `vercel.json` ✅
- Netlify: Already configured in `netlify.toml` ✅
- Other hosts: Add redirect rules for SPA

### Site Loads Slowly
- Check bundle size: `npm run build`
- Optimize images
- Enable compression on server
- Use CDN (Vercel/Netlify include this)

---

## 🎉 You're Ready!

Your site is configured for easy deployment. Just choose your platform and follow the steps above!

**Recommended for beginners:** Vercel or Netlify drag-and-drop

**Questions?** Check the full DEPLOYMENT.md guide for more details.

---

**Need help?** All configuration files are already set up:
- ✅ `.gitignore` - Excludes node_modules
- ✅ `vercel.json` - Vercel configuration
- ✅ `netlify.toml` - Netlify configuration
- ✅ Git repository initialized
- ✅ Initial commit created

Just push to GitHub and deploy! 🚀

