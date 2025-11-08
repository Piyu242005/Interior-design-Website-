import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Portfolio } from './pages/Portfolio';
import { Testimonials } from './pages/Testimonials';
import { Contact } from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    document.title = currentPage === 'home'
      ? 'D NEST Interior Design Studio - Transforming Spaces Into Dreams'
      : `${currentPage.charAt(0).toUpperCase() + currentPage.slice(1)} - D NEST Interior Design`;
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'about':
        return <About onNavigate={setCurrentPage} />;
      case 'services':
        return <Services onNavigate={setCurrentPage} />;
      case 'portfolio':
        return <Portfolio />;
      case 'testimonials':
        return <Testimonials />;
      case 'contact':
        return <Contact onNavigate={setCurrentPage} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="pt-20">
        {renderPage()}
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}

export default App;
