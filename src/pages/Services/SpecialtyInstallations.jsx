import { motion } from 'framer-motion';
import { FaCog, FaPhone } from 'react-icons/fa';
import './ServicePage.css';

const SpecialtyInstallations = () => {
  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="service-hero-overlay"></div>
        <div className="container">
          <motion.div className="service-hero-content" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="service-hero-icon"><FaCog /></div>
            <h1>Specialty Installation Services</h1>
            <p>Expert gas fitting, BBQ hookups, and custom plumbing installations</p>
            <a href="tel:780-800-1001" className="btn btn-primary btn-large"><FaPhone /> Call: 780-800-1001</a>
          </motion.div>
        </div>
      </section>
      <section className="service-content section bg-white">
        <div className="container">
          <div className="service-layout">
            <div className="service-main">
              <h2>Specialized Plumbing Installations</h2>
              <p>EZ Plumbing Inc offers specialized installation services for unique plumbing needs. From BBQ gas hookups to complete kitchen and bathroom repiping, our experienced technicians handle complex installations with precision and care.</p>
              <h3>Our Specialty Services Include</h3>
              <ul className="benefits-list">
                {['BBQ Gas Line Hookups', 'Gas Fitting & Installation', 'Kitchen Repiping', 'Bathroom Repiping', 'Appliance Installations', 'Custom Plumbing Solutions'].map(b => <li key={b}>{b}</li>)}
              </ul>
              <p>All specialty installations are performed in compliance with local codes and safety regulations. We ensure every installation is done right the first time, with attention to detail and quality craftsmanship.</p>
            </div>
            <aside className="service-sidebar">
              <div className="sidebar-card sidebar-cta">
                <h3>Specialty Installation?</h3>
                <p>We can help!</p>
                <a href="tel:780-800-1001" className="btn btn-primary btn-large">Call: 780-800-1001</a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpecialtyInstallations;

