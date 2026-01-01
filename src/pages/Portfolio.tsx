import { useState } from 'react';
import { Maximize2, X } from 'lucide-react';

type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  description: string;
  image_url: string;
  featured: boolean;
  location?: string;
  year?: string;
};

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'minimal', label: 'Minimal' },
    { id: 'luxury', label: 'Luxury' }
  ];

  const portfolioItems: PortfolioItem[] = [
    {
      id: '1',
      title: 'Modern Scandinavian Living',
      category: 'residential',
      description: 'A serene living space featuring clean lines, natural materials, and a calming neutral palette that embodies Scandinavian design principles.',
      image_url: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
      featured: true,
      location: 'Mumbai, India',
      year: '2024'
    },
    {
      id: '2',
      title: 'Executive Office Suite',
      category: 'commercial',
      description: 'Sophisticated workspace design combining functionality with elegance, featuring custom furniture and ambient lighting.',
      image_url: 'https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=1200',
      featured: true,
      location: 'Pune, India',
      year: '2024'
    },
    {
      id: '3',
      title: 'Minimalist Zen Bedroom',
      category: 'minimal',
      description: 'A peaceful retreat with Japanese-inspired minimalism, featuring tatami elements and natural wood accents.',
      image_url: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=1200',
      featured: true,
      location: 'Bangalore, India',
      year: '2024'
    },
    {
      id: '4',
      title: 'Luxe Marble Kitchen',
      category: 'luxury',
      description: 'Opulent kitchen design with Italian marble countertops, gold accents, and state-of-the-art appliances.',
      image_url: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1200',
      featured: true,
      location: 'Delhi, India',
      year: '2024'
    },
    {
      id: '5',
      title: 'Contemporary Loft Space',
      category: 'residential',
      description: 'Industrial-chic loft featuring exposed brick, metal accents, and an open floor plan perfect for modern living.',
      image_url: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200',
      featured: false,
      location: 'Hyderabad, India',
      year: '2023'
    },
    {
      id: '6',
      title: 'Boutique Hotel Lobby',
      category: 'commercial',
      description: 'Welcoming hotel entrance with plush seating, artistic lighting fixtures, and a blend of modern and classic elements.',
      image_url: 'https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=1200',
      featured: false,
      location: 'Goa, India',
      year: '2023'
    }
  ];

  const filteredItems = selectedCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Glassmorphism */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-slate-900 to-indigo-900">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20" />
          {/* Floating orbs */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          {/* Glass card for hero content */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12 shadow-2xl">
            <h1 className="text-5xl md:text-7xl font-light mb-6 text-white tracking-tight">
              Our <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-light">
              Explore our collection of exceptional design projects
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/50 to-slate-900" />
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-white">
              Luxury <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Experience the pinnacle of interior design where every detail is crafted to perfection
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-500/30'
                    : 'backdrop-blur-xl bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-amber-500/30 cursor-pointer"
                onClick={() => setSelectedProject(item)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-amber-500/20 to-orange-600/20 border border-amber-500/30 rounded-full text-xs uppercase tracking-wider text-amber-400">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-light text-white mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm line-clamp-2 mb-4">{item.description}</p>
                  <div className="flex items-center gap-2 text-amber-400">
                    <Maximize2 size={16} />
                    <span className="text-sm">Click to view details</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProject.image_url}
                alt={selectedProject.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 backdrop-blur-xl bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <X size={20} />
              </button>
              <div className="absolute top-4 left-4">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full text-sm uppercase tracking-wider text-white font-medium">
                  {selectedProject.category}
                </span>
              </div>
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-light text-white mb-2">{selectedProject.title}</h2>
              {selectedProject.location && (
                <p className="text-amber-400 text-sm mb-4">{selectedProject.location} • {selectedProject.year}</p>
              )}
              <p className="text-white/70 leading-relaxed text-lg">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
