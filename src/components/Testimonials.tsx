
import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Cedar Hills",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=100&h=100",
    rating: 5,
    quote: "GreenGrow transformed our backyard from an overgrown mess into a beautiful outdoor living space. Michael and his team were professional, punctual, and the quality of work exceeded our expectations."
  },
  {
    id: 2,
    name: "Marcus Chen",
    location: "West Portland",
    photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=100&h=100",
    rating: 5,
    quote: "We've been using GreenGrow for our lawn maintenance for 3 years now. They're always reliable and our yard has never looked better!"
  },
  {
    id: 3,
    name: "Jennifer and David Miller",
    location: "Lake Oswego",
    photo: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=100&h=100",
    rating: 5,
    quote: "The garden design service was exactly what we needed. They listened to our ideas and created something even better than we imagined."
  },
  {
    id: 4,
    name: "Robert Williams",
    location: "Beaverton",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=100&h=100",
    rating: 5,
    quote: "Their hardscaping work completely transformed our front yard. The new walkway and retaining wall look fantastic and have improved our home's curb appeal dramatically."
  }
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const slideContainerRef = useRef<HTMLDivElement>(null);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (!slideContainerRef.current) return;
    
    const slideWidth = slideContainerRef.current.offsetWidth;
    const scrollAmount = currentSlide * slideWidth;
    
    slideContainerRef.current.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }, [currentSlide]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => {
              el.classList.add('active');
            }, i * 100);
          });
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="section-padding bg-primary text-white">
      <div className="container">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What Our Clients Say</h2>
        </div>

        <div className="relative">
          <div 
            ref={slideContainerRef}
            className="overflow-x-hidden whitespace-nowrap"
          >
            <div className="inline-flex w-full flex-nowrap">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={`inline-block w-full md:w-1/2 lg:w-1/3 px-4 whitespace-normal reveal ${
                    index === currentSlide ? 'opacity-100' : 'opacity-60'
                  }`}
                >
                  <div className="bg-white rounded-lg p-6 h-full shadow-lg text-neutral-dark">
                    <div className="flex items-center mb-4">
                      <img 
                        src={testimonial.photo} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-sm text-neutral-dark/70">{testimonial.location}</p>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-neutral-dark">{testimonial.quote}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary rounded-full p-2 shadow-md z-10"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary rounded-full p-2 shadow-md z-10"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots indicators */}
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`mx-1 w-3 h-3 rounded-full ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
