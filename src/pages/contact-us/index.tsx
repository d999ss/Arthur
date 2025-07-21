import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import Link from 'next/link';
import Image from 'next/image';

interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
  hours: string;
  services: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
}

const ContactUsPage: React.FC = () => {
  // Sample locations data - in a real implementation, this would come from a CMS or database
  const locations: Location[] = [
    {
      id: '1',
      name: 'Arthur',
      address: '312 Main St',
      city: 'Arthur',
      state: 'ND',
      zip: '58006',
      phone: '701-967-8312',
      email: 'arthur@arthurcompanies.com',
      hours: 'Mon-Fri: 8am-5pm, Sat: 8am-12pm (extended hours during harvest)',
      services: ['Grain', 'Agronomy', 'Feed'],
      coordinates: {
        lat: 47.1014,
        lng: -97.2162
      }
    },
    {
      id: '2',
      name: 'Ayr',
      address: '205 Main Ave',
      city: 'Ayr',
      state: 'ND',
      zip: '58007',
      phone: '701-484-5555',
      email: 'ayr@arthurcompanies.com',
      hours: 'Mon-Fri: 8am-5pm, Sat: 8am-12pm (extended hours during harvest)',
      services: ['Grain', 'Shuttle Loader'],
      coordinates: {
        lat: 47.0369,
        lng: -97.4903
      }
    },
    {
      id: '3',
      name: 'Buffalo',
      address: '301 Railroad Ave',
      city: 'Buffalo',
      state: 'ND',
      zip: '58011',
      phone: '701-633-5126',
      email: 'buffalo@arthurcompanies.com',
      hours: 'Mon-Fri: 8am-5pm, Sat: 8am-12pm (extended hours during harvest)',
      services: ['Grain', 'Agronomy'],
      coordinates: {
        lat: 46.9130,
        lng: -97.5481
      }
    },
    {
      id: '4',
      name: 'Anamoose',
      address: '420 Main St E',
      city: 'Anamoose',
      state: 'ND',
      zip: '58710',
      phone: '701-465-3555',
      email: 'anamoose@arthurcompanies.com',
      hours: 'Mon-Fri: 8am-5pm, Sat: 8am-12pm (extended hours during harvest)',
      services: ['Grain'],
      coordinates: {
        lat: 47.8791,
        lng: -100.2376
      }
    },
    {
      id: '5',
      name: 'Harvey',
      address: '120 Lincoln Ave',
      city: 'Harvey',
      state: 'ND',
      zip: '58341',
      phone: '701-324-4633',
      email: 'harvey@arthurcompanies.com',
      hours: 'Mon-Fri: 8am-5pm, Sat: 8am-12pm (extended hours during harvest)',
      services: ['Grain', 'Agronomy', 'Feed'],
      coordinates: {
        lat: 47.7769,
        lng: -99.9290
      }
    },
    {
      id: '6',
      name: 'Page',
      address: '101 Railway St',
      city: 'Page',
      state: 'ND',
      zip: '58064',
      phone: '701-668-2326',
      email: 'page@arthurcompanies.com',
      hours: 'Mon-Fri: 8am-5pm, Sat: 8am-12pm (extended hours during harvest)',
      services: ['Grain', 'Agronomy'],
      coordinates: {
        lat: 47.1586,
        lng: -97.5731
      }
    },
    {
      id: '7',
      name: 'Erie',
      address: '201 Main St',
      city: 'Erie',
      state: 'ND',
      zip: '58029',
      phone: '701-668-2264',
      email: 'erie@arthurcompanies.com',
      hours: 'Mon-Fri: 8am-5pm, Sat: 8am-12pm (extended hours during harvest)',
      services: ['Grain'],
      coordinates: {
        lat: 47.0903,
        lng: -97.6731
      }
    },
    {
      id: '8',
      name: 'Corporate Office',
      address: '120 Broadway N, Suite 500',
      city: 'Fargo',
      state: 'ND',
      zip: '58102',
      phone: '701-235-8486',
      email: 'info@arthurcompanies.com',
      hours: 'Mon-Fri: 8am-5pm',
      services: ['Administration'],
      coordinates: {
        lat: 46.8772,
        lng: -96.7898
      }
    }
  ];

  // Filter states
  const [activeLocation, setActiveLocation] = useState<Location>(locations[0]);
  const [serviceFilter, setServiceFilter] = useState('All');

  // Get unique services for filter
  const services = ['All', ...Array.from(new Set(locations.flatMap(location => location.services)))];

  // Filter locations based on selected service
  const filteredLocations = serviceFilter === 'All' 
    ? locations 
    : locations.filter(location => location.services.includes(serviceFilter));

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    location: 'Corporate Office'
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      location: 'Corporate Office'
    });
    // Show success message briefly
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-arthur-cream py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-arthur-blue mb-4">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-arthur-dark mb-8">
              Connect with our team at any of our locations or reach out through our contact form.
            </p>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-arthur-blue mb-8 text-center">Our Locations</h2>
            
            {/* Service Filter */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-arthur-gray mb-2">Filter by Service:</label>
              <div className="flex flex-wrap gap-2">
                {services.map((service, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-md transition duration-300 ${
                      serviceFilter === service
                        ? 'bg-arthur-blue text-white'
                        : 'bg-gray-100 text-arthur-dark hover:bg-gray-200'
                    }`}
                    onClick={() => setServiceFilter(service)}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Locations Grid and Detail View */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Locations List */}
              <div className="lg:col-span-1 h-[600px] overflow-y-auto pr-4">
                {filteredLocations.length > 0 ? (
                  <div className="space-y-4">
                    {filteredLocations.map((location) => (
                      <div 
                        key={location.id} 
                        className={`p-4 rounded-lg cursor-pointer transition duration-300 ${
                          activeLocation.id === location.id
                            ? 'bg-arthur-blue text-white'
                            : 'bg-arthur-cream hover:bg-arthur-blue hover:text-white'
                        }`}
                        onClick={() => setActiveLocation(location)}
                      >
                        <h3 className="text-xl font-bold mb-1">{location.name}</h3>
                        <p className="text-sm">{location.city}, {location.state}</p>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {location.services.map((service, index) => (
                            <span 
                              key={index} 
                              className={`text-xs px-2 py-1 rounded-full ${
                                activeLocation.id === location.id
                                  ? 'bg-white text-arthur-blue'
                                  : 'bg-arthur-blue text-white'
                              }`}
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-lg text-arthur-gray">No locations found with the selected service.</p>
                  </div>
                )}
              </div>
              
              {/* Location Detail */}
              <div className="lg:col-span-2">
                <div className="bg-arthur-cream p-6 rounded-lg h-full">
                  {/* Map Placeholder */}
                  <div className="bg-gray-300 h-64 mb-6 rounded-lg flex items-center justify-center">
                    <p className="text-gray-600">Interactive Map would be displayed here</p>
                    {/* In a real implementation, this would be a Google Maps or similar component */}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-arthur-blue mb-2">{activeLocation.name}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-arthur-dark mb-1">{activeLocation.address}</p>
                      <p className="text-arthur-dark mb-4">{activeLocation.city}, {activeLocation.state} {activeLocation.zip}</p>
                      
                      <p className="font-bold text-arthur-blue">Phone</p>
                      <p className="text-arthur-dark mb-2">
                        <a href={`tel:${activeLocation.phone}`} className="hover:text-arthur-gold">
                          {activeLocation.phone}
                        </a>
                      </p>
                      
                      <p className="font-bold text-arthur-blue">Email</p>
                      <p className="text-arthur-dark mb-4">
                        <a href={`mailto:${activeLocation.email}`} className="hover:text-arthur-gold">
                          {activeLocation.email}
                        </a>
                      </p>
                    </div>
                    
                    <div>
                      <p className="font-bold text-arthur-blue">Hours</p>
                      <p className="text-arthur-dark mb-4">{activeLocation.hours}</p>
                      
                      <p className="font-bold text-arthur-blue">Services</p>
                      <ul className="list-disc pl-5 mb-4">
                        {activeLocation.services.map((service, index) => (
                          <li key={index} className="text-arthur-dark">{service}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <a 
                      href={`https://maps.google.com/?q=${activeLocation.coordinates.lat},${activeLocation.coordinates.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-arthur-blue text-white px-4 py-2 rounded-md hover:bg-arthur-gold transition duration-300 inline-block"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-arthur-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-arthur-blue mb-8 text-center">Send Us a Message</h2>
            
            {formSubmitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6" role="alert">
                <strong className="font-bold">Thank you!</strong>
                <span className="block sm:inline"> Your message has been sent. We'll get back to you soon.</span>
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-arthur-gray mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-arthur-blue"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-arthur-gray mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-arthur-blue"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-arthur-gray mb-2">Phone (optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-arthur-blue"
                  />
                </div>
                
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-arthur-gray mb-2">Location</label>
                  <select
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-arthur-blue"
                  >
                    {locations.map((location) => (
                      <option key={location.id} value={location.name}>
                        {location.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-arthur-gray mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-arthur-blue"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-arthur-gray mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-arthur-blue"
                  required
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-arthur-blue text-white px-8 py-3 rounded-md hover:bg-arthur-gold transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Department Contacts Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-arthur-blue mb-8 text-center">Department Contacts</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-arthur-cream p-6 rounded-lg">
                <h3 className="text-xl font-bold text-arthur-blue mb-3">Grain</h3>
                <p className="text-arthur-dark mb-2">For grain marketing, contracts, and delivery:</p>
                <p className="mb-4">
                  <a href="mailto:grain@arthurcompanies.com" className="text-arthur-blue hover:text-arthur-gold">
                    grain@arthurcompanies.com
                  </a>
                </p>
                <p className="text-arthur-dark">701-967-8312</p>
              </div>
              
              <div className="bg-arthur-cream p-6 rounded-lg">
                <h3 className="text-xl font-bold text-arthur-blue mb-3">Agronomy</h3>
                <p className="text-arthur-dark mb-2">For crop inputs, field services, and consulting:</p>
                <p className="mb-4">
                  <a href="mailto:agronomy@arthurcompanies.com" className="text-arthur-blue hover:text-arthur-gold">
                    agronomy@arthurcompanies.com
                  </a>
                </p>
                <p className="text-arthur-dark">701-967-8312</p>
              </div>
              
              <div className="bg-arthur-cream p-6 rounded-lg">
                <h3 className="text-xl font-bold text-arthur-blue mb-3">Feed</h3>
                <p className="text-arthur-dark mb-2">For livestock feed products and services:</p>
                <p className="mb-4">
                  <a href="mailto:feed@arthurcompanies.com" className="text-arthur-blue hover:text-arthur-gold">
                    feed@arthurcompanies.com
                  </a>
                </p>
                <p className="text-arthur-dark">701-324-4633</p>
              </div>
              
              <div className="bg-arthur-cream p-6 rounded-lg">
                <h3 className="text-xl font-bold text-arthur-blue mb-3">Careers</h3>
                <p className="text-arthur-dark mb-2">For employment opportunities and applications:</p>
                <p className="mb-4">
                  <a href="mailto:careers@arthurcompanies.com" className="text-arthur-blue hover:text-arthur-gold">
                    careers@arthurcompanies.com
                  </a>
                </p>
                <p className="text-arthur-dark">701-235-8486</p>
              </div>
              
              <div className="bg-arthur-cream p-6 rounded-lg">
                <h3 className="text-xl font-bold text-arthur-blue mb-3">Media</h3>
                <p className="text-arthur-dark mb-2">For press inquiries and media relations:</p>
                <p className="mb-4">
                  <a href="mailto:media@arthurcompanies.com" className="text-arthur-blue hover:text-arthur-gold">
                    media@arthurcompanies.com
                  </a>
                </p>
                <p className="text-arthur-dark">701-235-8486</p>
              </div>
              
              <div className="bg-arthur-cream p-6 rounded-lg">
                <h3 className="text-xl font-bold text-arthur-blue mb-3">General Inquiries</h3>
                <p className="text-arthur-dark mb-2">For all other inquiries:</p>
                <p className="mb-4">
                  <a href="mailto:info@arthurcompanies.com" className="text-arthur-blue hover:text-arthur-gold">
                    info@arthurcompanies.com
                  </a>
                </p>
                <p className="text-arthur-dark">701-235-8486</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactUsPage;
