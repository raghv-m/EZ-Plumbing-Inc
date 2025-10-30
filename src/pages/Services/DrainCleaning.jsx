import { motion } from 'framer-motion';
import { FaSink, FaPhone, FaCheckCircle } from 'react-icons/fa';
import './ServicePage.css';

const DrainCleaning = () => {
  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="service-hero-overlay"></div>
        <div className="container">
          <motion.div className="service-hero-content" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="service-hero-icon"><FaSink /></div>
            <h1>Professional Drain Cleaning Services</h1>
            <p>Fast, effective drain cleaning to keep your plumbing flowing smoothly</p>
            <a href="tel:780-800-1001" className="btn btn-primary btn-large"><FaPhone /> Call: 780-800-1001</a>
          </motion.div>
        </div>
      </section>

      <section className="service-content section bg-white">
        <div className="container">
          <div className="service-layout">
            <div className="service-main">
              <h2>Expert Drain Cleaning in Edmonton</h2>
              <p>Clogged drains are more than just an inconvenience—they can lead to serious plumbing problems if left untreated. At EZ Plumbing Inc, we use advanced equipment and proven techniques to clear even the toughest clogs quickly and effectively.</p>
              <p>Our professional drain cleaning services remove food buildup, grease, hair, soap scum, and other debris that can cause slow drains and blockages. We serve residential and commercial properties throughout Edmonton and surrounding areas.</p>

              <h3>Common Drain Problems We Solve</h3>
              <div className="issues-grid">
                {['Slow Draining Sinks', 'Clogged Toilets', 'Shower Backups', 'Kitchen Drain Clogs', 'Main Line Blockages', 'Recurring Clogs'].map((issue, i) => (
                  <motion.div key={issue} className="issue-item" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                    <FaCheckCircle className="issue-icon" /><span>{issue}</span>
                  </motion.div>
                ))}
              </div>

              <h3>Our Drain Cleaning Process</h3>
              <p>We use state-of-the-art equipment including video camera inspections, hydro-jetting, and professional-grade snakes to diagnose and clear drain blockages. Our technicians are trained to handle all types of drain issues, from simple clogs to complex main line problems.</p>
              
              <h3>Preventive Maintenance</h3>
              <p>Regular drain cleaning can prevent costly emergency repairs. We offer maintenance plans to keep your drains flowing freely year-round. Ask about our preventive maintenance services to avoid future clogs and extend the life of your plumbing system.</p>
            </div>

            <aside className="service-sidebar">
              <div className="sidebar-card sidebar-cta">
                <h3>Need Drain Cleaning?</h3>
                <p>Same-day service available</p>
                <a href="tel:780-800-1001" className="btn btn-primary btn-large">Call: 780-800-1001</a>
              </div>
              <div className="sidebar-card">
                <h3>Service Areas</h3>
                <ul className="sidebar-list">
                  {['Edmonton', 'Sherwood Park', 'St. Albert', 'Spruce Grove', 'Leduc', 'Beaumont'].map(area => <li key={area}>{area}</li>)}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DrainCleaning;

