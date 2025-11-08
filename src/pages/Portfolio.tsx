import { useEffect, useState } from 'react';
import { Section, SectionTitle, SectionSubtitle } from '../components/Section';
import { supabase, type PortfolioItem } from '../lib/supabase';

export function Portfolio() {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'renovation', label: 'Renovation' }
  ];

  useEffect(() => {
    loadPortfolio();
  }, []);

  const loadPortfolio = async () => {
    setLoading(true);
    const { data } = await supabase
      .from('portfolio_items')
      .select('*')
      .order('created_at', { ascending: false });

    if (data) setPortfolioItems(data);
    setLoading(false);
  };

  const filteredItems = selectedCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <>
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-light mb-6">Portfolio</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our collection of exceptional design projects
          </p>
        </div>
      </section>

      <Section>
        <SectionTitle>Luxury Works</SectionTitle>
        <SectionSubtitle>
          Experience the pinnacle of interior design where every detail is crafted to perfection
        </SectionSubtitle>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-sm transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block w-12 h-12 border-4 border-amber-600 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-sm shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="inline-block px-3 py-1 bg-amber-600 rounded-full text-xs uppercase tracking-wider mb-3">
                        {item.category}
                      </div>
                      <h3 className="text-2xl font-light mb-2">{item.title}</h3>
                      {item.description && (
                        <p className="text-gray-300 text-sm">{item.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </div>
        )}
      </Section>

      <Section dark>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Every Space Tells a Story
          </h2>
          <p className="text-gray-400 mb-8 text-lg leading-relaxed">
            Each project in our portfolio represents a unique collaboration between our design
            team and our clients. We take pride in creating spaces that not only look stunning
            but also enhance the way people live and work. From intimate residences to grand
            commercial spaces, every design reflects our commitment to excellence and innovation.
          </p>
          <p className="text-gray-400 text-lg">
            Interested in seeing how we can transform your space?
          </p>
        </div>
      </Section>
    </>
  );
}
