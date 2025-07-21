import React from 'react';
import Link from 'next/link';

interface UtilityMenuProps {
  className?: string;
  variant?: 'header' | 'footer';
}

const UtilityMenu: React.FC<UtilityMenuProps> = ({ 
  className = '', 
  variant = 'header' 
}) => {
  // Different styling based on where the menu is used
  const linkBaseClasses = variant === 'header' 
    ? 'text-sm hover:text-arthur-gold transition duration-300' 
    : 'text-sm hover:text-arthur-gold transition duration-300';

  return (
    <nav className={`flex flex-wrap gap-4 ${className}`} aria-label="Utility navigation">
      <Link href="/careers" className={linkBaseClasses}>
        Careers
      </Link>
      <Link href="/contact-us" className={linkBaseClasses}>
        Contact Us
      </Link>
      <Link href="/grower-insights" className={linkBaseClasses}>
        Grower Insights
      </Link>
      <Link href="/app-download" className={linkBaseClasses}>
        App Download
      </Link>
      <Link href="/login" className={`${linkBaseClasses} ${variant === 'header' ? 'font-medium' : ''}`}>
        Login
      </Link>
    </nav>
  );
};

export default UtilityMenu;
