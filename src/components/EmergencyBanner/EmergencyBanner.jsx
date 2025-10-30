import { useState } from 'react';
import { FaExclamationTriangle, FaTimes, FaPhone } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './EmergencyBanner.css';

const EmergencyBanner = ({ message, showByDefault = false }) => {
  const [isVisible, setIsVisible] = useState(showByDefault);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="emergency-banner"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.3 }}
        role="alert"
        aria-live="assertive"
      >
        <div className="container">
          <div className="emergency-banner-content">
            <div className="emergency-banner-icon">
              <FaExclamationTriangle aria-hidden="true" />
            </div>
            <div className="emergency-banner-text">
              <strong>Emergency Alert:</strong> {message || "24/7 Emergency Service Available - We're Here to Help!"}
            </div>
            <a 
              href="tel:780-800-1001" 
              className="emergency-banner-cta"
              aria-label="Call emergency number 780-800-1001"
            >
              <FaPhone aria-hidden="true" /> Call Now
            </a>
            <button
              className="emergency-banner-close"
              onClick={() => setIsVisible(false)}
              aria-label="Close emergency banner"
            >
              <FaTimes aria-hidden="true" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default EmergencyBanner;

