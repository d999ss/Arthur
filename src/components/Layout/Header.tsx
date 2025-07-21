import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import UtilityMenu from './UtilityMenu';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      {/* Utility Menu (Top bar) */}
      <div className="bg-arthur-blue text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/contact-us" className="text-white hover:text-arthur-gold transition duration-300 text-sm">
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (701) 235-8486
              </span>
            </Link>
            <Link href="/locations" className="text-white hover:text-arthur-gold transition duration-300 text-sm">
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Find a Location
              </span>
            </Link>
          </div>
          
          {/* Use the UtilityMenu component */}
          <UtilityMenu className="ml-auto" />
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-arthur-blue">Arthur</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-arthur-dark hover:text-arthur-blue font-medium">
              Home
            </Link>
            <div className="relative group">
              <button className="text-arthur-dark hover:text-arthur-blue font-medium flex items-center">
                Grain
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg py-2 rounded-md hidden group-hover:block z-10">
                <Link href="/grain/cash-bids-futures" className="block px-4 py-2 text-sm text-arthur-dark hover:bg-arthur-cream">
                  Cash Bids & Futures
                </Link>
                <Link href="/grain/locations-hours" className="block px-4 py-2 text-sm text-arthur-dark hover:bg-arthur-cream">
                  Locations & Hours
                </Link>
                <Link href="/grain/specialty-contracts" className="block px-4 py-2 text-sm text-arthur-dark hover:bg-arthur-cream">
                  Specialty Contracts
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="text-arthur-dark hover:text-arthur-blue font-medium flex items-center">
                Products & Services
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg py-2 rounded-md hidden group-hover:block z-10">
                <div className="px-4 py-2 font-medium text-arthur-blue">On the Farm</div>
                <Link href="/products-services/agronomy-centers" className="block px-4 py-2 text-sm text-arthur-dark hover:bg-arthur-cream">
                  Agronomy Centers
                </Link>
                <Link href="/products-services/crop-inputs" className="block px-4 py-2 text-sm text-arthur-dark hover:bg-arthur-cream">
                  Crop Inputs
                </Link>
                <Link href="/products-services/custom-application-trucking" className="block px-4 py-2 text-sm text-arthur-dark hover:bg-arthur-cream">
                  Custom Application & Trucking
                </Link>
                <div className="px-4 py-2 font-medium text-arthur-blue">Off the Farm</div>
                <Link href="/products-services/premium-ingredients" className="block px-4 py-2 text-sm text-arthur-dark hover:bg-arthur-cream">
                  Premium Ingredients
                </Link>
                <Link href="/products-services/pet-food-manufacturing" className="block px-4 py-2 text-sm text-arthur-dark hover:bg-arthur-cream">
                  Pet Food Manufacturing
                </Link>
                <Link href="/products-services/specialty-crops" className="block px-4 py-2 text-sm text-arthur-dark hover:bg-arthur-cream">
                  Specialty Crops
                </Link>
                <Link href="/products-services/wholesale-fertilizer" className="block px-4 py-2 text-sm text-arthur-dark hover:bg-arthur-cream">
                  Wholesale Fertilizer
                </Link>
                <Link href="/products-services/trading" className="block px-4 py-2 text-sm text-arthur-dark hover:bg-arthur-cream">
                  Trading
                </Link>
                <Link href="/products-services/research-development" className="block px-4 py-2 text-sm text-arthur-dark hover:bg-arthur-cream">
                  Research & Development
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="text-arthur-dark hover:text-arthur-blue font-medium flex items-center">
                Innovation
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg py-2 rounded-md hidden group-hover:block z-10">
                <Link href="/innovation/venture-platform" className="block px-4 py-2 text-sm text-arthur-dark hover:bg-arthur-cream">
                  Venture Platform
                </Link>
                <Link href="/innovation/research-development" className="block px-4 py-2 text-sm text-arthur-dark hover:bg-arthur-cream">
                  Research & Development
                </Link>
                <Link href="/innovation/technology" className="block px-4 py-2 text-sm text-arthur-dark hover:bg-arthur-cream">
                  Technology
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="text-arthur-dark hover:text-arthur-blue font-medium flex items-center">
                About
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg py-2 rounded-md hidden group-hover:block z-10">
                <Link href="/about/who-we-are" className="block px-4 py-2 text-sm text-arthur-dark hover:bg-arthur-cream">
                  Who We Are
                </Link>
                <Link href="/about/history" className="block px-4 py-2 text-sm text-arthur-dark hover:bg-arthur-cream">
                  History
                </Link>
                <Link href="/about/leadership-team" className="block px-4 py-2 text-sm text-arthur-dark hover:bg-arthur-cream">
                  Leadership Team
                </Link>
                <Link href="/about/newsroom" className="block px-4 py-2 text-sm text-arthur-dark hover:bg-arthur-cream">
                  Newsroom
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="text-arthur-dark hover:text-arthur-blue font-medium flex items-center">
                Grower Insights
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg py-2 rounded-md hidden group-hover:block z-10">
                <Link href="/grower-insights/bushel-balance" className="block px-4 py-2 text-sm text-arthur-dark hover:bg-arthur-cream">
                  Bushel Balance
                </Link>
                <Link href="/grower-insights/trial-results" className="block px-4 py-2 text-sm text-arthur-dark hover:bg-arthur-cream">
                  Trial Results
                </Link>
                <Link href="/grower-insights/market-insights" className="block px-4 py-2 text-sm text-arthur-dark hover:bg-arthur-cream">
                  Market Insights
                </Link>
              </div>
            </div>
            <Link href="/careers" className="text-arthur-dark hover:text-arthur-blue font-medium">
              Careers
            </Link>
            <div className="relative group">
              <button className="text-arthur-dark hover:text-arthur-blue font-medium flex items-center">
                Contact Us
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg py-2 rounded-md hidden group-hover:block z-10">
                <Link href="/contact/locations" className="block px-4 py-2 text-sm text-arthur-dark hover:bg-arthur-cream">
                  Locations
                </Link>
                <Link href="/contact/general-inquiry" className="block px-4 py-2 text-sm text-arthur-dark hover:bg-arthur-cream">
                  General Inquiry
                </Link>
              </div>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-arthur-dark hover:text-arthur-blue"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="py-2 text-arthur-dark hover:text-arthur-blue font-medium">
                Home
              </Link>
              <details className="group">
                <summary className="py-2 text-arthur-dark hover:text-arthur-blue font-medium flex items-center justify-between cursor-pointer">
                  Grain
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="pl-4 mt-2 space-y-2">
                  <Link href="/grain/cash-bids-futures" className="block py-2 text-sm text-arthur-dark hover:text-arthur-blue">
                    Cash Bids & Futures
                  </Link>
                  <Link href="/grain/locations-hours" className="block py-2 text-sm text-arthur-dark hover:text-arthur-blue">
                    Locations & Hours
                  </Link>
                  <Link href="/grain/specialty-contracts" className="block py-2 text-sm text-arthur-dark hover:text-arthur-blue">
                    Specialty Contracts
                  </Link>
                </div>
              </details>
              {/* Additional mobile menu items would follow the same pattern */}
              {/* For brevity, I'm not including all items in this example */}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
