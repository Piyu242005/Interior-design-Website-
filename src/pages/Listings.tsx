import { MapPin, Bed, Bath, Square, Home, Building, ArrowRight } from 'lucide-react';

const listings = [
  {
    id: 1,
    title: 'Modern Luxury Apartment',
    location: 'Bandra West, Mumbai',
    price: '₹2.5 Cr',
    bedrooms: 3,
    bathrooms: 2,
    area: '1,850 sq ft',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
    type: 'Apartment',
  },
  {
    id: 2,
    title: 'Contemporary Villa',
    location: 'Juhu, Mumbai',
    price: '₹8.5 Cr',
    bedrooms: 5,
    bathrooms: 4,
    area: '4,200 sq ft',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
    type: 'Villa',
  },
  {
    id: 3,
    title: 'Penthouse Suite',
    location: 'Worli, Mumbai',
    price: '₹12 Cr',
    bedrooms: 4,
    bathrooms: 3,
    area: '3,500 sq ft',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
    type: 'Penthouse',
  },
  {
    id: 4,
    title: 'Studio Apartment',
    location: 'Andheri West, Mumbai',
    price: '₹85 L',
    bedrooms: 1,
    bathrooms: 1,
    area: '650 sq ft',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
    type: 'Studio',
  },
  {
    id: 5,
    title: 'Duplex Home',
    location: 'Powai, Mumbai',
    price: '₹3.2 Cr',
    bedrooms: 4,
    bathrooms: 3,
    area: '2,800 sq ft',
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&h=600&fit=crop',
    type: 'Duplex',
  },
  {
    id: 6,
    title: 'Sea View Apartment',
    location: 'Marine Drive, Mumbai',
    price: '₹6.5 Cr',
    bedrooms: 3,
    bathrooms: 2,
    area: '2,200 sq ft',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop',
    type: 'Apartment',
  },
];

export function Listings() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Glassmorphism */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-slate-900 to-indigo-900">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920')] bg-cover bg-center opacity-20" />
          {/* Floating orbs */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          {/* Glass card for hero content */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12 shadow-2xl">
            <h1 className="text-5xl md:text-7xl font-light mb-6 text-white tracking-tight">
              Property <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Listings</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-light">
              Discover beautifully designed properties ready for you to call home
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

      {/* Stats Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/50 to-slate-900" />
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Home, value: '50+', label: 'Properties' },
              { icon: Building, value: '15+', label: 'Locations' },
              { icon: MapPin, value: '100%', label: 'Prime Areas' },
              { icon: Bed, value: '200+', label: 'Happy Families' },
            ].map((stat, index) => (
              <div key={index} className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 text-center group hover:bg-white/10 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-3 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon size={24} />
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Listings Grid */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-indigo-900" />
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-white">
              Featured <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Properties</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Handpicked luxury properties in prime locations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {listings.map((listing) => (
              <div
                key={listing.id}
                className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-amber-500/30"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full text-sm font-medium text-white shadow-lg">
                      {listing.type}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-4 py-2 backdrop-blur-xl bg-white/20 border border-white/30 rounded-full text-sm font-bold text-white">
                      {listing.price}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-amber-400 text-sm mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    {listing.location}
                  </div>
                  <h3 className="text-xl font-light text-white mb-4">{listing.title}</h3>
                  
                  <div className="flex items-center justify-between text-white/60 text-sm border-t border-white/10 pt-4 mb-4">
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-1 text-amber-400" />
                      {listing.bedrooms} Beds
                    </div>
                    <div className="flex items-center">
                      <Bath className="w-4 h-4 mr-1 text-amber-400" />
                      {listing.bathrooms} Baths
                    </div>
                    <div className="flex items-center">
                      <Square className="w-4 h-4 mr-1 text-amber-400" />
                      {listing.area}
                    </div>
                  </div>
                  
                  <button className="w-full group/btn inline-flex items-center justify-center px-6 py-3 backdrop-blur-xl bg-white/5 border border-white/20 text-white font-medium rounded-xl hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-600 hover:border-transparent transition-all duration-300">
                    View Details
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 to-slate-900" />
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-amber-500/10 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-xl bg-gradient-to-br from-amber-500/20 to-orange-600/20 border border-amber-500/30 rounded-3xl p-12 md:p-16 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-white">
              Looking for Your <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Dream Home</span>?
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto text-lg">
              Get in touch with our property experts to find the perfect space for you.
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-medium rounded-xl hover:bg-white/90 transition-all duration-300 shadow-lg transform hover:-translate-y-1">
              Contact Us Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
