const categories = [
  { slug: 'tech', name: 'Tech', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800' },
  { slug: 'gadgets', name: 'Gadgets', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800' },
  { slug: 'beauty', name: 'Beauty', image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=800' },
  { slug: 'fitness', name: 'Fitness', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800' },
  { slug: 'home', name: 'Home', image: 'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=800' },
  { slug: 'kitchen', name: 'Kitchen', image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=800' },
  { slug: 'fashion', name: 'Fashion', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800' },
  { slug: 'personal-care', name: 'Personal Care', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800' },
  { slug: 'lifestyle', name: 'Lifestyle', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800' },
  { slug: 'gaming', name: 'Gaming', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800' },
]

export default function CategoryGrid() {
  return (
    <section id="categories" className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-[#0A1A2F]">Shop by category</h2>
            <p className="text-[#444444]">Explore our most popular niches</p>
          </div>
          <a href="#" className="hidden sm:inline-block text-[#1F67D1] font-medium">View all</a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map(c => (
            <a key={c.slug} href={`/category/${c.slug}`} className="group rounded-xl overflow-hidden ring-1 ring-gray-100 bg-white hover:shadow-md transition">
              <div className="aspect-square">
                <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-3">
                <p className="font-semibold text-[#0A1A2F] group-hover:text-[#1F67D1]">{c.name}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
