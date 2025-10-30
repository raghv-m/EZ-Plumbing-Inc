import { motion } from 'framer-motion';
import './TrustBadge.css';

const TrustBadge = ({ icon, text, delay = 0 }) => {
  return (
    <motion.div
      className="trust-badge"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      <div className="trust-badge-icon">{icon}</div>
      <span className="trust-badge-text">{text}</span>
    </motion.div>
  );
};

export default TrustBadge;

