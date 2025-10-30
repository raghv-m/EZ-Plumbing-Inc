import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import TestimonialCard from '../../../components/TestimonialCard/TestimonialCard';
import './Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Edmonton, AB',
      rating: 5,
      text: 'EZ Plumbing saved the day! We had a burst pipe at 2 AM and they were here within 30 minutes. Professional, fast, and reasonably priced. Highly recommend!',
      date: 'January 2025'
    },
    {
      name: 'Michael Chen',
      location: 'Sherwood Park, AB',
      rating: 5,
      text: 'Dave and his team installed our new furnace and did an amazing job. They were punctual, clean, and explained everything clearly. Best service we\'ve had!',
      date: 'December 2024'
    },
    {
      name: 'Jennifer Martinez',
      location: 'St. Albert, AB',
      rating: 5,
      text: 'Called them for a clogged drain and they came the same day. The technician was friendly, knowledgeable, and fixed the problem quickly. Will definitely use again!',
      date: 'January 2025'
    },
    {
      name: 'Robert Thompson',
      location: 'Edmonton, AB',
      rating: 5,
      text: 'Excellent service from start to finish. They replaced our water heater and the whole process was smooth. Fair pricing and quality work. Thank you EZ Plumbing!',
      date: 'November 2024'
    },
    {
      name: 'Lisa Anderson',
      location: 'Spruce Grove, AB',
      rating: 5,
      text: 'We\'ve used EZ Plumbing multiple times over the years and they never disappoint. Reliable, honest, and always available when we need them. Our go-to plumbers!',
      date: 'December 2024'
    }
  ];

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 6000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="testimonials section bg-light-gray">
      <div className="container">
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-description">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </motion.div>

        <div className="testimonials-carousel">
          <button
            className="carousel-button carousel-button-prev"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>

          <div className="testimonials-slider">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="testimonial-slide"
              >
                <TestimonialCard {...testimonials[currentIndex]} />
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            className="carousel-button carousel-button-next"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>
        </div>

        <div className="carousel-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

