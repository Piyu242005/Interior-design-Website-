import { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, Sparkles, Star, Award, Users, Building2, Play, ChevronDown, Palette, Lightbulb, Layers, Zap } from 'lucide-react';
import { supabase, type PortfolioItem } from '../lib/supabase';

interface HomeProps {
  onNavigate: (page: string) => void;
  darkMode?: boolean;
}

export function Home({ onNavigate }: HomeProps) {
  const [featuredProjects, setFeaturedProjects] = useState<PortfolioItem[]>([]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    loadFeaturedProjects();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const loadFeaturedProjects = async () => {
    const { data } = await supabase
      .from('portfolio_items')
      .select('*')
      .eq('featured', true)
      .limit(6);

    if (data) setFeaturedProjects(data);
  };

  const stats = [
    { value: '150+', label: 'Projects Completed', icon: Building2 },
    { value: '200+', label: 'Happy Clients', icon: Users },
    { value: '25+', label: 'Design Awards', icon: Award },
    { value: '15+', label: 'Years Experience', icon: Star },
  ];

  const services = [
    { icon: Palette, title: 'Interior Design', desc: 'Complete space transformation with curated aesthetics' },
    { icon: Lightbulb, title: 'Lighting Design', desc: 'Ambient solutions for perfect atmosphere' },
    { icon: Layers, title: 'Space Planning', desc: 'Optimized layouts for maximum functionality' },
    { icon: Zap, title: 'Smart Homes', desc: 'Integrated technology for modern living' },
  ];

  const testimonials = [
    { name: 'Priya Sharma', role: 'Homeowner, Mumbai', text: 'D NEST transformed our apartment into a dream home. Every detail was thoughtfully crafted.', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { name: 'Rahul Mehta', role: 'CEO, TechStart', text: 'Our office space is now inspiring and productive. The team exceeded all expectations.', image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { name: 'Anita Desai', role: 'Restaurant Owner', text: 'Professional, creative, and delivered on time. Our restaurant design is absolutely stunning.', image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150' },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section - Cinematic Full Screen */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Video/Image Background with Overlay */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-slate-900" />
          
          {/* Animated Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-amber-500/15 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '4s' }} />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-5 py-2 mb-8">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-sm text-white/90 font-medium">Award-Winning Design Studio</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
                We Create
                <span className="block mt-2 bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">
                  Living Art
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-white/70 max-w-xl mb-10 leading-relaxed">
                Transform your space into a masterpiece. We blend innovation with elegance to craft interiors that inspire and elevate everyday living.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => onNavigate('portfolio')}
                  className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 rounded-full text-white font-semibold transition-all duration-300 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105 flex items-center"
                >
                  View Our Work
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => onNavigate('contact')}
                  className="group px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/30 rounded-full text-white font-semibold transition-all duration-300 flex items-center"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Watch Showreel
                </button>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/10">
                {stats.slice(0, 3).map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-white/50">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Featured Image Card */}
            <div className="relative hidden lg:block">
              <div className="relative">
                {/* Main Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
                  <img 
                    src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Featured Interior"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-4">
                      <p className="text-amber-400 text-sm font-medium mb-1">Latest Project</p>
                      <p className="text-white font-semibold">Modern Luxury Villa</p>
                    </div>
                  </div>
                </div>

                {/* Floating Card 1 */}
                <div className="absolute -top-4 -right-4 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-4 shadow-xl animate-float">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">25+</p>
                      <p className="text-white/60 text-xs">Design Awards</p>
                    </div>
                  </div>
                </div>

                {/* Floating Card 2 */}
                <div className="absolute -bottom-4 -left-4 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center space-x-3">
                    <div className="flex -space-x-2">
                      <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=50" className="w-8 h-8 rounded-full border-2 border-white/20" alt="" />
                      <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=50" className="w-8 h-8 rounded-full border-2 border-white/20" alt="" />
                      <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=50" className="w-8 h-8 rounded-full border-2 border-white/20" alt="" />
                    </div>
                    <div>
                      <p className="text-white font-bold">200+</p>
                      <p className="text-white/60 text-xs">Happy Clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/50" />
        </div>
      </section>

      {/* Services Section - Bento Grid */}
      <section className="relative py-24 bg-slate-900">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-500 text-sm font-semibold tracking-wider uppercase">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Crafting Exceptional <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Spaces</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              From concept to completion, we deliver comprehensive design solutions tailored to your vision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-amber-500/20">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-white/60">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects - Masonry Style */}
      <section className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <span className="text-amber-500 text-sm font-semibold tracking-wider uppercase">Portfolio</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
                Featured <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Projects</span>
              </h2>
            </div>
            <button 
              onClick={() => onNavigate('portfolio')}
              className="mt-6 md:mt-0 group text-amber-500 hover:text-amber-400 font-medium flex items-center transition-colors"
            >
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer ${
                  index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                onClick={() => onNavigate('portfolio')}
              >
                <div className={`${index === 0 ? 'h-[500px]' : 'h-[240px]'} overflow-hidden`}>
                  <img
                    src={project.image_url}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-amber-400 text-sm font-medium uppercase tracking-wider">{project.category}</span>
                    <h3 className="text-xl font-semibold text-white mt-2">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Modern Cards */}
      <section className="relative py-24 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center group hover:border-amber-500/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-amber-500/20">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-2">{stat.value}</div>
                <div className="text-white/60 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-24 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-amber-500 text-sm font-semibold tracking-wider uppercase">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-8">
                Experience the <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">D NEST</span> Difference
              </h2>

              <div className="space-y-6">
                {[
                  'Award-winning design team with 15+ years of expertise',
                  'Personalized approach tailored to your unique vision',
                  'End-to-end project management for seamless delivery',
                  'Sustainable and innovative design solutions'
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center shadow-lg shadow-amber-500/20">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white/80 text-lg leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => onNavigate('about')}
                className="mt-10 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 rounded-full text-white font-semibold transition-all duration-300"
              >
                Learn More About Us
              </button>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Our Team"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              
              {/* Experience Badge */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-amber-500 to-orange-500 rounded-3xl p-6 shadow-2xl">
                <div className="text-4xl font-bold text-white">15+</div>
                <div className="text-white/80 text-sm font-medium">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-500 text-sm font-semibold tracking-wider uppercase">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
              What Our <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Clients Say</span>
            </h2>
          </div>

          <div className="relative">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed mb-8 italic">
                "{testimonials[activeTestimonial].text}"
              </p>
              <div className="flex items-center justify-center space-x-4">
                <img 
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-amber-500"
                />
                <div className="text-left">
                  <p className="text-white font-semibold">{testimonials[activeTestimonial].name}</p>
                  <p className="text-white/60 text-sm">{testimonials[activeTestimonial].role}</p>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === activeTestimonial ? 'bg-amber-500 w-8' : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-slate-900/95" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Transform<br />
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Your Space?</span>
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Let's create something extraordinary together. Schedule a free consultation today.
          </p>
          <button 
            onClick={() => onNavigate('contact')}
            className="group px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 rounded-full text-white font-semibold text-lg transition-all duration-300 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105 flex items-center mx-auto"
          >
            Start Your Project
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Animation Styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}


