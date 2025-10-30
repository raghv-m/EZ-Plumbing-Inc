# EZ Plumbing Inc - Modern React Website

A complete, production-ready React website for EZ Plumbing Inc, a 24/7 emergency plumbing and heating service company in Edmonton, Alberta. Built with modern web technologies and optimized for performance, SEO, and user experience.

## 🚀 Features

### Design & User Experience
- **Modern, Professional Design** - Clean, sleek interface with water-themed animations
- **Fully Mobile Responsive** - Optimized for all devices with hamburger menu and touch-friendly elements
- **Smooth Animations** - Scroll animations, hover effects, and transitions using Framer Motion
- **Interactive Elements** - Animated counters, testimonial carousel, and service cards
- **Floating Call Button** - Mobile-optimized quick-call button for easy contact

### Technical Features
- **React 18** - Latest React with hooks and modern patterns
- **Vite** - Lightning-fast build tool and development server
- **React Router** - Client-side routing with lazy loading
- **Framer Motion** - Professional animations and transitions
- **SEO Optimized** - Meta tags, Schema.org JSON-LD markup, semantic HTML
- **Performance Optimized** - Code splitting, lazy loading, optimized assets
- **Accessibility** - WCAG 2.1 AA compliant with proper ARIA labels

### Color Palette
- **Navy Blue** (#001F3F) - Headers and primary text
- **Teal** (#007BFF) - CTAs and accents
- **Light Blue** (#4DD0E1) - Highlights and secondary accents
- **White** (#FFFFFF) - Clean backgrounds
- **Light Gray** (#F5F5F5) - Section backgrounds

## 📁 Project Structure

```
ez-plumbing-inc/
├── index.html                 # Main HTML file with SEO meta tags
├── package.json              # Dependencies and scripts
├── vite.config.js           # Vite configuration
├── src/
│   ├── main.jsx             # Application entry point
│   ├── App.jsx              # Main app component with routing
│   ├── index.css            # Global styles and CSS variables
│   ├── components/          # Reusable components
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.css
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   ├── ContactForm/
│   │   │   ├── ContactForm.jsx
│   │   │   └── ContactForm.css
│   │   ├── ServiceCard/
│   │   │   ├── ServiceCard.jsx
│   │   │   └── ServiceCard.css
│   │   ├── TestimonialCard/
│   │   │   ├── TestimonialCard.jsx
│   │   │   └── TestimonialCard.css
│   │   ├── ScrollToTop/
│   │   │   └── ScrollToTop.jsx
│   │   ├── MobileCallButton/
│   │   │   ├── MobileCallButton.jsx
│   │   │   └── MobileCallButton.css
│   │   └── Loading/
│   │       ├── Loading.jsx
│   │       └── Loading.css
│   └── pages/               # Page components
│       ├── Home/
│       │   ├── Home.jsx
│       │   └── Home.css
│       ├── About/
│       │   ├── About.jsx
│       │   └── About.css
│       ├── Services/
│       │   ├── Services.jsx
│       │   ├── Services.css
│       │   ├── ServicePage.css
│       │   ├── EmergencyPlumbing.jsx
│       │   ├── DrainCleaning.jsx
│       │   ├── HotWaterSystems.jsx
│       │   ├── FurnaceInstallation.jsx
│       │   ├── SpecialtyInstallations.jsx
│       │   └── GeneralServices.jsx
│       ├── Blog/
│       │   ├── Blog.jsx
│       │   ├── Blog.css
│       │   ├── BlogPost.jsx
│       │   └── BlogPost.css
│       └── Contact/
│           ├── Contact.jsx
│           └── Contact.css
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 16+ and npm

### Installation Steps

1. **Clone or download the project**
   ```bash
   cd ez-plumbing-inc
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```
   Production files will be in the `dist/` folder

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📄 Pages

### Homepage (`/`)
- Hero section with emergency call-to-action
- Services overview with animated cards
- Why Choose Us section with statistics
- Service areas coverage
- Customer testimonials carousel
- Contact form

### About Us (`/about`)
- Company story and history
- Mission and values
- Team members (Owner: Zaid Hashem, GM: Dave Smith)
- Statistics and achievements
- Call-to-action

### Services (`/services`)
- Overview of all services
- Individual service pages:
  - Emergency Plumbing Repairs
  - Drain Cleaning
  - Hot Water Systems
  - Furnace Installation
  - Specialty Installations
  - General Services

### Blog/Resources (`/blog`)
- Blog post listings
- Individual blog posts with SEO optimization
- Related articles sidebar
- Categories and tags

### Contact (`/contact`)
- Contact form
- Contact information cards
- Google Maps integration
- Service areas list
- Emergency contact CTA

## 🎨 Customization

### Updating Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --navy-blue: #001F3F;
  --teal: #007BFF;
  --light-blue: #4DD0E1;
  /* ... */
}
```

### Updating Company Information
Update contact details in:
- `src/components/Header/Header.jsx`
- `src/components/Footer/Footer.jsx`
- `src/pages/Contact/Contact.jsx`
- `index.html` (Schema.org markup)

### Adding New Services
1. Create a new component in `src/pages/Services/`
2. Add route in `src/App.jsx`
3. Update service list in `src/pages/Services/Services.jsx`

## 🔧 Technologies Used

- **React 18.3** - UI library
- **Vite 5.4** - Build tool
- **React Router 7.1** - Routing
- **Framer Motion 11.15** - Animations
- **React Icons 5.4** - Icon library

## 📱 Mobile Optimization

- Responsive design with mobile-first approach
- Hamburger menu for mobile navigation
- Touch-friendly buttons and links
- Floating call button on mobile devices
- Optimized images and assets
- Fast loading times on mobile networks

## 🔍 SEO Features

- Semantic HTML5 structure
- Meta tags for social sharing (Open Graph, Twitter Cards)
- Schema.org LocalBusiness JSON-LD markup
- Descriptive page titles and meta descriptions
- Proper heading hierarchy
- Alt text for images
- Clean, crawlable URLs

## 🚀 Performance

- Code splitting with React.lazy()
- Lazy loading of route components
- Optimized CSS with minimal specificity
- Efficient animations with Framer Motion
- Fast Vite build process
- Minimal bundle size

## 📞 Company Information

- **Company**: EZ Plumbing Inc
- **Owner**: Zaid Hashem
- **General Manager**: Dave Smith
- **Phone**: 780-800-1001
- **Email**: ezplumbinginc@gmail.com
- **Address**: 5908 177 St NW, Edmonton, AB T6M 1H8
- **Established**: 2010
- **Service**: 24/7 Emergency Plumbing & Heating

### Service Areas
- Edmonton
- Sherwood Park
- St. Albert
- Spruce Grove
- Leduc
- Beaumont

## 📝 License

This project is proprietary and confidential. All rights reserved by EZ Plumbing Inc.

## 🤝 Support

For technical support or questions about the website, please contact the development team.

---

**Built with ❤️ for EZ Plumbing Inc**

