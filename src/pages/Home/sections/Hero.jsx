import { motion } from 'framer-motion';
import { FaPhone, FaFileAlt, FaClock, FaAward, FaCheckCircle } from 'react-icons/fa';
import TrustBadge from '../../../components/TrustBadge/TrustBadge';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              24/7 Emergency Plumbing in Edmonton – Fast, Reliable Repairs
            </motion.h1>
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Trusted by Edmonton homeowners since 2010
            </motion.p>
            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a href="tel:780-800-1001" className="btn btn-primary btn-large hero-btn">
                <FaPhone /> Call Now: 780-800-1001
              </a>
              <a href="#contact" className="btn btn-secondary btn-large hero-btn">
                <FaFileAlt /> Get Free Quote
              </a>
            </motion.div>
            <motion.div
              className="hero-trust-badges"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <TrustBadge icon={<FaAward />} text="15+ Years Experience" delay={0.1} />
              <TrustBadge icon={<FaCheckCircle />} text="100% Satisfaction" delay={0.2} />
              <TrustBadge icon={<FaClock />} text="24/7 Availability" delay={0.3} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

