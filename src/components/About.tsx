
import { useEffect, useRef, useState } from 'react';

const About = () => {
  const [counts, setCounts] = useState({ years: 0, projects: 0, clients: 0 });
  const [startCounting, setStartCounting] = useState(false);
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
          
          if (!startCounting) {
            setStartCounting(true);
          }
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
  }, [startCounting]);

  useEffect(() => {
    if (!startCounting) return;

    const duration = 2000;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);
    
    const targetCounts = {
      years: 8,
      projects: 500,
      clients: 300
    };

    let frame = 0;
    
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      
      setCounts({
        years: Math.floor(progress * targetCounts.years),
        projects: Math.floor(progress * targetCounts.projects),
        clients: Math.floor(progress * targetCounts.clients)
      });
      
      if (frame === totalFrames) {
        clearInterval(counter);
        setCounts(targetCounts);
      }
    }, frameDuration);

    return () => clearInterval(counter);
  }, [startCounting]);

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <img 
              src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3" 
              alt="GreenGrow team at work" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
              style={{ maxHeight: '600px' }}
            />
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal">About GreenGrow</h2>
            
            <div className="space-y-4">
              <p className="reveal">
                Founded in 2015 by landscaping expert Michael Torres, GreenGrow Landscaping has grown into Portland's most trusted landscaping service.
              </p>
              <p className="reveal">
                Our team of certified professionals combines horticultural knowledge with artistic design to create outdoor spaces that thrive in our local climate.
              </p>
              <p className="reveal">
                We're committed to sustainable practices and use eco-friendly products and methods in all our services.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-10">
              <div className="text-center reveal">
                <div className="text-4xl font-bold text-primary mb-1">{counts.years}+</div>
                <div className="text-sm">Years of Experience</div>
              </div>
              
              <div className="text-center reveal">
                <div className="text-4xl font-bold text-primary mb-1">{counts.projects}+</div>
                <div className="text-sm">Projects Completed</div>
              </div>
              
              <div className="text-center reveal">
                <div className="text-4xl font-bold text-primary mb-1">{counts.clients}+</div>
                <div className="text-sm">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
