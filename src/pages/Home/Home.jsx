import Hero from './sections/Hero';
import ServicesOverview from './sections/ServicesOverview';
import WhyChooseUs from './sections/WhyChooseUs';
import ServiceAreas from './sections/ServiceAreas';
import Testimonials from './sections/Testimonials';
import ContactSection from './sections/ContactSection';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <Testimonials />
      <ServiceAreas />
      <ContactSection />
    </div>
  );
};

export default Home;

