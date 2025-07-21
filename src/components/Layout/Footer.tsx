import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SocialMedia from './SocialMedia';
import UtilityMenu from '../Navigation/UtilityMenu';

const Footer: React.FC = () => {
  return (
    <footer className="bg-arthur-blue text-white">
      {/* Newsletter Signup */}
      <div className="bg-arthur-cream py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-arthur-blue mb-4">Stay Connected</h2>
            <p className="text-arthur-dark mb-6">Subscribe to our newsletter for market insights, company updates, and more.</p>
            <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-arthur-blue"
                required
              />
              <button 
                type="submit" 
                className="bg-arthur-blue text-white px-6 py-2 rounded-md hover:bg-arthur-gold transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-white">Arthur</span>
            </Link>
            <p className="mb-4">Where Innovation Grows, From the Ground Up.</p>
            <p className="text-sm">100 years in the field—and we're just getting started.</p>
            <div className="mt-6 flex space-x-4">
              {/* Social Media Icons */}
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-arthur-gold">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-arthur-gold">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-arthur-gold">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Site Map */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Site Map</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-arthur-gold">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/grain" className="hover:text-arthur-gold">
                  Grain
                </Link>
              </li>
              <li>
                <Link href="/products-services" className="hover:text-arthur-gold">
                  Products & Services
                </Link>
              </li>
              <li>
                <Link href="/innovation" className="hover:text-arthur-gold">
                  Innovation
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-arthur-gold">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <UtilityMenu variant="footer" className="flex-col items-start gap-2" />
          </div>
          
          {/* Contact & Legal */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact & Legal</h3>
            <address className="not-italic mb-4">
              <p className="mb-1">Corporate Office</p>
              <p className="mb-1">4111 30th Avenue S</p>
              <p className="mb-1">Fargo, ND 58104</p>
              <p className="mb-1">
                <Link href="tel:7012358486" className="hover:text-arthur-gold transition duration-300">
                  (701) 235-8486
                </Link>
              </p>
            </address>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="hover:text-arthur-gold transition duration-300">Privacy Policy</Link></li>
              <li><Link href="/terms-of-use" className="hover:text-arthur-gold transition duration-300">Terms of Use</Link></li>
              <li><Link href="/accessibility" className="hover:text-arthur-gold transition duration-300">Accessibility</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright Bar */}
      <div className="bg-arthur-dark-blue py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} The Arthur Companies. All rights reserved.</p>
            <div className="mt-2 md:mt-0">
              <div className="flex space-x-4">
                <Link href="/about/newsroom" className="text-sm hover:text-arthur-gold transition duration-300">Press</Link>
                <Link href="/sitemap" className="text-sm hover:text-arthur-gold transition duration-300">Sitemap</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
