import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Languages, ChevronDown } from 'lucide-react';

type Page = 'home' | 'about' | 'services' | 'portfolio' | 'contact';

interface NavigationProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const navItems = [
    { id: 'home' as Page, label: 'Home' },
    { id: 'about' as Page, label: 'About Us' },
    { id: 'services' as Page, label: 'Services' },
    { id: 'portfolio' as Page, label: 'Portfolio' },
    { id: 'contact' as Page, label: 'Contact' },
  ];

  const languages = [
    { code: 'EN', label: 'English' },
    { code: 'FR', label: 'Français' },
    { code: 'AR', label: 'العربية' },
  ];
  const [selectedLang, setSelectedLang] = useState(languages[0]);

  return (
    <motion.nav 
      className="bg-background/80 backdrop-blur-lg sticky top-0 z-50 border-b border-border"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0 cursor-pointer"
            onClick={() => setCurrentPage('home')}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center space-x-3">
              <img src="https://i.ibb.co/9gX4g2C/cie-logo.png" alt="CEI Holding Logo" className="h-10 w-auto" />
              <span className="text-xl font-bold text-brand tracking-wider">CEI Holding</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className="relative px-1 py-2 text-sm font-medium transition-colors duration-300"
                >
                  <span className={currentPage === item.id ? 'text-brand font-semibold' : 'text-text-secondary hover:text-brand'}>
                    {item.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center px-3 py-2 text-sm font-medium text-text-secondary hover:text-brand transition-colors duration-300"
              >
                <Languages size={16} className="mr-2" />
                <span>{selectedLang.code}</span>
                <ChevronDown size={16} className={`ml-1 transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              {isLangMenuOpen && (
                <motion.div
                  className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg border border-border"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <ul className="py-1">
                    {languages.map(lang => (
                      <li key={lang.code}>
                        <button
                          onClick={() => {
                            setSelectedLang(lang);
                            setIsLangMenuOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 text-sm text-text-secondary hover:bg-primary hover:text-brand"
                        >
                          {lang.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-text-secondary hover:text-brand p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-background border-t border-border"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block px-3 py-3 rounded-md text-base font-medium w-full text-left transition-colors duration-200 ${
                  currentPage === item.id
                    ? 'text-brand bg-secondary'
                    : 'text-text-secondary hover:text-brand hover:bg-secondary'
                }`}
              >
                {item.label}
              </button>
            ))}
             <div className="px-3 pt-4 pb-2 border-t border-border">
                <h3 className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">Language</h3>
                <div className="space-y-1">
                {languages.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setSelectedLang(lang);
                      }}
                      className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200 ${
                        selectedLang.code === lang.code
                          ? 'text-brand bg-secondary'
                          : 'text-text-secondary hover:text-brand hover:bg-secondary'
                      }`}
                    >
                      {lang.label}
                    </button>
                ))}
                </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;
