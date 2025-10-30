# Developer Guide - EZ Plumbing Inc Website

This guide is for developers who need to maintain, update, or extend the EZ Plumbing Inc website.

## 🏗️ Architecture Overview

### Tech Stack
- **React 18.3** - Component-based UI library
- **Vite 5.4** - Fast build tool and dev server
- **React Router 7.1** - Client-side routing
- **Framer Motion 11.15** - Animation library
- **React Icons 5.4** - Icon components

### Project Structure Philosophy
- **Component-based**: Reusable UI components in `/components`
- **Page-based routing**: Each page in `/pages` with its own styles
- **Co-located styles**: CSS files next to their components
- **Lazy loading**: Routes loaded on-demand for performance

## 🔧 Common Development Tasks

### Adding a New Page

1. **Create page component**
   ```bash
   # Create folder and files
   mkdir src/pages/NewPage
   touch src/pages/NewPage/NewPage.jsx
   touch src/pages/NewPage/NewPage.css
   ```

2. **Create component** (`NewPage.jsx`)
   ```jsx
   import { motion } from 'framer-motion';
   import './NewPage.css';

   const NewPage = () => {
     return (
       <div className="new-page">
         <section className="hero">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
           >
             <h1>New Page Title</h1>
           </motion.div>
         </section>
       </div>
     );
   };

   export default NewPage;
   ```

3. **Add route** in `src/App.jsx`
   ```jsx
   const NewPage = lazy(() => import('./pages/NewPage/NewPage'));
   
   // In routes:
   <Route path="/new-page" element={<NewPage />} />
   ```

4. **Add navigation link** in `Header.jsx`
   ```jsx
   <Link to="/new-page">New Page</Link>
   ```

### Adding a New Service

1. **Create service page** in `src/pages/Services/`
   ```jsx
   import { motion } from 'framer-motion';
   import { FaIcon, FaPhone } from 'react-icons/fa';
   import './ServicePage.css';

   const NewService = () => {
     return (
       <div className="service-page">
         {/* Use existing ServicePage.css styles */}
       </div>
     );
   };

   export default NewService;
   ```

2. **Add to Services overview** (`Services.jsx`)
   ```jsx
   const services = [
     // ... existing services
     {
       icon: <FaIcon />,
       title: 'New Service',
       description: 'Service description...',
       features: ['Feature 1', 'Feature 2'],
       link: '/services/new-service'
     }
   ];
   ```

3. **Add route** in `App.jsx`
   ```jsx
   const NewService = lazy(() => import('./pages/Services/NewService'));
   <Route path="/services/new-service" element={<NewService />} />
   ```

### Adding a Blog Post

Blog posts are currently hardcoded. To add a new post:

1. **Add to blog list** in `src/pages/Blog/Blog.jsx`
   ```jsx
   const blogPosts = [
     // ... existing posts
     {
       slug: 'new-blog-post',
       title: 'New Blog Post Title',
       excerpt: 'Post excerpt...',
       image: 'image-name',
       date: 'January 20, 2025',
       readTime: '5 min read',
       category: 'Category'
     }
   ];
   ```

2. **Update BlogPost component** to handle new slug
   - Currently uses sample data
   - For production, connect to a CMS or API

### Updating Company Information

**Contact Details:**
- `src/components/Header/Header.jsx` - Phone in header
- `src/components/Footer/Footer.jsx` - All footer info
- `src/pages/Contact/Contact.jsx` - Contact page details
- `index.html` - Schema.org markup

**Service Areas:**
- `src/pages/Home/Home.jsx` - Homepage service areas
- `src/pages/Contact/Contact.jsx` - Contact page areas
- `src/components/Footer/Footer.jsx` - Footer areas

### Customizing Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  /* Primary Colors */
  --navy-blue: #001F3F;
  --teal: #007BFF;
  --light-blue: #4DD0E1;
  
  /* Neutral Colors */
  --white: #FFFFFF;
  --light-gray: #F5F5F5;
  --border-gray: #E0E0E0;
  --medium-gray: #666666;
  --dark-gray: #333333;
  
  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;
  --spacing-3xl: 4rem;
  
  /* Other variables... */
}
```

### Adding Animations

Use Framer Motion for animations:

```jsx
import { motion } from 'framer-motion';

