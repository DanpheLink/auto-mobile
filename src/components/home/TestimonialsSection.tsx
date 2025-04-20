import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "NASA Nepal's education program completely transformed how our school teaches astronomy. The resources and training they provided have inspired numerous students to pursue careers in science.",
    author: "Ramesh Adhikari",
    position: "Principal, Kathmandu Science Academy",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    quote: "The astronomy workshops organized by NASA Nepal opened my eyes to the wonders of the cosmos. Now I'm pursuing my Ph.D. in Astrophysics, a dream that began at one of their public observation events.",
    author: "Srijana Thapa",
    position: "Ph.D. Student, Astrophysics",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 3,
    quote: "Collaborating with NASA Nepal on our climate monitoring project has been incredibly productive. Their expertise in satellite data analysis has been invaluable to our research on Himalayan glaciers.",
    author: "Dr. James Wong",
    position: "Climate Scientist, International Climate Research Institute",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  return (
    <section className="relative py-20 bg-dark-800 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-primary-900/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary-900/20 to-transparent"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute -left-6 top-0 opacity-20">
          <Quote size={120} className="text-primary-400" />
        </div>
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What People Say</h2>
          <div className="h-1 w-24 bg-primary-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
            >
              <div className="flex flex-col items-center text-center px-4">
                <div className="mb-8">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].author} 
                    className="w-20 h-20 rounded-full object-cover border-4 border-primary-600"
                  />
                </div>
                <blockquote className="text-xl md:text-2xl italic mb-6 max-w-3xl">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                <div>
                  <p className="font-bold text-lg">{testimonials[currentIndex].author}</p>
                  <p className="text-primary-400">{testimonials[currentIndex].position}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-12 space-x-4">
            <button 
              onClick={prevTestimonial} 
              className="p-2 rounded-full bg-dark-700 hover:bg-primary-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentIndex === index ? 'bg-primary-600' : 'bg-gray-500 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial} 
              className="p-2 rounded-full bg-dark-700 hover:bg-primary-600 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;