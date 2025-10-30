import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaClock, FaArrowRight } from 'react-icons/fa';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      slug: 'prevent-frozen-pipes-edmonton-winter',
      title: 'How to Prevent Frozen Pipes During Edmonton Winters',
      excerpt: 'Edmonton winters can be brutal on your plumbing. Learn essential tips to protect your pipes from freezing and avoid costly water damage.',
      image: 'frozen-pipes',
      date: 'January 15, 2025',
      readTime: '5 min read',
      category: 'Winter Tips'
    },
    {
      slug: 'water-heater-repair-signs',
      title: '5 Signs Your Water Heater Needs Immediate Repair',
      excerpt: 'Don\'t wait until you\'re stuck with cold showers. Recognize these warning signs that your water heater needs professional attention.',
      image: 'water-heater',
      date: 'January 10, 2025',
      readTime: '4 min read',
      category: 'Maintenance'
    },
    {
      slug: 'diy-vs-professional-plumbing',
      title: 'DIY vs Professional Plumbing: When to Call the Experts',
      excerpt: 'Some plumbing tasks are perfect for DIY, while others require professional expertise. Learn when to tackle it yourself and when to call EZ Plumbing.',
      image: 'diy-plumbing',
      date: 'January 5, 2025',
      readTime: '6 min read',
      category: 'Advice'
    },
    {
      slug: 'furnace-maintenance-guide-edmonton',
      title: 'Guide to Furnace Maintenance for Edmonton Homeowners',
      excerpt: 'Keep your furnace running efficiently all winter long with this comprehensive maintenance guide tailored for Edmonton\'s climate.',
      image: 'furnace',
      date: 'December 28, 2024',
      readTime: '7 min read',
      category: 'Heating'
    },
    {
      slug: 'emergency-plumbing-checklist',
      title: 'Emergency Plumbing Checklist: What to Do Before Help Arrives',
      excerpt: 'Plumbing emergencies can be stressful. Follow this checklist to minimize damage and stay safe while waiting for professional help.',
      image: 'emergency',
      date: 'December 20, 2024',
      readTime: '5 min read',
      category: 'Emergency'
    },
    {
      slug: 'drain-cleaning-benefits',
      title: 'The Benefits of Regular Professional Drain Cleaning',
      excerpt: 'Regular drain cleaning isn\'t just about preventing clogs. Discover the long-term benefits of professional drain maintenance.',
      image: 'drain-cleaning',
      date: 'December 15, 2024',
      readTime: '4 min read',
      category: 'Maintenance'
    }
  ];

  return (
    <div className="blog-page">
      {/* Hero */}
      <section className="blog-hero">
        <div className="blog-hero-overlay"></div>
        <div className="container">
          <motion.div
            className="blog-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Plumbing Tips & Resources</h1>
            <p>Expert advice and helpful guides from Edmonton's trusted plumbing professionals</p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="blog-posts section bg-light-gray">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                className="blog-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="blog-card-image">
                  <div className="image-placeholder">
                    <span>{post.category}</span>
                  </div>
                  <span className="blog-category">{post.category}</span>
                </div>
                <div className="blog-card-content">
                  <div className="blog-meta">
                    <span className="blog-date">{post.date}</span>
                    <span className="blog-separator">•</span>
                    <span className="blog-read-time">
                      <FaClock /> {post.readTime}
                    </span>
                  </div>
                  <h2 className="blog-title">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`} className="blog-read-more">
                    Read More <FaArrowRight />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="blog-cta section bg-navy">
        <div className="container">
          <motion.div
            className="cta-content text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Need Professional Plumbing Help?</h2>
            <p>Our expert team is ready to assist you 24/7</p>
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

export default Blog;

