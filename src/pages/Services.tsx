import { 
  Home, 
  Building2, 
  Palette, 
  Lightbulb, 
  Sofa, 
  TreePine,
  ArrowRight, 
  CheckCircle2,
  Sparkles,
  Star
} from 'lucide-react';
import { Button } from '../components/Button';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      icon: Home,
      title: 'Residential Design',
      description: 'Transform your house into a dream home with personalized interior solutions that reflect your lifestyle and personality.',
      features: ['Custom home design', 'Space optimization', 'Furniture curation', 'Color consultation'],
      gradient: 'from-amber-500 to-orange-600',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Building2,
      title: 'Commercial Spaces',
      description: 'Create inspiring workspaces that boost productivity and leave lasting impressions on clients and employees alike.',
      features: ['Office planning', 'Retail design', 'Brand integration', 'Ergonomic solutions'],
      gradient: 'from-blue-500 to-indigo-600',
      image: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Palette,
      title: '3D Visualization',
      description: 'Experience your space before it exists with photorealistic 3D renders and immersive virtual walkthroughs.',
      features: ['3D rendering', 'Virtual tours', 'Material preview', 'Design iterations'],
      gradient: 'from-purple-500 to-pink-600',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Lightbulb,
      title: 'Lighting Design',
      description: 'Illuminate your spaces with strategic lighting that enhances ambiance and highlights architectural features.',
      features: ['Ambient lighting', 'Task lighting', 'Accent lighting', 'Smart controls'],
      gradient: 'from-yellow-500 to-amber-600',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Sofa,
      title: 'Furniture Design',
      description: 'Custom furniture pieces designed exclusively for your space, blending form and function seamlessly.',
      features: ['Custom pieces', 'Material selection', 'Ergonomic design', 'Artisan crafting'],
      gradient: 'from-emerald-500 to-teal-600',
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: TreePine,
      title: 'Landscape Integration',
      description: 'Seamlessly blend indoor and outdoor spaces with biophilic design principles and natural elements.',
      features: ['Indoor gardens', 'Natural materials', 'Outdoor living', 'Sustainable design'],
      gradient: 'from-green-500 to-emerald-600',
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const process = [
    { step: '01', title: 'Discovery', desc: 'Understanding your vision' },
    { step: '02', title: 'Concept', desc: 'Creating the blueprint' },
    { step: '03', title: 'Design', desc: 'Detailed planning' },
    { step: '04', title: 'Execute', desc: 'Bringing it to life' }
  ];

  const stats = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '40+', label: 'Happy Clients' },
    { value: '5+', label: 'Years Experience' },
    { value: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Glassmorphism */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
            <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>

        {/* Floating Glass Cards */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 w-32 h-32 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 rotate-12 animate-bounce" style={{ animationDuration: '3s' }} />
          <div className="absolute bottom-1/4 right-10 w-24 h-24 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 -rotate-12 animate-bounce" style={{ animationDuration: '4s' }} />
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-amber-500/20 backdrop-blur-lg rounded-xl border border-amber-500/30 rotate-45 animate-bounce" style={{ animationDuration: '5s' }} />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          {/* Glass Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8">
            <Sparkles className="text-amber-400" size={20} />
            <span className="text-sm font-medium">Premium Design Services</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-200 to-white">
            Crafting Dream Spaces
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            From concept to completion, we transform ordinary spaces into extraordinary experiences
          </p>

          {/* Glass Stats Bar */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 md:p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Featured Projects - Glass Cards */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="text-amber-400">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Showcasing our finest work in modern architecture and interior design
            </p>
          </div>

          {/* Large Featured Images with Glass Overlay */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Dark Modern House */}
            <div className="group relative rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
                alt="Modern Dark Architecture"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="text-amber-400 fill-amber-400" size={16} />
                    <span className="text-amber-400 text-sm font-medium">Featured Project</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Modern Dark Villa</h3>
                  <p className="text-gray-300 text-sm">Minimalist design with premium finishes and smart home integration</p>
                </div>
              </div>
            </div>

            {/* White Modern House */}
            <div className="group relative rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                alt="Modern White Architecture"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="text-amber-400 fill-amber-400" size={16} />
                    <span className="text-amber-400 text-sm font-medium">Featured Project</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Contemporary White House</h3>
                  <p className="text-gray-300 text-sm">Clean lines, natural light, and seamless indoor-outdoor living</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid with Glassmorphism */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900" />
        
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-amber-400">Services</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive design solutions tailored to bring your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/10"
                >
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                    
                    {/* Icon Badge */}
                    <div className={`absolute bottom-4 left-4 w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <Icon className="text-white" size={28} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{service.description}</p>
                    
                    {/* Features */}
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="text-amber-400 flex-shrink-0" size={14} />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-amber-400">Process</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A streamlined approach ensuring exceptional results every time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div key={index} className="relative group">
                {/* Connector Line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-amber-500 to-transparent" />
                )}
                
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="text-5xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700" />
        
        {/* Glass Decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 backdrop-blur-lg rounded-full" />
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 backdrop-blur-lg rounded-full" />
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 backdrop-blur-lg rounded-full" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-12">
            <Sparkles className="mx-auto text-white mb-6" size={48} />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Let's collaborate to create something extraordinary. Schedule a free consultation and let's bring your vision to life.
            </p>
            <Button size="lg" onClick={() => onNavigate('contact')}>
              Start Your Project
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
