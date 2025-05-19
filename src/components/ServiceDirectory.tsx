
import { useState } from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Search, Star, MapPin, Phone, Mail } from 'lucide-react';

// Sample data for service providers
const serviceProviders = [
  {
    id: 1,
    name: "Green Thumb Landscaping",
    specialty: "Garden Design",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1551847610-b9da465b7910?auto=format&fit=crop&q=80&w=200",
    location: "North Portland",
    description: "Specializing in native plant gardens and sustainable design solutions for residential properties.",
    phone: "(503) 555-1234",
    email: "contact@greenthumb.com"
  },
  {
    id: 2,
    name: "Portland Tree Experts",
    specialty: "Tree Services",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1624306578201-77fa4da2cac3?auto=format&fit=crop&q=80&w=200",
    location: "Southeast Portland",
    description: "ISA Certified arborists providing professional tree care, trimming, and removal services.",
    phone: "(503) 555-2345",
    email: "info@pdxtrees.com"
  },
  {
    id: 3,
    name: "Urban Oasis Builders",
    specialty: "Hardscaping",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1600240644455-3edc55c375fe?auto=format&fit=crop&q=80&w=200",
    location: "West Portland",
    description: "Creating beautiful patios, walkways, and outdoor living spaces for over 10 years.",
    phone: "(503) 555-3456",
    email: "build@urbanoasis.com"
  },
  {
    id: 4,
    name: "Lawn Rangers",
    specialty: "Lawn Maintenance",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?auto=format&fit=crop&q=80&w=200",
    location: "Beaverton",
    description: "Weekly and bi-weekly lawn care services for residential and commercial properties.",
    phone: "(503) 555-4567",
    email: "service@lawnrangers.com"
  }
];

const ServiceDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProvider, setSelectedProvider] = useState<number | null>(null);
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Filter providers based on search term
  const filteredProviders = serviceProviders.filter(provider => 
    provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    provider.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
    provider.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    provider.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a backend
    alert(`Message sent to ${serviceProviders.find(p => p.id === selectedProvider)?.name}!`);
    setContactFormData({ name: '', email: '', message: '' });
    setSelectedProvider(null);
  };

  return (
    <section id="marketplace" className="section-padding bg-neutral">
      <div className="container">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Service Provider Directory</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Connect with local landscaping professionals in the Portland area.
          </p>
        </div>

        {/* Search bar */}
        <div className="relative max-w-2xl mx-auto mb-10 reveal">
          <Search className="absolute left-3 top-3 h-5 w-5 text-neutral-dark" />
          <Input 
            type="text"
            placeholder="Search by name, service type, or location..." 
            className="pl-10 py-6"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Provider listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProviders.map(provider => (
            <Card 
              key={provider.id} 
              className="h-full transition-all duration-300 hover:shadow-lg reveal border-l-4 border-l-primary"
            >
              <div className="flex">
                <div className="w-1/3">
                  <img 
                    src={provider.image} 
                    alt={provider.name} 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="w-2/3">
                  <CardHeader className="p-4 pb-2">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-semibold">{provider.name}</h3>
                      <div className="flex items-center bg-primary/10 px-2 py-1 rounded">
                        <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
                        <span className="text-sm font-medium">{provider.rating}</span>
                      </div>
                    </div>
                    <div className="text-sm text-primary-dark font-medium mt-1">{provider.specialty}</div>
                    <div className="flex items-center text-sm text-neutral-dark mt-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      {provider.location}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm">{provider.description}</p>
                  </CardContent>
                  
                  <CardFooter className="p-4 pt-2 flex justify-between">
                    <div className="flex space-x-3">
                      <a href={`tel:${provider.phone}`} className="text-primary hover:text-primary-dark transition-colors">
                        <Phone className="h-5 w-5" />
                      </a>
                      <a href={`mailto:${provider.email}`} className="text-primary hover:text-primary-dark transition-colors">
                        <Mail className="h-5 w-5" />
                      </a>
                    </div>
                    <button 
                      className="text-primary font-medium hover:text-primary-dark transition-colors"
                      onClick={() => setSelectedProvider(provider.id)}
                    >
                      Contact
                    </button>
                  </CardFooter>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* No results message */}
        {filteredProviders.length === 0 && (
          <div className="text-center my-12 p-8 bg-white rounded-lg shadow">
            <h3 className="text-xl font-medium mb-2">No service providers found</h3>
            <p className="text-neutral-dark">Try adjusting your search terms or browse our directory.</p>
          </div>
        )}

        {/* Contact form modal */}
        {selectedProvider !== null && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
              <h3 className="text-xl font-semibold mb-4">
                Contact {serviceProviders.find(p => p.id === selectedProvider)?.name}
              </h3>
              
              <form onSubmit={handleContactSubmit}>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Your Name</Label>
                    <Input 
                      id="name" 
                      required 
                      value={contactFormData.name}
                      onChange={(e) => setContactFormData({...contactFormData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Your Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      required 
                      value={contactFormData.email}
                      onChange={(e) => setContactFormData({...contactFormData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      required 
                      rows={4} 
                      value={contactFormData.message}
                      onChange={(e) => setContactFormData({...contactFormData, message: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="flex justify-end space-x-3 mt-6">
                  <button 
                    type="button"
                    className="btn btn-outline"
                    onClick={() => setSelectedProvider(null)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceDirectory;
