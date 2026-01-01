import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Instagram, Twitter, Linkedin } from 'lucide-react';

interface ContactProps {
  onNavigate: (page: string) => void;
}

export function Contact({ onNavigate }: ContactProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Glassmorphism */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-slate-900 to-indigo-900">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20" />
          {/* Floating orbs */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          {/* Glass card for hero content */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12 shadow-2xl">
            <h1 className="text-5xl md:text-7xl font-light mb-6 text-white tracking-tight">
              Get In <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-light">
              Ready to start your design journey? We'd love to hear from you.
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

      {/* Contact Form Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/50 to-slate-900" />
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info Panel */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-light mb-6 text-white">
                Contact <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Information</span>
              </h2>
              <p className="text-white/60 mb-10 text-lg">
                Fill up the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-4 group">
                  <div className="w-14 h-14 backdrop-blur-xl bg-gradient-to-br from-amber-500/20 to-orange-600/20 border border-amber-500/30 rounded-2xl flex items-center justify-center group-hover:from-amber-500/40 group-hover:to-orange-600/40 transition-all duration-300 shadow-lg">
                    <Phone className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50 mb-1">Phone</p>
                    <p className="text-white font-medium text-lg">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-14 h-14 backdrop-blur-xl bg-gradient-to-br from-amber-500/20 to-orange-600/20 border border-amber-500/30 rounded-2xl flex items-center justify-center group-hover:from-amber-500/40 group-hover:to-orange-600/40 transition-all duration-300 shadow-lg">
                    <Mail className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50 mb-1">Email</p>
                    <p className="text-white font-medium text-lg">hello@dnest.design</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-14 h-14 backdrop-blur-xl bg-gradient-to-br from-amber-500/20 to-orange-600/20 border border-amber-500/30 rounded-2xl flex items-center justify-center group-hover:from-amber-500/40 group-hover:to-orange-600/40 transition-all duration-300 shadow-lg">
                    <MapPin className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50 mb-1">Location</p>
                    <p className="text-white font-medium text-lg">123 Design Street, Mumbai</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-14 h-14 backdrop-blur-xl bg-gradient-to-br from-amber-500/20 to-orange-600/20 border border-amber-500/30 rounded-2xl flex items-center justify-center group-hover:from-amber-500/40 group-hover:to-orange-600/40 transition-all duration-300 shadow-lg">
                    <Clock className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50 mb-1">Hours</p>
                    <p className="text-white font-medium text-lg">Mon - Sat: 10am - 7pm</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-white/50 text-sm mb-4">Follow us on</p>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-amber-500/20 hover:to-orange-600/20 hover:border-amber-500/30 transition-all duration-300">
                    <Instagram className="w-5 h-5 text-white/70 hover:text-amber-400" />
                  </a>
                  <a href="#" className="w-12 h-12 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-amber-500/20 hover:to-orange-600/20 hover:border-amber-500/30 transition-all duration-300">
                    <Twitter className="w-5 h-5 text-white/70 hover:text-amber-400" />
                  </a>
                  <a href="#" className="w-12 h-12 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-amber-500/20 hover:to-orange-600/20 hover:border-amber-500/30 transition-all duration-300">
                    <Linkedin className="w-5 h-5 text-white/70 hover:text-amber-400" />
                  </a>
                </div>
              </div>
            </div>

            {/* Form Panel */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-light mb-8 text-white">
                Send Us a <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Message</span>
              </h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-medium text-white/70 mb-2 group-focus-within:text-amber-400 transition-colors">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500/50 focus:bg-white/10 outline-none transition-all duration-300"
                      placeholder="John"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium text-white/70 mb-2 group-focus-within:text-amber-400 transition-colors">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500/50 focus:bg-white/10 outline-none transition-all duration-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-medium text-white/70 mb-2 group-focus-within:text-amber-400 transition-colors">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500/50 focus:bg-white/10 outline-none transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium text-white/70 mb-2 group-focus-within:text-amber-400 transition-colors">Phone</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500/50 focus:bg-white/10 outline-none transition-all duration-300"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-white/70 mb-2 group-focus-within:text-amber-400 transition-colors">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500/50 focus:bg-white/10 outline-none transition-all duration-300"
                    placeholder="How can we help you?"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-white/70 mb-2 group-focus-within:text-amber-400 transition-colors">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500/50 focus:bg-white/10 outline-none transition-all duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button 
                  type="button"
                  className="w-full group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-medium rounded-xl hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transform hover:-translate-y-1"
                >
                  <Send className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map / Additional Info Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-indigo-900" />
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-white">
              Why Choose <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Us</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              We're committed to delivering exceptional experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 text-center shadow-2xl hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-amber-500/30">
              <div className="w-20 h-20 backdrop-blur-xl bg-gradient-to-br from-amber-500/80 to-orange-600/80 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-6 transition-transform shadow-lg shadow-amber-500/20">
                <MessageCircle size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-light mb-4 text-white">Quick Response</h3>
              <p className="text-white/60 leading-relaxed">We respond to all inquiries within 24 hours to ensure your project gets started on time.</p>
            </div>

            <div className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 text-center shadow-2xl hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-amber-500/30">
              <div className="w-20 h-20 backdrop-blur-xl bg-gradient-to-br from-amber-500/80 to-orange-600/80 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-6 transition-transform shadow-lg shadow-amber-500/20">
                <Phone size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-light mb-4 text-white">Free Consultation</h3>
              <p className="text-white/60 leading-relaxed">Get a free initial consultation to discuss your vision and explore possibilities together.</p>
            </div>

            <div className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 text-center shadow-2xl hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-amber-500/30">
              <div className="w-20 h-20 backdrop-blur-xl bg-gradient-to-br from-amber-500/80 to-orange-600/80 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-6 transition-transform shadow-lg shadow-amber-500/20">
                <MapPin size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-light mb-4 text-white">Local Expertise</h3>
              <p className="text-white/60 leading-relaxed">Deep understanding of local design trends and requirements for perfect results.</p>
            </div>
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
              Ready to Start Your <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Project</span>?
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto text-lg">
              Let's bring your vision to life. Schedule a free consultation today.
            </p>
            <button 
              onClick={() => onNavigate('services')}
              className="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-medium rounded-xl hover:bg-white/90 transition-all duration-300 shadow-lg transform hover:-translate-y-1"
            >
              View Our Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
