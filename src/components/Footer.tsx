import React from 'react';
import { Mail } from 'lucide-react';

type Page = 'home' | 'about' | 'services' | 'portfolio' | 'contact';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const navLinks = [
    { id: 'home' as Page, label: 'Home' },
    { id: 'about' as Page, label: 'About Us' },
    { id: 'services' as Page, label: 'Services' },
    { id: 'portfolio' as Page, label: 'Portfolio' },
    { id: 'contact' as Page, label: 'Contact' },
  ];

  return (
    <footer className="bg-primary text-text-secondary py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3">
              <img 
                src="https://i.ibb.co/pXhXDM0/cei-logo-3d.png" 
                alt="CEI Holding Logo" 
                className="h-10 w-auto" 
              />
              <span className="text-xl font-bold text-brand tracking-wider">CEI Holding</span>
            </div>
            <p className="text-sm mt-4">
              Driving profitable and purposeful investments across key global sectors.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-bold text-text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => setCurrentPage(link.id)}
                    className="hover:text-brand transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-text-primary mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <Mail size={16} className="mr-3 text-accent flex-shrink-0" />
                <a href="mailto:info.ceiholding@gmail.com" className="hover:text-brand">
                  info.ceiholding@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Placeholder for social or other info */}
          <div>
            <h4 className="font-bold text-text-primary mb-4">Follow Us</h4>
            <p className="text-sm">Social media links coming soon.</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-xs">
          <p>&copy; {new Date().getFullYear()} CEI Holding. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