// Fade in on mount
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>

// Fade in on scroll
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>

// Hover effect
<motion.div
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.2 }}
>
  Content
</motion.div>
```

## 🎨 Styling Guidelines

### CSS Organization
- Use CSS modules or scoped styles per component
- Follow BEM-like naming: `.component-name__element--modifier`
- Use CSS variables for consistency
- Mobile-first responsive design

### Responsive Breakpoints
```css
/* Mobile: default styles */

/* Tablet: 768px and up */
@media (min-width: 768px) { }

/* Desktop: 992px and up */
@media (min-width: 992px) { }

/* Large Desktop: 1200px and up */
@media (min-width: 1200px) { }
```

### Common Patterns

**Section Spacing:**
```css
.section {
  padding: var(--spacing-3xl) 0;
}
```

**Container:**
```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}
```

**Button Styles:**
```css
.btn {
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: var(--radius-md);
  font-weight: 600;
  transition: all var(--transition-normal);
}
```

## 🧪 Testing

### Manual Testing Checklist
- [ ] Test all navigation links
- [ ] Verify mobile menu works
- [ ] Test contact form submission
- [ ] Check all service pages load
- [ ] Verify blog posts display correctly
- [ ] Test on mobile devices
- [ ] Check tablet layout
- [ ] Verify desktop layout
- [ ] Test all CTAs (Call buttons, forms)
- [ ] Check footer links

### Browser Testing
Test in:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

### Performance Testing
```bash
# Build and preview
npm run build
npm run preview

# Check bundle size
npm run build
# Review output in terminal
```

Use Lighthouse in Chrome DevTools:
1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Run audit for Performance, Accessibility, SEO

## 🐛 Debugging

### Common Issues

**Routes not working:**
- Check route definition in `App.jsx`
- Verify component import path
- Ensure lazy loading syntax is correct

**Styles not applying:**
- Check CSS import in component
- Verify class names match
- Check CSS specificity
- Clear browser cache

**Animations not working:**
- Verify Framer Motion import
- Check initial/animate props
- Ensure viewport prop for scroll animations

**Build errors:**
- Check for missing imports
- Verify all files are saved
- Run `npm install` to ensure dependencies
- Clear node_modules and reinstall if needed

### Development Tools

**React DevTools:**
- Install browser extension
- Inspect component tree
- Check props and state

**Vite DevTools:**
- Check terminal for errors
- Hot reload should work automatically
- Check network tab for failed requests

## 📦 Dependencies Management

### Updating Dependencies

```bash
# Check for updates
npm outdated

# Update all dependencies
npm update

# Update specific package
npm update package-name

# Update to latest (including major versions)
npm install package-name@latest
```

### Adding New Dependencies

```bash
# Production dependency
npm install package-name

# Development dependency
npm install --save-dev package-name
```

## 🚀 Build & Deploy

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Analyze Bundle Size
```bash
npm run build
# Check dist/ folder size
# Review build output in terminal
```

## 📝 Code Style

### JavaScript/React
- Use functional components with hooks
- Use arrow functions for components
- Destructure props
- Use meaningful variable names
- Add comments for complex logic

### CSS
- Use CSS variables for colors and spacing
- Mobile-first approach
- Avoid !important
- Use semantic class names
- Group related properties

### File Naming
- Components: PascalCase (e.g., `Header.jsx`)
- Styles: PascalCase (e.g., `Header.css`)
- Utilities: camelCase (e.g., `formatDate.js`)

## 🔐 Security Best Practices

- Never commit API keys or secrets
- Use environment variables for sensitive data
- Sanitize user inputs in forms
- Keep dependencies updated
- Use HTTPS in production
- Implement CSP headers

## 📞 Getting Help

- Check this guide first
- Review React documentation: https://react.dev
- Check Vite docs: https://vitejs.dev
- Framer Motion docs: https://www.framer.com/motion
- React Router docs: https://reactrouter.com

---

**Happy coding! 🚀**

