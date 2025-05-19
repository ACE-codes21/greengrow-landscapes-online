
import { useEffect, useRef } from 'react';

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const scrollPosition = window.scrollY;
      parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.4}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <div 
        ref={parallaxRef}
        className="absolute inset-0 w-full h-full bg-cover bg-center" 
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3)',
          transform: 'translateZ(0)'
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/40 to-transparent"></div>
      
      <div className="container relative h-full flex flex-col justify-center z-10">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Transform Your Outdoor Space
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Professional landscaping services for homes and businesses in Portland
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#services" className="btn btn-accent">
              View Our Services
            </a>
            <a href="#contact" className="btn btn-outline text-white border-white hover:text-accent-foreground">
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
