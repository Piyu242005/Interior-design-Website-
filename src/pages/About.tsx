import { Award, Heart, Lightbulb, Users } from 'lucide-react';
import { Section, SectionTitle, SectionSubtitle } from '../components/Section';
import { Button } from '../components/Button';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export function About({ onNavigate }: AboutProps) {
  const team = [
    {
      name: 'Diana Stevens',
      role: 'Founder & Creative Director',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'With over 15 years in luxury interior design, Diana brings vision and sophistication to every project.'
    },
    {
      name: 'Marcus Chen',
      role: 'Lead Interior Architect',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Marcus specializes in spatial planning and architectural integration for seamless designs.'
    },
    {
      name: 'Sophia Martinez',
      role: 'Senior Designer',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Sophia creates harmonious color palettes and material selections that define elegant spaces.'
    },
    {
      name: 'James Anderson',
      role: 'Project Manager',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'James ensures every project is delivered on time and exceeds client expectations.'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Client-Focused',
      description: 'Your vision is at the heart of everything we do. We listen, understand, and create spaces that truly reflect your personality and needs.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We blend timeless elegance with cutting-edge design trends and sustainable practices to create spaces that stand the test of time.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Our commitment to quality and attention to detail has earned us recognition as one of the premier design studios in the industry.'
    }
  ];

  return (
    <>
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-light mb-6">About D NEST</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Crafting exceptional interiors since 2009
          </p>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle className="text-left">Our Story</SectionTitle>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Founded in 2009 by Diana Stevens, D NEST Interior Design Studio emerged from a
                passion for creating spaces that inspire and elevate everyday living. What began
                as a boutique studio has grown into an award-winning design firm, recognized
                for transforming residential and commercial spaces into timeless masterpieces.
              </p>
              <p>
                Our approach combines classical design principles with contemporary innovation,
                resulting in interiors that are both sophisticated and functional. We believe
                that great design should not only be beautiful but should enhance the way you
                live, work, and feel in your space.
              </p>
              <p>
                Over the years, we've had the privilege of working with discerning clients who
                value quality, creativity, and attention to detail. Each project is a unique
                collaboration, and we take pride in bringing our clients' visions to life while
                adding our signature touch of elegance and refinement.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Design detail"
              className="rounded-sm shadow-lg"
            />
            <img
              src="https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Interior space"
              className="rounded-sm shadow-lg mt-8"
            />
            <img
              src="https://images.pexels.com/photos/2507010/pexels-photo-2507010.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Modern design"
              className="rounded-sm shadow-lg -mt-8"
            />
            <img
              src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Elegant room"
              className="rounded-sm shadow-lg"
            />
          </div>
        </div>
      </Section>

      <Section dark>
        <SectionTitle>Our Core Values</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-amber-600 rounded-sm flex items-center justify-center mx-auto mb-6 transform hover:rotate-6 transition-transform">
                  <Icon size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-light mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section>
        <SectionTitle>Meet Our Team</SectionTitle>
        <SectionSubtitle>
          Talented designers and architects dedicated to bringing your vision to life
        </SectionSubtitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group">
              <div className="aspect-square overflow-hidden rounded-sm mb-4 shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-medium mb-1">{member.name}</h3>
              <p className="text-amber-600 text-sm mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section dark>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Users size={48} className="text-amber-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-center mb-6">
            Design Philosophy
          </h2>
          <p className="text-gray-400 text-lg text-center leading-relaxed mb-8">
            At D NEST, we believe that exceptional interior design is a harmonious blend of
            aesthetics, functionality, and personal expression. Our philosophy is rooted in
            understanding that every space has a story to tell, and our role is to help you
            tell yours through thoughtful design choices, curated materials, and meticulous
            attention to detail.
          </p>
          <p className="text-gray-400 text-lg text-center leading-relaxed">
            We approach each project with fresh eyes, creating unique solutions that respect
            architectural integrity while pushing creative boundaries. The result is interiors
            that feel both timeless and contemporary, luxurious yet livable, bold yet balanced.
          </p>
        </div>
      </Section>

      <Section>
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-lg p-12 md:p-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Let's Create Something Beautiful Together
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to start your design journey? Contact us today to discuss your project.
          </p>
          <Button size="lg" onClick={() => onNavigate('contact')}>
            Get In Touch
          </Button>
        </div>
      </Section>
    </>
  );
}
