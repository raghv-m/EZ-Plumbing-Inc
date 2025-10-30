import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaClock, FaArrowLeft, FaPhone } from 'react-icons/fa';
import './BlogPost.css';

const BlogPost = () => {
  const { slug } = useParams();

  // Sample blog post data (in a real app, this would come from an API or CMS)
  const post = {
    title: 'How to Prevent Frozen Pipes During Edmonton Winters',
    date: 'January 15, 2025',
    readTime: '5 min read',
    category: 'Winter Tips',
    content: `
      <p>Edmonton winters are notoriously harsh, with temperatures often dropping well below freezing. One of the most common and costly plumbing problems during winter is frozen pipes. When water freezes inside your pipes, it expands and can cause pipes to burst, leading to significant water damage and expensive repairs.</p>
      
      <h2>Why Do Pipes Freeze?</h2>
      <p>Pipes freeze when they're exposed to temperatures below 32°F (0°C) for extended periods. The most vulnerable pipes are those in unheated areas like basements, attics, garages, and exterior walls. When water inside these pipes freezes, the ice blocks water flow and creates pressure that can cause the pipe to crack or burst.</p>
      
      <h2>Prevention Tips</h2>
      
      <h3>1. Insulate Your Pipes</h3>
      <p>Pipe insulation is one of the most effective ways to prevent freezing. Focus on pipes in unheated areas, and use foam pipe insulation or heat tape. This simple step can make a significant difference in protecting your plumbing during cold snaps.</p>
      
      <h3>2. Keep Your Home Warm</h3>
      <p>Maintain a consistent temperature in your home, even when you're away. Set your thermostat to at least 55°F (13°C) to ensure pipes in walls and crawl spaces stay warm enough to prevent freezing.</p>
      
      <h3>3. Let Faucets Drip</h3>
      <p>During extremely cold weather, let cold water drip from faucets served by exposed pipes. Running water, even at a trickle, helps prevent pipes from freezing by keeping water moving through the system.</p>
      
      <h3>4. Open Cabinet Doors</h3>
      <p>Open kitchen and bathroom cabinet doors to allow warmer air to circulate around plumbing. This is especially important for sinks on exterior walls.</p>
      
      <h3>5. Seal Cracks and Openings</h3>
      <p>Check for air leaks around pipes where they enter your home. Seal any cracks or openings with caulk or spray foam insulation to keep cold air out.</p>
      
      <h2>What to Do If Your Pipes Freeze</h2>
      <p>If you turn on a faucet and only a trickle comes out, you likely have a frozen pipe. Here's what to do:</p>
      <ul>
        <li>Keep the faucet open - as the ice melts, water will flow and help melt more ice</li>
        <li>Apply heat to the frozen section using a hair dryer, heating pad, or warm towels</li>
        <li>Never use an open flame or torch to thaw pipes</li>
        <li>If you can't locate the freeze or if a pipe has burst, call EZ Plumbing immediately</li>
      </ul>
      
      <h2>Professional Help</h2>
      <p>If you're dealing with frozen pipes or want to prevent future freezing, EZ Plumbing Inc can help. Our experienced technicians can:</p>
      <ul>
        <li>Safely thaw frozen pipes</li>
        <li>Repair burst pipes</li>
        <li>Install pipe insulation</li>
        <li>Identify vulnerable areas in your plumbing system</li>
        <li>Provide preventive maintenance</li>
      </ul>
      
      <p>Don't wait until you have a plumbing emergency. Contact EZ Plumbing Inc today at 780-800-1001 for professional advice and service.</p>
    `
  };

  return (
    <div className="blog-post-page">
      {/* Back Link */}
      <section className="blog-post-nav section bg-light-gray">
        <div className="container">
          <Link to="/blog" className="back-link">
            <FaArrowLeft /> Back to Resources
          </Link>
        </div>
      </section>

      {/* Article */}
      <article className="blog-post section bg-white">
        <div className="container">
          <div className="blog-post-layout">
            <motion.div
              className="blog-post-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="blog-post-header">
                <span className="blog-post-category">{post.category}</span>
                <h1>{post.title}</h1>
                <div className="blog-post-meta">
                  <span>{post.date}</span>
                  <span className="separator">•</span>
                  <span><FaClock /> {post.readTime}</span>
                </div>
              </div>

              <div 
                className="blog-post-body"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <div className="blog-post-footer">
                <div className="blog-post-cta">
                  <h3>Need Professional Plumbing Help?</h3>
                  <p>Our expert team is available 24/7 to assist you with all your plumbing needs.</p>
                  <a href="tel:780-800-1001" className="btn btn-primary btn-large">
                    <FaPhone /> Call Now: 780-800-1001
                  </a>
                </div>
              </div>
            </motion.div>

            <aside className="blog-post-sidebar">
              <div className="sidebar-card sidebar-cta">
                <h3>Emergency Service</h3>
                <p>Available 24/7 for urgent plumbing issues</p>
                <a href="tel:780-800-1001" className="btn btn-primary btn-large">
                  Call: 780-800-1001
                </a>
              </div>

              <div className="sidebar-card">
                <h3>Related Articles</h3>
                <ul className="related-posts">
                  <li><Link to="/blog/water-heater-repair-signs">5 Signs Your Water Heater Needs Repair</Link></li>
                  <li><Link to="/blog/emergency-plumbing-checklist">Emergency Plumbing Checklist</Link></li>
                  <li><Link to="/blog/furnace-maintenance-guide-edmonton">Furnace Maintenance Guide</Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;

