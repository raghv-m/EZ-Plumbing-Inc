import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import MobileCallButton from './components/MobileCallButton/MobileCallButton';
import Loading from './components/Loading/Loading';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));
const Services = lazy(() => import('./pages/Services/Services'));
const EmergencyPlumbing = lazy(() => import('./pages/Services/EmergencyPlumbing'));
const DrainCleaning = lazy(() => import('./pages/Services/DrainCleaning'));
const HotWaterSystems = lazy(() => import('./pages/Services/HotWaterSystems'));
const FurnaceInstallation = lazy(() => import('./pages/Services/FurnaceInstallation'));
const SpecialtyInstallations = lazy(() => import('./pages/Services/SpecialtyInstallations'));
const GeneralServices = lazy(() => import('./pages/Services/GeneralServices'));
const Blog = lazy(() => import('./pages/Blog/Blog'));
const BlogPost = lazy(() => import('./pages/Blog/BlogPost'));
const Contact = lazy(() => import('./pages/Contact/Contact'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Header />
        <main id="main-content">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/emergency-plumbing" element={<EmergencyPlumbing />} />
              <Route path="/services/drain-cleaning" element={<DrainCleaning />} />
              <Route path="/services/hot-water-systems" element={<HotWaterSystems />} />
              <Route path="/services/furnace-installation" element={<FurnaceInstallation />} />
              <Route path="/services/specialty-installations" element={<SpecialtyInstallations />} />
              <Route path="/services/general-services" element={<GeneralServices />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <MobileCallButton />
      </div>
    </Router>
  );
}

export default App;

