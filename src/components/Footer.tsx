
import { Leaf, Facebook, Instagram, Flower } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white">
      <div className="container pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 text-white mb-4">
              <Leaf className="h-6 w-6" />
              <span className="font-bold text-xl">
                <span className="text-white">Green</span>
                <span className="text-secondary">Grow</span>
              </span>
            </div>
            <p className="mb-6">Creating beautiful outdoor spaces since 2015</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Pinterest">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 12a4 4 0 1 0 8 0a4 4 0 0 0-8 0"/>
                  <path d="M12 2v3"/>
                  <path d="M12 19v3"/>
                  <path d="m4.5 7.5 2.5 2.5"/>
                  <path d="m17 17 2.5 2.5"/>
                  <path d="m2 12h3"/>
                  <path d="M19 12h3"/>
                  <path d="m4.5 16.5 2.5-2.5"/>
                  <path d="m17 7 2.5-2.5"/>
                </svg>
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Houzz">
                <Flower className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-secondary transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-secondary transition-colors">Services</a>
              </li>
              <li>
                <a href="#about" className="hover:text-secondary transition-colors">About</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-secondary transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-secondary transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-secondary transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-secondary transition-colors">Lawn Maintenance</a>
              </li>
              <li>
                <a href="#services" className="hover:text-secondary transition-colors">Garden Design</a>
              </li>
              <li>
                <a href="#services" className="hover:text-secondary transition-colors">Hardscaping</a>
              </li>
              <li>
                <a href="#services" className="hover:text-secondary transition-colors">Tree Services</a>
              </li>
              <li>
                <a href="#services" className="hover:text-secondary transition-colors">Irrigation Systems</a>
              </li>
              <li>
                <a href="#services" className="hover:text-secondary transition-colors">Seasonal Cleanup</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for seasonal tips and updates.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l-md w-full text-neutral-dark focus:outline-none"
              />
              <button type="submit" className="bg-accent hover:bg-accent-dark px-4 rounded-r-md">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-white/70">
            © {currentYear} GreenGrow Landscaping. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-white/70">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
