import { FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './MobileCallButton.css';

const MobileCallButton = () => {
  return (
    <motion.a
      href="tel:780-800-1001"
      className="mobile-call-button no-print"
      aria-label="Call us now at 780-800-1001"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <FaPhone className="call-icon" />
      <span className="call-text">Call Now</span>
    </motion.a>
  );
};

export default MobileCallButton;

