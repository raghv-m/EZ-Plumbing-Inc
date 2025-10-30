import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import ContactForm from '../../../components/ContactForm/ContactForm';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section section bg-light-gray">
      <div className="container">
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-description">
            Have a plumbing emergency or need a quote? Contact us today!
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="contact-info-title">Contact Information</h3>
            <p className="contact-info-description">
              Reach out to us anytime. We're here to help 24/7!
            </p>

            <div className="contact-info-items">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <FaPhone />
                </div>
                <div className="contact-info-content">
                  <h4>Phone</h4>
                  <a href="tel:780-800-1001">780-800-1001</a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-info-content">
                  <h4>Email</h4>
                  <a href="mailto:ezplumbinginc@gmail.com">ezplumbinginc@gmail.com</a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-info-content">
                  <h4>Address</h4>
                  <p>5908 177 St NW<br />Edmonton, AB T6M 1H8</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <FaClock />
                </div>
                <div className="contact-info-content">
                  <h4>Hours</h4>
                  <p>24/7 Emergency Service Available</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

