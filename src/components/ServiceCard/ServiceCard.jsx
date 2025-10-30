import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import './ServiceCard.css';

const ServiceCard = ({ icon, title, description, link, delay = 0 }) => {
  return (
    <motion.div
      className="service-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
    >
      <div className="service-card-icon">{icon}</div>
      <h3 className="service-card-title">{title}</h3>
      <p className="service-card-description">{description}</p>
      <Link to={link} className="service-card-link">
        Learn More <FaArrowRight />
      </Link>
    </motion.div>
  );
};

export default ServiceCard;

