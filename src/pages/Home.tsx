import { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { Button } from '../components/Button';
import { Section, SectionTitle, SectionSubtitle } from '../components/Section';
import { supabase, type PortfolioItem } from '../lib/supabase';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const [featuredProjects, setFeaturedProjects] = useState<PortfolioItem[]>([]);

  useEffect(() => {
    loadFeaturedProjects();
  }, []);

  const loadFeaturedProjects = async () => {
    const { data } = await supabase
      .from('portfolio_items')
      .select('*')
      .eq('featured', true)
      .limit(5);

    if (data) setFeaturedProjects(data);
  };

  return (
    <>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-amber-600/20 backdrop-blur-sm border border-amber-600/30 rounded-full px-6 py-2 mb-6">
            <Sparkles size={20} className="text-amber-400" />
            <span className="text-sm text-amber-100">Award-Winning Interior Design Studio</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
            Transforming Spaces<br />Into Dreams
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light">
            Creating luxurious, timeless interiors that reflect your unique style and vision
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => onNavigate('portfolio')}>
              View Our Work
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button variant="outline" size="lg" onClick={() => onNavigate('contact')}>
              Schedule Consultation
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </div>
        </div>
      </section>

      <Section>
        <div className="text-center mb-16">
          <SectionTitle>Our Latest Masterpieces</SectionTitle>
          <SectionSubtitle>
            Discover our most recent projects where elegance meets functionality
          </SectionSubtitle>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.slice(0, 3).map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-sm shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => onNavigate('portfolio')}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image_url}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-xs text-amber-400 uppercase tracking-wider mb-2">{project.category}</div>
                  <h3 className="text-2xl font-light mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" onClick={() => onNavigate('portfolio')}>
            View All Projects
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </Section>

      <Section dark>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-light mb-6">Why Choose D NEST?</h2>
            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
              We bring together exceptional creativity, technical expertise, and a commitment
              to excellence that transforms ordinary spaces into extraordinary experiences.
            </p>

            <div className="space-y-6">
              {[
                'Award-winning design team with 15+ years of experience',
                'Personalized approach tailored to your unique vision',
                'Seamless project management from concept to completion',
                'Sustainable and innovative design solutions'
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle2 className="text-amber-600 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button onClick={() => onNavigate('about')}>
                Learn More About Us
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-sm overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Interior Design"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white p-8 rounded-sm shadow-2xl">
              <div className="text-4xl font-bold">15+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-lg p-12 md:p-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's bring your vision to life. Schedule a consultation with our expert design team today.
          </p>
          <Button size="lg" onClick={() => onNavigate('contact')}>
            Get Started Today
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </Section>
    </>
  );
}
