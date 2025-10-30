import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaHandshake, FaClock } from 'react-icons/fa';
import './About.css';

const About = () => {
  const stats = [
    { icon: <FaAward />, number: '15+', label: 'Years Experience' },
    { icon: <FaUsers />, number: '5000+', label: 'Happy Customers' },
    { icon: <FaHandshake />, number: '100%', label: 'Satisfaction Rate' },
    { icon: <FaClock />, number: '24/7', label: 'Emergency Service' }
  ];

  const values = [
    {
      title: 'Fast Response Times',
      description: 'We understand that plumbing emergencies can\'t wait. That\'s why we\'re committed to providing rapid response times, with 24/7 availability for urgent situations.'
    },
    {
      title: 'Customer Satisfaction',
      description: 'Your satisfaction is our top priority. We don\'t consider a job complete until you\'re completely happy with our work and service.'
    },
    {
      title: 'Reliable Service',
      description: 'When you call EZ Plumbing, you can count on us to show up on time, do the job right, and stand behind our work with solid guarantees.'
    },
    {
      title: 'Transparent Pricing',
      description: 'No hidden fees, no surprises. We provide upfront, honest pricing so you know exactly what to expect before we start any work.'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="container">
          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>About EZ Plumbing Inc</h1>
            <p>Edmonton's Trusted Plumbing & Heating Experts Since 2010</p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats section bg-white">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story section bg-light-gray">
        <div className="container">
          <div className="story-content">
            <motion.div
              className="story-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Our Story</h2>
              <p>
                Founded in 2010, EZ Plumbing Inc has been serving the Edmonton community with pride and dedication for over 15 years. What started as a small, family-owned business has grown into one of Edmonton's most trusted names in plumbing and heating services.
              </p>
              <p>
                Under the leadership of owner <strong>Zaid Hashem</strong> and general manager <strong>Dave Smith</strong>, our team has built a reputation for excellence, reliability, and outstanding customer service. We've helped thousands of Edmonton homeowners and businesses with everything from emergency repairs to complete system installations.
              </p>
              <p>
                Our success is built on a simple philosophy: treat every customer like family, do the job right the first time, and always be available when you need us most. This commitment to quality and service has made us the go-to choice for plumbing and heating needs across the greater Edmonton area.
              </p>
            </motion.div>

            <motion.div
              className="story-image"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="image-placeholder">
                <div className="placeholder-content">
                  <FaUsers className="placeholder-icon" />
                  <p>Professional Team Photo</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission section bg-white">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Our Mission & Values</h2>
            <p className="section-description">
              What drives us to deliver exceptional service every single day
            </p>
          </motion.div>

          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team section bg-light-gray">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Meet Our Leadership</h2>
            <p className="section-description">
              The experienced team leading EZ Plumbing Inc
            </p>
          </motion.div>

          <div className="team-grid">
            <motion.div
              className="team-member"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="team-member-image">
                <div className="image-placeholder">
                  <FaUsers className="placeholder-icon" />
                </div>
              </div>
              <h3>Zaid Hashem</h3>
              <p className="team-role">Owner</p>
              <p className="team-bio">
                With a passion for excellence and customer service, Zaid founded EZ Plumbing Inc to provide Edmonton with reliable, professional plumbing services.
              </p>
            </motion.div>

            <motion.div
              className="team-member"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="team-member-image">
                <div className="image-placeholder">
                  <FaUsers className="placeholder-icon" />
                </div>
              </div>
              <h3>Dave Smith</h3>
              <p className="team-role">General Manager</p>
              <p className="team-bio">
                Dave brings years of industry experience and ensures every project meets our high standards of quality and professionalism.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta section bg-navy">
        <div className="container">
          <motion.div
            className="cta-content text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to Experience the EZ Plumbing Difference?</h2>
            <p>Contact us today for fast, reliable plumbing and heating services</p>
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

export default About;

