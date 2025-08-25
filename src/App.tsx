import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
// import BlobCursor from './components/BlobCursor'; // Commenting out to fix timer issue
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage';

type Page = 'home' | 'about' | 'services' | 'portfolio' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'portfolio':
        return <PortfolioPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* <BlobCursor /> */} {/* Disabling BlobCursor to prevent environment-specific timer crashes */}
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <motion.main
        key={currentPage}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {renderPage()}
      </motion.main>
    </div>
  );
}

export default App;
