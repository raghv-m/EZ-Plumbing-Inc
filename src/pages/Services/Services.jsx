import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaTools, FaSink, FaFire, FaWrench, FaCog, FaHome, FaArrowRight } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <FaTools />,
      title: 'Emergency Plumbing Repairs',
      description: 'Burst pipes, leaks, and urgent plumbing issues? We provide 24-hour emergency response to get your home back to normal fast. Our experienced technicians are ready to handle any plumbing emergency.',
      features: ['24/7 Availability', 'Fast Response Time', 'Licensed Technicians', 'Emergency Repairs'],
      link: '/services/emergency-plumbing'
    },
    {
      icon: <FaSink />,
      title: 'Drain Cleaning',
      description: 'Professional drain cleaning services to remove clogs, food buildup, and grime. We use advanced equipment to ensure your drains flow smoothly and prevent future blockages.',
      features: ['Advanced Equipment', 'Thorough Cleaning', 'Preventive Maintenance', 'Same-Day Service'],
      link: '/services/drain-cleaning'
    },
    {
      icon: <FaFire />,
      title: 'Hot Water Systems',
      description: 'Expert water heater repair, maintenance, and installation. Whether you need a quick fix or a complete replacement, we ensure you have reliable hot water when you need it.',
      features: ['Repair & Maintenance', 'New Installations', 'Energy-Efficient Options', 'All Brands Serviced'],
      link: '/services/hot-water-systems'
    },
    {
      icon: <FaWrench />,
      title: 'Furnace Installations',
      description: 'Energy-efficient furnace installation and replacement. Stay warm all winter with our professional heating solutions and expert installation services.',
      features: ['Energy-Efficient Units', 'Professional Installation', 'Warranty Support', 'Maintenance Plans'],
      link: '/services/furnace-installation'
    },
    {
      icon: <FaCog />,
      title: 'Specialty Installations',
      description: 'BBQ gas hookups, gas fitting, kitchen and bathroom repiping. We handle specialized installations with precision and care, ensuring safety and compliance.',
      features: ['Gas Line Installation', 'BBQ Hookups', 'Repiping Services', 'Safety Inspections'],
      link: '/services/specialty-installations'
    },
    {
      icon: <FaHome />,
      title: 'General Services',
      description: 'Heating repairs, sewer lines, new construction plumbing, and more. Complete plumbing solutions for residential and commercial properties.',
      features: ['Heating Repairs', 'Sewer Line Services', 'New Construction', 'Commercial Plumbing'],
      link: '/services/general-services'
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-overlay"></div>
        <div className="container">
          <motion.div
            className="services-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Our Plumbing & Heating Services</h1>
            <p>Comprehensive solutions for all your plumbing and heating needs in Edmonton</p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-list section bg-light-gray">
        <div className="container">
          <div className="services-grid-detailed">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="service-detailed-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="service-detailed-icon">{service.icon}</div>
                <div className="service-detailed-content">
                  <h2>{service.title}</h2>
                  <p className="service-detailed-description">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <Link to={service.link} className="service-detailed-link">
                    Learn More <FaArrowRight />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta section bg-navy">
        <div className="container">
          <motion.div
            className="cta-content text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Need Plumbing or Heating Service?</h2>
            <p>Contact us today for fast, reliable service you can trust</p>
            <div className="cta-buttons">
              <a href="tel:780-800-1001" className="btn btn-primary btn-large">
                Call Now: 780-800-1001
              </a>
              <a href="/contact" className="btn btn-secondary btn-large">
                Get Free Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;

