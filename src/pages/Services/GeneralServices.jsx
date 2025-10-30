import { motion } from 'framer-motion';
import { FaHome, FaPhone } from 'react-icons/fa';
import './ServicePage.css';

const GeneralServices = () => {
  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="service-hero-overlay"></div>
        <div className="container">
          <motion.div className="service-hero-content" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="service-hero-icon"><FaHome /></div>
            <h1>General Plumbing Services</h1>
            <p>Complete plumbing solutions for residential and commercial properties</p>
            <a href="tel:780-800-1001" className="btn btn-primary btn-large"><FaPhone /> Call: 780-800-1001</a>
          </motion.div>
        </div>
      </section>
      <section className="service-content section bg-white">
        <div className="container">
          <div className="service-layout">
            <div className="service-main">
              <h2>Comprehensive Plumbing Services</h2>
              <p>From routine maintenance to complex installations, EZ Plumbing Inc provides complete plumbing services for homes and businesses throughout Edmonton. Our experienced team handles all aspects of plumbing and heating work.</p>
              <h3>Our General Services</h3>
              <ul className="benefits-list">
                {['Heating System Repairs', 'Sewer Line Services', 'New Construction Plumbing', 'Commercial Plumbing', 'Plumbing Inspections', 'Preventive Maintenance'].map(b => <li key={b}>{b}</li>)}
              </ul>
              <p>Whether you're building a new home, renovating an existing property, or need ongoing maintenance, we have the expertise and equipment to handle projects of any size. Contact us today to discuss your plumbing needs.</p>
            </div>
            <aside className="service-sidebar">
              <div className="sidebar-card sidebar-cta">
                <h3>Need Plumbing Service?</h3>
                <p>We're here to help</p>
                <a href="tel:780-800-1001" className="btn btn-primary btn-large">Call: 780-800-1001</a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GeneralServices;

