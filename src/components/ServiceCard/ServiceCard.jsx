import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import './ServiceCard.css';

const ServiceCard = ({ icon, title, description, link, delay = 0 }) => {
  return (
    <motion.article
      className="service-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      role="article"
      aria-label={`${title} service`}
    >
      <div className="service-card-icon" aria-hidden="true">{icon}</div>
      <h3 className="service-card-title">{title}</h3>
      <p className="service-card-description">{description}</p>
      <Link
        to={link}
        className="service-card-link"
        aria-label={`Learn more about ${title}`}
      >
        Learn More <FaArrowRight aria-hidden="true" />
      </Link>
    </motion.article>
  );
};

export default ServiceCard;

