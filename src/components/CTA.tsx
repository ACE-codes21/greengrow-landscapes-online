
import { useEffect, useRef } from 'react';

const CTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section ref={sectionRef} className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90"></div>
      
      {/* Decorative leaves */}
      <div className="absolute left-0 top-0 w-32 h-32 text-white/10">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 8a.78.78 0 0 1-.21.54l-8.25 8.25a.76.76 0 0 1-.54.21.76.76 0 0 1-.54-.21L8 13.33l-4.6 4.6a.77.77 0 0 1-1.08 0 .77.77 0 0 1 0-1.08l5.14-5.14a.76.76 0 0 1 1.07 0l3.45 3.45 7.72-7.72a.77.77 0 0 1 1.08 0c.14.14.21.32.21.54z"/>
        </svg>
      </div>
      
      <div className="absolute right-0 bottom-0 w-48 h-48 text-white/10 transform rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 8a.78.78 0 0 1-.21.54l-8.25 8.25a.76.76 0 0 1-.54.21.76.76 0 0 1-.54-.21L8 13.33l-4.6 4.6a.77.77 0 0 1-1.08 0 .77.77 0 0 1 0-1.08l5.14-5.14a.76.76 0 0 1 1.07 0l3.45 3.45 7.72-7.72a.77.77 0 0 1 1.08 0c.14.14.21.32.21.54z"/>
        </svg>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">
            Ready to Start Your Landscaping Project?
          </h2>
          <p className="text-lg mb-8 reveal">
            Contact us today for a free consultation and quote
          </p>
          <a href="#contact" className="btn bg-accent hover:bg-accent-dark text-white px-10 py-3 rounded-md font-medium reveal">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
