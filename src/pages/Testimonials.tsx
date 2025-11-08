import { useEffect, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Section, SectionTitle, SectionSubtitle } from '../components/Section';
import { supabase, type Testimonial } from '../lib/supabase';

export function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTestimonials();
  }, []);

  const loadTestimonials = async () => {
    setLoading(true);
    const { data } = await supabase
      .from('testimonials')
      .select('*')
      .order('created_at', { ascending: false });

    if (data) setTestimonials(data);
    setLoading(false);
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={20}
        className={i < rating ? 'fill-amber-500 text-amber-500' : 'text-gray-300'}
      />
    ));
  };

  return (
    <>
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-light mb-6">Client Testimonials</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            What our clients say about working with D NEST
          </p>
        </div>
      </section>

      <Section dark>
        <SectionTitle>What Our Clients Say</SectionTitle>
        <SectionSubtitle>
          Real experiences from homeowners and businesses who trusted us with their spaces
        </SectionSubtitle>

        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block w-12 h-12 border-4 border-amber-600 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : testimonials.length > 0 ? (
          <>
            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-slate-800 rounded-lg p-8 md:p-12 relative">
                <Quote className="absolute top-8 left-8 text-amber-600/20" size={64} />

                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>

                  <p className="text-xl md:text-2xl text-gray-300 text-center leading-relaxed mb-8 font-light">
                    "{testimonials[currentIndex].content}"
                  </p>

                  <div className="text-center">
                    <div className="text-xl font-medium text-white mb-1">
                      {testimonials[currentIndex].client_name}
                    </div>
                    {testimonials[currentIndex].client_title && (
                      <div className="text-amber-600">
                        {testimonials[currentIndex].client_title}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 bg-slate-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={24} />
                </button>

                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex ? 'bg-amber-600 w-8' : 'bg-slate-700'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 bg-slate-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No testimonials available at the moment.</p>
          </div>
        )}
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="border-t border-gray-200 pt-4">
                <div className="font-medium text-gray-900">{testimonial.client_name}</div>
                {testimonial.client_title && (
                  <div className="text-sm text-amber-600">{testimonial.client_title}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section dark>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-5xl font-bold text-amber-600 mb-2">98%</div>
            <div className="text-gray-400">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-amber-600 mb-2">200+</div>
            <div className="text-gray-400">Projects Delivered</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-amber-600 mb-2">150+</div>
            <div className="text-gray-400">Happy Clients</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-amber-600 mb-2">25+</div>
            <div className="text-gray-400">Awards Won</div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Join Our Growing List of Satisfied Clients
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            We're passionate about creating exceptional spaces and building lasting relationships
            with our clients. Your satisfaction is our top priority, and we're committed to
            exceeding your expectations at every step of the design journey.
          </p>
        </div>
      </Section>
    </>
  );
}
