import { motion } from 'framer-motion';
import { FaTools, FaPhone, FaClock, FaCheckCircle } from 'react-icons/fa';
import './ServicePage.css';

const EmergencyPlumbing = () => {
  const benefits = [
    '24/7 Emergency Response',
    'Fast Arrival Times',
    'Experienced Technicians',
    'Fully Equipped Vehicles',
    'Upfront Pricing',
    'Licensed & Insured'
  ];

  const commonIssues = [
    'Burst Pipes',
    'Severe Leaks',
    'Frozen Pipes',
    'Sewer Backups',
    'No Hot Water',
    'Gas Leaks'
  ];

  return (
    <div className="service-page">
      {/* Hero */}
      <section className="service-hero">
        <div className="service-hero-overlay"></div>
        <div className="container">
          <motion.div
            className="service-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="service-hero-icon">
              <FaTools />
            </div>
            <h1>24/7 Emergency Plumbing Repairs</h1>
            <p>Fast, reliable emergency plumbing services when you need them most</p>
            <a href="tel:780-800-1001" className="btn btn-primary btn-large">
              <FaPhone /> Emergency Call: 780-800-1001
            </a>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="service-content section bg-white">
        <div className="container">
          <div className="service-layout">
            <motion.div
              className="service-main"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Emergency Plumbing Services in Edmonton</h2>
              <p>
                Plumbing emergencies don't wait for business hours. That's why EZ Plumbing Inc offers 24/7 emergency plumbing services throughout Edmonton and surrounding areas. Whether it's a burst pipe flooding your basement at 2 AM or a severe leak threatening your property, our experienced technicians are ready to respond quickly.
              </p>
              <p>
                With over 15 years of experience handling emergency plumbing situations, we understand the urgency and stress these situations create. Our team arrives fully equipped with the tools and parts needed to resolve most emergencies on the first visit, minimizing damage to your property and getting your plumbing system back to normal as quickly as possible.
              </p>

              <h3>Common Emergency Plumbing Issues We Handle</h3>
              <div className="issues-grid">
                {commonIssues.map((issue, index) => (
                  <motion.div
                    key={issue}
                    className="issue-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <FaCheckCircle className="issue-icon" />
                    <span>{issue}</span>
                  </motion.div>
                ))}
              </div>

              <h3>Our Emergency Response Process</h3>
              <div className="process-steps">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Call Us Immediately</h4>
                    <p>Contact us 24/7 at 780-800-1001. Our emergency line is always answered by a real person.</p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Fast Dispatch</h4>
                    <p>We dispatch the nearest available technician to your location right away.</p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Quick Assessment</h4>
                    <p>Our technician assesses the situation and provides upfront pricing before starting work.</p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h4>Expert Repair</h4>
                    <p>We fix the problem efficiently using professional-grade tools and quality parts.</p>
                  </div>
                </div>
              </div>

              <h3>Why Choose EZ Plumbing for Emergencies?</h3>
              <p>
                When you're facing a plumbing emergency, you need a company you can trust to respond quickly and fix the problem right. Our emergency plumbing services are backed by:
              </p>
              <ul className="benefits-list">
                {benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </motion.div>

            <motion.aside
              className="service-sidebar"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="sidebar-card sidebar-cta">
                <FaClock className="sidebar-icon" />
                <h3>Need Emergency Service?</h3>
                <p>We're available 24/7 for all your plumbing emergencies</p>
                <a href="tel:780-800-1001" className="btn btn-primary btn-large">
                  Call Now: 780-800-1001
                </a>
              </div>

              <div className="sidebar-card">
                <h3>Service Areas</h3>
                <ul className="sidebar-list">
                  <li>Edmonton</li>
                  <li>Sherwood Park</li>
                  <li>St. Albert</li>
                  <li>Spruce Grove</li>
                  <li>Leduc</li>
                  <li>Beaumont</li>
                </ul>
              </div>

              <div className="sidebar-card">
                <h3>Other Services</h3>
                <ul className="sidebar-list">
                  <li><a href="/services/drain-cleaning">Drain Cleaning</a></li>
                  <li><a href="/services/hot-water-systems">Hot Water Systems</a></li>
                  <li><a href="/services/furnace-installation">Furnace Installation</a></li>
                  <li><a href="/services/specialty-installations">Specialty Installations</a></li>
                  <li><a href="/services/general-services">General Services</a></li>
                </ul>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmergencyPlumbing;

