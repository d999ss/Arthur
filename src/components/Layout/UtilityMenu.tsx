import React from 'react';
import Link from 'next/link';

interface UtilityMenuProps {
  className?: string;
}

const UtilityMenu: React.FC<UtilityMenuProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {/* Search Button */}
      <button 
        className="text-white hover:text-arthur-gold transition duration-300 flex items-center"
        aria-label="Search"
      >
        <span className="sr-only">Search</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
          />
        </svg>
      </button>

      {/* App Download */}
      <Link 
        href="/app-download" 
        className="text-white hover:text-arthur-gold transition duration-300 text-sm"
      >
        App Download
      </Link>

      {/* Login */}
      <Link 
        href="/login" 
        className="text-white hover:text-arthur-gold transition duration-300 flex items-center text-sm"
      >
        <span>Login</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-4 w-4 ml-1" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
          />
        </svg>
      </Link>
    </div>
  );
};

export default UtilityMenu;
