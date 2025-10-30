import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import ContactForm from '../../components/ContactForm/ContactForm';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Phone',
      details: ['780-800-1001'],
      link: 'tel:780-800-1001'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      details: ['ezplumbinginc@gmail.com'],
      link: 'mailto:ezplumbinginc@gmail.com'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Address',
      details: ['5908 177 St NW', 'Edmonton, AB T6M 1H8'],
      link: 'https://maps.google.com/?q=5908+177+St+NW+Edmonton+AB+T6M+1H8'
    },
    {
      icon: <FaClock />,
      title: 'Hours',
      details: ['24/7 Emergency Service', 'Always Available'],
      link: null
    }
  ];

  const serviceAreas = [
    'Edmonton',
    'Sherwood Park',
    'St. Albert',
    'Spruce Grove',
    'Leduc',
    'Beaumont'
  ];

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <div className="container">
          <motion.div
            className="contact-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Get in Touch</h1>
            <p>We're here to help with all your plumbing and heating needs</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info section bg-light-gray">
        <div className="container">
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className="contact-info-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="contact-info-icon">{info.icon}</div>
                <h3>{info.title}</h3>
                {info.link ? (
                  <a href={info.link} className="contact-info-link">
                    {info.details.map((detail, i) => (
                      <div key={i}>{detail}</div>
                    ))}
                  </a>
                ) : (
                  <div className="contact-info-text">
                    {info.details.map((detail, i) => (
                      <div key={i}>{detail}</div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="contact-main section bg-white">
        <div className="container">
          <div className="contact-layout">
            <motion.div
              className="contact-form-section"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and we'll get back to you as soon as possible.</p>
              <ContactForm />
            </motion.div>

            <motion.div
              className="contact-map-section"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Our Location</h2>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2368.123456789!2d-113.5678!3d53.5678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDM0JzA0LjEiTiAxMTPCsDM0JzA0LjEiVw!5e0!3m2!1sen!2sca!4v1234567890"
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="EZ Plumbing Inc Location"
                ></iframe>
              </div>

              <div className="service-areas-section">
                <h3>Service Areas</h3>
                <p>We proudly serve the following areas:</p>
                <div className="service-areas-grid">
                  {serviceAreas.map((area) => (
                    <div key={area} className="service-area-item">
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="contact-emergency section bg-navy">
        <div className="container">
          <motion.div
            className="cta-content text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Have a Plumbing Emergency?</h2>
            <p>Don't wait! Call us now for immediate assistance</p>
            <a href="tel:780-800-1001" className="btn btn-primary btn-large">
              Emergency Call: 780-800-1001
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

