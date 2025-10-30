import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import './TestimonialCard.css';

const TestimonialCard = ({ name, location, rating, text, date }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-quote-icon">
        <FaQuoteLeft />
      </div>
      <div className="testimonial-rating">
        {[...Array(rating)].map((_, index) => (
          <FaStar key={index} className="star-icon" />
        ))}
      </div>
      <p className="testimonial-text">{text}</p>
      <div className="testimonial-author">
        <div className="author-info">
          <h4 className="author-name">{name}</h4>
          <p className="author-location">{location}</p>
        </div>
        {date && <p className="testimonial-date">{date}</p>}
      </div>
    </div>
  );
};

export default TestimonialCard;

