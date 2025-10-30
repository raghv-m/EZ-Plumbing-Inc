import { FaTools, FaSink, FaFire, FaWrench, FaCog, FaHome } from 'react-icons/fa';
import ServiceCard from '../../../components/ServiceCard/ServiceCard';
import { motion } from 'framer-motion';
import './ServicesOverview.css';

const ServicesOverview = () => {
  const services = [
    {
      icon: <FaTools />,
      title: 'Emergency Plumbing Repairs',
      description: 'Burst pipes, leaks, and urgent plumbing issues? We provide 24-hour emergency response to get your home back to normal fast.',
      link: '/services/emergency-plumbing'
    },
    {
      icon: <FaSink />,
      title: 'Drain Cleaning',
      description: 'Professional drain cleaning services to remove clogs, food buildup, and grime. Keep your drains flowing smoothly.',
      link: '/services/drain-cleaning'
    },
    {
      icon: <FaFire />,
      title: 'Hot Water Systems',
      description: 'Expert water heater repair, maintenance, and installation. Enjoy reliable hot water when you need it most.',
      link: '/services/hot-water-systems'
    },
    {
      icon: <FaWrench />,
      title: 'Furnace Installations',
      description: 'Energy-efficient furnace installation and replacement. Stay warm all winter with our professional heating solutions.',
      link: '/services/furnace-installation'
    },
    {
      icon: <FaCog />,
      title: 'Specialty Installations',
      description: 'BBQ gas hookups, gas fitting, kitchen and bathroom repiping. Specialized installations done right.',
      link: '/services/specialty-installations'
    },
    {
      icon: <FaHome />,
      title: 'General Services',
      description: 'Heating repairs, sewer lines, new construction plumbing, and more. Complete plumbing solutions for your home.',
      link: '/services/general-services'
    }
  ];

  return (
    <section className="services-overview section bg-light-gray">
      <div className="container">
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our Plumbing & Heating Services</h2>
          <p className="section-description">
            Comprehensive plumbing and heating solutions for Edmonton homes and businesses
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;

