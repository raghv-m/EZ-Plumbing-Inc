import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaClock } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const serviceAreas = [
    'Edmonton',
    'Sherwood Park',
    'St. Albert',
    'Spruce Grove',
    'Leduc',
    'Beaumont'
  ];

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/blog', label: 'Resources' },
    { path: '/contact', label: 'Contact' }
  ];

  const services = [
    { path: '/services/emergency-plumbing', label: 'Emergency Plumbing' },
    { path: '/services/drain-cleaning', label: 'Drain Cleaning' },
    { path: '/services/hot-water-systems', label: 'Hot Water Systems' },
    { path: '/services/furnace-installation', label: 'Furnace Installation' },
    { path: '/services/specialty-installations', label: 'Specialty Installations' },
    { path: '/services/general-services', label: 'General Services' }
  ];

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-column">
              <div className="footer-logo">
                <div className="logo-icon">EZ</div>
                <div className="logo-text">
                  <span className="logo-name">Plumbing Inc</span>
                  <span className="logo-tagline">24/7 Emergency Service</span>
                </div>
              </div>
              <p className="footer-description">
                Trusted plumbing and heating services in Edmonton since 2010. 
                Fast, reliable, and available 24/7 for all your emergency needs.
              </p>
              <div className="footer-social">
                <a 
                  href="https://www.facebook.com/ezplumbinginc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Visit our Facebook page"
                >
                  <FaFacebook />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-column">
              <h3 className="footer-heading">Quick Links</h3>
              <ul className="footer-links">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer-column">
              <h3 className="footer-heading">Our Services</h3>
              <ul className="footer-links">
                {services.map((service) => (
                  <li key={service.path}>
                    <Link to={service.path}>{service.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-column">
              <h3 className="footer-heading">Contact Us</h3>
              <ul className="footer-contact">
                <li>
                  <FaPhone className="contact-icon" />
                  <a href="tel:780-800-1001">780-800-1001</a>
                </li>
                <li>
                  <FaEnvelope className="contact-icon" />
                  <a href="mailto:ezplumbinginc@gmail.com">ezplumbinginc@gmail.com</a>
                </li>
                <li>
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>5908 177 St NW<br />Edmonton, AB T6M 1H8</span>
                </li>
                <li>
                  <FaClock className="contact-icon" />
                  <span>24/7 Emergency Service</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Service Areas */}
          <div className="footer-service-areas">
            <h3 className="footer-heading">Service Areas</h3>
            <div className="service-areas-list">
              {serviceAreas.map((area) => (
                <span key={area} className="service-area-tag">{area}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} EZ Plumbing Inc. All Rights Reserved.
            </p>
            <div className="footer-legal">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <span className="separator">|</span>
              <Link to="/terms-of-service">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

