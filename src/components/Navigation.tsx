import { useState, useEffect } from 'react';
import { Menu, X, Home, Info, Briefcase, Image, Mail, Building2 } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: Info },
    { id: 'services', label: 'Services', icon: Briefcase },
    { id: 'portfolio', label: 'Portfolio', icon: Image },
    { id: 'listings', label: 'Listings', icon: Building2 },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 group"
          >
            <div className="h-16 w-auto transform group-hover:scale-105 transition-transform">
              <img 
                src="/Piyu.png" 
                alt="D NEST Logo" 
                className="h-full w-auto object-contain drop-shadow-lg"
              />
            </div>
            <div className="flex flex-col items-start">
              <span className={`text-2xl font-light tracking-widest ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                D NEST
              </span>
              <span className={`text-[0.65rem] uppercase tracking-[0.2em] ${isScrolled ? 'text-amber-600' : 'text-amber-400'}`}>
                Interior Design Studio
              </span>
            </div>
          </button>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 group ${
                    currentPage === item.id
                      ? 'text-amber-500 bg-white/10 backdrop-blur-sm shadow-sm'
                      : isScrolled ? 'text-gray-700 hover:text-amber-600 hover:bg-white/5' : 'text-gray-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <item.icon className={`w-4 h-4 mr-2 transition-transform group-hover:-translate-y-0.5 ${
                    currentPage === item.id ? 'text-amber-500' : isScrolled ? 'text-gray-500 group-hover:text-amber-600' : 'text-gray-400 group-hover:text-white'
                  }`} />
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors ${
                isScrolled ? 'text-gray-800 hover:text-amber-600' : 'text-white hover:text-amber-400'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 backdrop-blur-xl border-t border-white/20 shadow-xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`flex items-center w-full px-3 py-4 rounded-md text-base font-medium transition-colors ${
                currentPage === item.id
                  ? 'text-amber-600 bg-amber-50/50'
                  : 'text-gray-700 hover:text-amber-600 hover:bg-gray-50/50'
              }`}
            >
              <item.icon className={`w-5 h-5 mr-3 ${
                currentPage === item.id ? 'text-amber-600' : 'text-gray-400'
              }`} />
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
