
import { useEffect, useRef } from 'react';
import { Flower, Garden, Home, Leaf, LawnMower, DropletIcon } from 'lucide-react';

const services = [
  {
    icon: <LawnMower className="h-12 w-12 text-primary" />,
    title: "Lawn Maintenance",
    description: "Regular mowing, edging, and fertilization to keep your lawn lush and healthy year-round."
  },
  {
    icon: <Flower className="h-12 w-12 text-primary" />,
    title: "Garden Design",
    description: "Custom garden planning and installation that matches your style and enhances your property's beauty."
  },
  {
    icon: <Home className="h-12 w-12 text-primary" />,
    title: "Hardscaping",
    description: "Patios, walkways, and retaining walls that complement your landscape and increase property value."
  },
  {
    icon: <Leaf className="h-12 w-12 text-primary" />,
    title: "Tree Services",
    description: "Professional tree planting, trimming, and removal with safety and care."
  },
  {
    icon: <DropletIcon className="h-12 w-12 text-primary" />,
    title: "Irrigation Systems",
    description: "Water-efficient irrigation design and installation to keep your landscape thriving."
  },
  {
    icon: <Garden className="h-12 w-12 text-primary" />,
    title: "Seasonal Cleanup",
    description: "Comprehensive spring and fall cleanup services to maintain your property's health and appearance."
  }
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.reveal');
          elements.forEach((el, i) => {
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
    <section id="services" ref={sectionRef} className="section-padding bg-neutral">
      <div className="container">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg max-w-3xl mx-auto">
            GreenGrow provides comprehensive landscaping solutions tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg reveal"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-neutral-dark mb-4">{service.description}</p>
              <a href="#contact" className="text-primary font-medium hover:text-primary-dark transition-colors inline-flex items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
