
import { useState, useEffect } from 'react';
import { Leaf, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container flex items-center justify-between">
        <a href="#home" className="flex items-center space-x-2 text-primary">
          <Leaf className="h-6 w-6" />
          <span className="font-bold text-xl hidden sm:inline">
            <span className="text-primary">Green</span>
            <span className="text-secondary">Grow</span> 
            <span className="text-sm font-normal ml-1 hidden md:inline">Landscaping</span>
          </span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-neutral-dark hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn btn-accent">
            Get a Quote
          </a>
        </nav>
        
        <button 
          className="md:hidden text-neutral-dark p-2" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </button>

        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-50 flex flex-col">
            <div className="container py-4 flex items-center justify-between">
              <a href="#home" className="flex items-center space-x-2 text-primary">
                <Leaf className="h-6 w-6" />
                <span className="font-bold text-xl">
                  <span className="text-primary">Green</span>
                  <span className="text-secondary">Grow</span>
                </span>
              </a>
              <button 
                className="p-2 text-neutral-dark" 
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 space-y-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-xl font-medium text-neutral-dark hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="btn btn-accent mt-4"
                onClick={toggleMenu}
              >
                Get a Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
