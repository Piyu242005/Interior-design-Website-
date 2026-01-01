import { Award, Heart, Lightbulb, Users, Code, Wrench } from 'lucide-react';
import { Button } from '../components/Button';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export function About({ onNavigate }: AboutProps) {
  const team = [
    {
      name: 'Piyush Ramteke',
      role: 'Founder & Lead Developer',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Piyush specializes in data-driven solutions, clean design, and efficient development. He focuses on building practical, user-friendly, and scalable projects with attention to detail.',
      icon: Code
    },
    {
      name: 'Nikhil Sonone',
      role: 'Co-Founder & Technical Associate',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Nikhil contributes to development, problem-solving, and implementation support, ensuring projects are executed smoothly and meet performance expectations.',
      icon: Wrench
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Quality',
      description: 'We are committed to delivering high-quality work with attention to every detail, ensuring meaningful and effective results.'
    },
    {
      icon: Lightbulb,
      title: 'Creativity',
      description: 'We combine creative ideas with practical solutions to create designs that are both attractive and functional for real users.'
    },
    {
      icon: Award,
      title: 'Continuous Improvement',
      description: 'We believe in constantly learning and improving, staying updated with the latest trends and technologies to deliver the best.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Glassmorphism */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-slate-900 to-indigo-900">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-30" />
          {/* Floating orbs */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Glass card for hero content */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12 shadow-2xl">
            <h1 className="text-5xl md:text-7xl font-light mb-6 text-white tracking-tight">
              About <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Piyu</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-light">
              Delivering visually appealing and user-friendly digital experiences
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

      {/* Our Story Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/50 to-slate-900" />
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
              <h2 className="text-4xl md:text-5xl font-light mb-8 text-white">
                Our <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Story</span>
              </h2>
              <div className="space-y-6 text-white/70 leading-relaxed text-lg">
                <p>
                  Founded with a passion for clean, modern, and functional design, Piyu was created 
                  to deliver visually appealing and user-friendly digital experiences. The focus is 
                  on simplicity, clarity, and purposeful design that enhances usability and aesthetics.
                </p>
                <p>
                  Each project is built with attention to detail, combining creative ideas with 
                  practical solutions. The goal is to create designs that are not only attractive 
                  but also meaningful and effective for real users.
                </p>
                <p>
                  Created by Piyu, this platform reflects a commitment to quality, creativity, 
                  and continuous improvement.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-2 shadow-xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <img
                  src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Design detail"
                  className="rounded-xl w-full h-full object-cover"
                />
              </div>
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-2 shadow-xl mt-8 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <img
                  src="https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Interior space"
                  className="rounded-xl w-full h-full object-cover"
                />
              </div>
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-2 shadow-xl -mt-8 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <img
                  src="https://images.pexels.com/photos/2507010/pexels-photo-2507010.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Modern design"
                  className="rounded-xl w-full h-full object-cover"
                />
              </div>
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-2 shadow-xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <img
                  src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Elegant room"
                  className="rounded-xl w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-indigo-900" />
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-white">
              Our Core <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index} 
                  className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 text-center shadow-2xl hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-amber-500/30"
                >
                  <div className="w-20 h-20 backdrop-blur-xl bg-gradient-to-br from-amber-500/80 to-orange-600/80 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-6 transition-transform shadow-lg shadow-amber-500/20">
                    <Icon size={40} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-light mb-4 text-white">{value.title}</h3>
                  <p className="text-white/60 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 via-purple-900/50 to-slate-900" />
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute top-0 right-1/3 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-white">
              Meet Our <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              A small, focused team committed to delivering quality, creativity, and reliable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 text-center shadow-2xl hover:bg-white/10 transition-all duration-500 hover:border-amber-500/30"
              >
                <div className="relative mb-6">
                  <div className="aspect-square overflow-hidden rounded-2xl max-w-xs mx-auto border-2 border-white/10 shadow-xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 backdrop-blur-xl bg-gradient-to-r from-amber-500 to-orange-600 rounded-full p-3 shadow-lg shadow-amber-500/30">
                    <member.icon size={24} className="text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-medium mb-2 text-white mt-4">{member.name}</h3>
                <p className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent text-sm mb-4 font-medium">{member.role}</p>
                <p className="text-white/60 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-purple-900" />
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 md:p-16 shadow-2xl text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 backdrop-blur-xl bg-gradient-to-br from-amber-500/80 to-orange-600/80 rounded-2xl mb-8 shadow-lg shadow-amber-500/20">
              <Users size={40} className="text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-light mb-8 text-white">
              Our <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Philosophy</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              We believe that exceptional design is a harmonious blend of aesthetics, 
              functionality, and user experience. Our philosophy is rooted in understanding 
              that every project has unique requirements, and our role is to deliver 
              solutions that are both beautiful and practical.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              We approach each project with fresh perspectives, creating unique solutions 
              that balance creativity with usability. The result is work that feels both 
              modern and timeless, sophisticated yet accessible, innovative yet reliable.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900 to-slate-900" />
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-amber-500/10 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-xl bg-gradient-to-br from-amber-500/20 to-orange-600/20 border border-amber-500/30 rounded-3xl p-12 md:p-16 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-white">
              Let's Create Something <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Beautiful</span> Together
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto text-lg">
              Ready to start your design journey? Contact us today to discuss your project.
            </p>
            <Button size="lg" onClick={() => onNavigate('contact')}>
              Get In Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
