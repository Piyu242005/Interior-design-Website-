import { useState, useEffect } from 'react';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Portfolio } from './pages/Portfolio';
import { Contact } from './pages/Contact';
import { Listings } from './pages/Listings';
import { Menu, X, Home as HomeIcon, Info, Briefcase, Image, Mail, Building2, Moon, Sun } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.title = currentPage === 'home'
      ? 'D NEST Interior Design Studio - Transforming Spaces Into Dreams'
      : `${currentPage.charAt(0).toUpperCase() + currentPage.slice(1)} - D NEST Interior Design`;
  }, [currentPage]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: HomeIcon },
    { id: 'about', label: 'About', icon: Info },
    { id: 'services', label: 'Services', icon: Briefcase },
    { id: 'portfolio', label: 'Portfolio', icon: Image },
    { id: 'listings', label: 'Listings', icon: Building2 },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} darkMode={darkMode} />;
      case 'about':
        return <About onNavigate={setCurrentPage} />;
      case 'services':
        return <Services onNavigate={setCurrentPage} />;
      case 'portfolio':
        return <Portfolio />;
      case 'listings':
        return <Listings />;
      case 'contact':
        return <Contact onNavigate={setCurrentPage} />;
      default:
        return <Home onNavigate={setCurrentPage} darkMode={darkMode} />;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? darkMode 
              ? 'bg-slate-900/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20' 
              : 'bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center space-x-3 group"
            >
              <div className="h-14 w-auto transform group-hover:scale-105 transition-transform">
                <img 
                  src="/Piyu.png" 
                  alt="D NEST Logo" 
                  className="h-full w-auto object-contain drop-shadow-lg"
                />
              </div>
              <div className="flex flex-col items-start">
                <span className={`text-2xl font-light tracking-widest transition-colors ${
                  darkMode ? 'text-white' : isScrolled ? 'text-gray-800' : 'text-white'
                }`}>
                  D NEST
                </span>
                <span className="text-[0.65rem] uppercase tracking-[0.2em] text-amber-500">
                  Interior Design Studio
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group ${
                    currentPage === item.id
                      ? 'text-amber-500'
                      : darkMode 
                        ? 'text-gray-300 hover:text-white' 
                        : isScrolled 
                          ? 'text-gray-600 hover:text-gray-900' 
                          : 'text-gray-200 hover:text-white'
                  }`}
                >
                  <span className="relative z-10 flex items-center">
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.label}
                  </span>
                  {currentPage === item.id && (
                    <span className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full border border-amber-500/30" />
                  )}
                </button>
              ))}
              
              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`ml-4 p-2 rounded-full transition-all duration-300 ${
                  darkMode 
                    ? 'bg-white/10 hover:bg-white/20 text-yellow-400' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {darkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full transition-all duration-300 ${
                  darkMode 
                    ? 'bg-white/10 hover:bg-white/20 text-yellow-400' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {darkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg transition-colors ${
                  darkMode ? 'text-white hover:bg-white/10' : 'text-gray-800 hover:bg-gray-100'
                }`}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className={`px-4 pt-2 pb-4 space-y-1 border-t ${
            darkMode 
              ? 'bg-slate-900/95 backdrop-blur-xl border-white/10' 
              : 'bg-white/95 backdrop-blur-xl border-gray-200'
          }`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center w-full px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  currentPage === item.id
                    ? 'text-amber-500 bg-amber-500/10'
                    : darkMode 
                      ? 'text-gray-300 hover:text-white hover:bg-white/5' 
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main>
        {renderPage()}
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}

export default App;
