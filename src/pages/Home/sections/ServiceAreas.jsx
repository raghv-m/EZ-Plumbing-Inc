import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import './ServiceAreas.css';

const ServiceAreas = () => {
  const areas = [
    {
      name: 'Edmonton',
      description: 'Our headquarters and primary service area'
    },
    {
      name: 'Sherwood Park',
      description: 'Fast response times for all plumbing needs'
    },
    {
      name: 'St. Albert',
      description: 'Trusted service for residential and commercial'
    },
    {
      name: 'Spruce Grove',
      description: 'Emergency and scheduled plumbing services'
    },
    {
      name: 'Leduc',
      description: 'Complete plumbing and heating solutions'
    },
    {
      name: 'Beaumont',
      description: 'Professional service you can count on'
    }
  ];

  return (
    <section className="service-areas section bg-white">
      <div className="container">
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Proudly Serving Edmonton & Surrounding Areas</h2>
          <p className="section-description">
            Fast, reliable plumbing and heating services across the greater Edmonton region
          </p>
        </motion.div>

        <div className="service-areas-content">
          <motion.div
            className="service-areas-map"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="map-placeholder">
              <FaMapMarkerAlt className="map-icon" />
              <h3>Edmonton & Area</h3>
              <p className="map-address">
                <strong>Headquarters:</strong><br />
                5908 177 St NW<br />
                Edmonton, AB T6M 1H8
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=5908+177+St+NW+Edmonton+AB+T6M+1H8"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Get Directions
              </a>
            </div>
          </motion.div>

          <motion.div
            className="service-areas-list"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {areas.map((area, index) => (
              <motion.div
                key={area.name}
                className="area-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <FaCheckCircle className="area-icon" />
                <div className="area-content">
                  <h4 className="area-name">{area.name}</h4>
                  <p className="area-description">{area.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;

