# Deployment Guide - EZ Plumbing Inc Website

This guide covers various deployment options for the EZ Plumbing Inc website.

## 📦 Build for Production

Before deploying, create a production build:

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

Vercel offers free hosting with automatic deployments and excellent performance.

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts**
   - Link to your Vercel account
   - Configure project settings
   - Deploy!

**Automatic Deployments:**
- Connect your GitHub repository to Vercel
- Every push to main branch automatically deploys
- Preview deployments for pull requests

**Custom Domain:**
- Add your custom domain in Vercel dashboard
- Update DNS records as instructed
- SSL certificate is automatically provisioned

### Option 2: Netlify

Netlify is another excellent free hosting option.

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build and Deploy**
   ```bash
   npm run build
   netlify deploy --prod
   ```

3. **Or use Netlify Drop**
   - Go to https://app.netlify.com/drop
   - Drag and drop your `dist` folder
   - Instant deployment!

**Configuration:**
Create `netlify.toml` in project root:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Option 3: GitHub Pages

Free hosting directly from your GitHub repository.

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   Add to scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Update vite.config.js**
   ```javascript
   export default defineConfig({
     base: '/ez-plumbing-inc/',
     // ... rest of config
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to repository Settings > Pages
   - Select `gh-pages` branch
   - Save

### Option 4: Traditional Web Hosting (cPanel, etc.)

For traditional shared hosting:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload files**
   - Upload contents of `dist/` folder to your web server
   - Typically to `public_html` or `www` directory

3. **Configure .htaccess** (for Apache servers)
   Create `.htaccess` in the root:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

### Option 5: AWS S3 + CloudFront

For enterprise-grade hosting:

1. **Create S3 Bucket**
   - Enable static website hosting
   - Upload `dist/` contents

2. **Configure CloudFront**
   - Create distribution pointing to S3 bucket
   - Configure custom error pages (404 → index.html)
   - Add custom domain and SSL certificate

3. **Deploy with AWS CLI**
   ```bash
   aws s3 sync dist/ s3://your-bucket-name --delete
   aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
   ```

## 🔧 Environment Variables

If you need environment variables:

1. **Create `.env` file** (for local development)
   ```
   VITE_API_URL=https://api.example.com
   VITE_GOOGLE_MAPS_KEY=your_key_here
   ```

2. **Access in code**
   ```javascript
   const apiUrl = import.meta.env.VITE_API_URL;
   ```

3. **Configure in hosting platform**
   - Vercel: Project Settings > Environment Variables
   - Netlify: Site Settings > Build & Deploy > Environment
   - GitHub Pages: Use GitHub Secrets

## 📊 Performance Optimization

### Before Deployment Checklist

- [ ] Run production build: `npm run build`
- [ ] Test production build locally: `npm run preview`
- [ ] Check bundle size: Review build output
- [ ] Test on mobile devices
- [ ] Verify all links work
- [ ] Test contact form
- [ ] Check SEO meta tags
- [ ] Verify Google Maps integration
- [ ] Test all service pages
- [ ] Check blog posts load correctly

### Post-Deployment

1. **Test Performance**
   - Run Google Lighthouse audit
   - Check PageSpeed Insights
   - Verify mobile performance

2. **SEO Setup**
   - Submit sitemap to Google Search Console
   - Verify Schema.org markup with Google's Rich Results Test
   - Set up Google Analytics (if needed)
   - Configure Google My Business

3. **Monitoring**
   - Set up uptime monitoring
   - Configure error tracking (e.g., Sentry)
   - Monitor Core Web Vitals

## 🔒 Security

### HTTPS
All modern hosting platforms provide free SSL certificates. Ensure HTTPS is enabled.

### Security Headers
Add security headers in your hosting configuration:

**Netlify** (`netlify.toml`):
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

**Vercel** (`vercel.json`):
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

## 🌐 Custom Domain Setup

1. **Purchase domain** (if not already owned)
   - Recommended: Namecheap, Google Domains, Cloudflare

2. **Configure DNS**
   - Add A record or CNAME pointing to hosting provider
   - Wait for DNS propagation (up to 48 hours)

3. **Configure in hosting platform**
   - Add custom domain in platform settings
   - Verify domain ownership
   - SSL certificate auto-provisioned

## 📱 Progressive Web App (PWA) - Optional

To make the site installable as a PWA:

1. **Install Vite PWA plugin**
   ```bash
   npm install -D vite-plugin-pwa
   ```

2. **Configure in vite.config.js**
   ```javascript
   import { VitePWA } from 'vite-plugin-pwa'
   
   export default defineConfig({
     plugins: [
       react(),
       VitePWA({
         registerType: 'autoUpdate',
         manifest: {
           name: 'EZ Plumbing Inc',
           short_name: 'EZ Plumbing',
           description: '24/7 Emergency Plumbing & Heating Services',
           theme_color: '#001F3F',
           icons: [
             {
               src: '/icon-192.png',
               sizes: '192x192',
               type: 'image/png'
             },
             {
               src: '/icon-512.png',
               sizes: '512x512',
               type: 'image/png'
             }
           ]
         }
       })
     ]
   })
   ```

## 🆘 Troubleshooting

### Routes not working (404 errors)
- Ensure server is configured for SPA routing
- Check `.htaccess` or hosting platform redirects

### Slow loading
- Check bundle size: `npm run build`
- Optimize images
- Enable compression on server

### Styles not loading
- Clear browser cache
- Check build output for CSS files
- Verify base URL in vite.config.js

## 📞 Support

For deployment assistance, contact your web development team or hosting provider support.

---

**Ready to deploy? Choose your preferred option above and follow the steps!**

