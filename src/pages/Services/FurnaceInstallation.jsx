import { motion } from 'framer-motion';
import { FaWrench, FaPhone } from 'react-icons/fa';
import './ServicePage.css';

const FurnaceInstallation = () => {
  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="service-hero-overlay"></div>
        <div className="container">
          <motion.div className="service-hero-content" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="service-hero-icon"><FaWrench /></div>
            <h1>Furnace Installation Services</h1>
            <p>Professional furnace installation for Edmonton homes</p>
            <a href="tel:780-800-1001" className="btn btn-primary btn-large"><FaPhone /> Call: 780-800-1001</a>
          </motion.div>
        </div>
      </section>
      <section className="service-content section bg-white">
        <div className="container">
          <div className="service-layout">
            <div className="service-main">
              <h2>Expert Furnace Installation in Edmonton</h2>
              <p>Stay warm all winter with a professionally installed, energy-efficient furnace from EZ Plumbing Inc. We specialize in furnace installation, replacement, and upgrades for residential properties throughout the Edmonton area.</p>
              <h3>Why Choose Us for Furnace Installation?</h3>
              <ul className="benefits-list">
                {['Energy-Efficient Units', 'Professional Installation', 'Warranty Support', 'Competitive Pricing', 'Expert Recommendations', 'Quality Workmanship'].map(b => <li key={b}>{b}</li>)}
              </ul>
              <p>Our certified technicians will help you choose the right furnace for your home size, budget, and heating needs. We handle everything from removal of your old unit to installation and testing of your new system.</p>
            </div>
            <aside className="service-sidebar">
              <div className="sidebar-card sidebar-cta">
                <h3>Need a New Furnace?</h3>
                <p>Get a free quote today</p>
                <a href="tel:780-800-1001" className="btn btn-primary btn-large">Call: 780-800-1001</a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FurnaceInstallation;

