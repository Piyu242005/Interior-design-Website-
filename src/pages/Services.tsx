import { Building2, Home, Hammer, Box, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Section, SectionTitle, SectionSubtitle } from '../components/Section';
import { Button } from '../components/Button';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      icon: Home,
      title: 'Residential Design',
      description: 'Create your dream home with our bespoke residential interior design services.',
      features: [
        'Custom home design',
        'Space planning & optimization',
        'Furniture selection & sourcing',
        'Color & material consultation',
        'Lighting design',
        'Project management'
      ],
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Building2,
      title: 'Commercial Design',
      description: 'Elevate your business with professional commercial interior solutions.',
      features: [
        'Office space planning',
        'Retail store design',
        'Restaurant & hospitality',
        'Brand integration',
        'Workspace optimization',
        'Sustainable solutions'
      ],
      image: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Hammer,
      title: 'Renovation Services',
      description: 'Transform existing spaces with our comprehensive renovation expertise.',
      features: [
        'Complete space transformation',
        'Kitchen & bathroom remodeling',
        'Structural modifications',
        'Historic preservation',
        'Modern upgrades',
        'Contractor coordination'
      ],
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Box,
      title: '3D Visualization',
      description: 'See your space come to life before construction begins with realistic renders.',
      features: [
        'Photorealistic 3D renders',
        'Virtual walkthroughs',
        'Material & finish previews',
        'Multiple design options',
        'VR experiences',
        'Detailed floor plans'
      ],
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We begin with an in-depth consultation to understand your vision, needs, and budget.'
    },
    {
      step: '02',
      title: 'Concept Development',
      description: 'Our team creates initial concepts and mood boards tailored to your preferences.'
    },
    {
      step: '03',
      title: 'Design & Planning',
      description: 'We develop detailed plans, 3D visualizations, and material specifications.'
    },
    {
      step: '04',
      title: 'Implementation',
      description: 'We manage the entire execution process, ensuring quality and timely completion.'
    }
  ];

  return (
    <>
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2507010/pexels-photo-2507010.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-light mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive design solutions tailored to your unique needs
          </p>
        </div>
      </section>

      <Section>
        <SectionTitle>Comprehensive Design Solutions</SectionTitle>
        <SectionSubtitle>
          From concept to completion, we offer full-service interior design expertise
        </SectionSubtitle>

        <div className="space-y-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-amber-600 rounded-sm flex items-center justify-center">
                      <Icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-3xl font-light">{service.title}</h3>
                  </div>
                  <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle2 className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button onClick={() => onNavigate('contact')}>
                    Learn More
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section dark>
        <SectionTitle>Our Design Process</SectionTitle>
        <SectionSubtitle>
          A streamlined approach that ensures exceptional results every time
        </SectionSubtitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {process.map((item, index) => (
            <div key={index} className="relative">
              <div className="text-6xl font-bold text-amber-600/20 mb-4">{item.step}</div>
              <h3 className="text-2xl font-light mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
              {index < process.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-amber-600/30" />
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-square rounded-sm overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Design consultation"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl font-light mb-6">Why Work With Us?</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                With over 15 years of experience, D NEST has established itself as a leader in
                luxury interior design. Our team combines technical expertise with creative
                vision to deliver spaces that exceed expectations.
              </p>
              <p>
                We pride ourselves on our collaborative approach, working closely with clients
                throughout the entire design process. From initial concept to final installation,
                we ensure that every detail reflects your unique style and requirements.
              </p>
              <p>
                Our commitment to quality, innovation, and client satisfaction has earned us
                recognition in the industry and, more importantly, the trust of clients who
                return to us for multiple projects.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">200+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">150+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">25+</div>
                <div className="text-sm text-gray-600">Design Awards</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section dark>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Let's discuss how we can transform your space into something extraordinary.
            Schedule a consultation with our design team today.
          </p>
          <Button size="lg" onClick={() => onNavigate('contact')}>
            Schedule Consultation
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </Section>
    </>
  );
}
