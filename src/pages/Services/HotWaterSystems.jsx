import { motion } from 'framer-motion';
import { FaFire, FaPhone } from 'react-icons/fa';
import './ServicePage.css';

const HotWaterSystems = () => {
  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="service-hero-overlay"></div>
        <div className="container">
          <motion.div className="service-hero-content" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="service-hero-icon"><FaFire /></div>
            <h1>Hot Water System Services</h1>
            <p>Expert water heater repair, maintenance, and installation</p>
            <a href="tel:780-800-1001" className="btn btn-primary btn-large"><FaPhone /> Call: 780-800-1001</a>
          </motion.div>
        </div>
      </section>
      <section className="service-content section bg-white">
        <div className="container">
          <div className="service-layout">
            <div className="service-main">
              <h2>Water Heater Services in Edmonton</h2>
              <p>Don't let a faulty water heater disrupt your daily routine. EZ Plumbing Inc provides comprehensive water heater services including repair, maintenance, and installation of all types and brands of water heating systems.</p>
              <h3>Our Water Heater Services</h3>
              <ul className="benefits-list">
                {['Water Heater Repair', 'New Installations', 'Tank & Tankless Systems', 'Energy-Efficient Upgrades', 'Maintenance & Inspections', 'Emergency Repairs'].map(b => <li key={b}>{b}</li>)}
              </ul>
              <p>Whether you need a quick repair or a complete water heater replacement, our experienced technicians can help. We work with all major brands and can recommend the best solution for your home and budget.</p>
            </div>
            <aside className="service-sidebar">
              <div className="sidebar-card sidebar-cta">
                <h3>Water Heater Issues?</h3>
                <p>Fast, reliable service</p>
                <a href="tel:780-800-1001" className="btn btn-primary btn-large">Call: 780-800-1001</a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HotWaterSystems;

