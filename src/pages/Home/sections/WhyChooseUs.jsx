import { motion } from 'framer-motion';
import { FaClock, FaCalendarCheck, FaCertificate, FaDollarSign, FaMapMarkedAlt } from 'react-icons/fa';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaClock />,
      title: '24/7 Emergency Response',
      description: 'Plumbing emergencies don\'t wait. Neither do we. Available around the clock for urgent repairs.'
    },
    {
      icon: <FaCalendarCheck />,
      title: 'Same-Day Service Available',
      description: 'Need help fast? We offer same-day service to get your plumbing issues resolved quickly.'
    },
    {
      icon: <FaCertificate />,
      title: 'Licensed & Insured',
      description: 'Fully licensed, insured, and certified professionals you can trust with your home.'
    },
    {
      icon: <FaDollarSign />,
      title: 'Transparent Pricing',
      description: 'No hidden fees or surprises. Upfront, honest pricing for all our services.'
    },
    {
      icon: <FaMapMarkedAlt />,
      title: 'Serving Edmonton & Area',
      description: 'Proudly serving Edmonton, Sherwood Park, St. Albert, Spruce Grove, Leduc, and Beaumont.'
    }
  ];

  return (
    <section className="why-choose-us section bg-white">
      <div className="container">
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Why Choose EZ Plumbing Inc?</h2>
          <p className="section-description">
            Experience the difference of working with Edmonton's trusted plumbing experts
          </p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

