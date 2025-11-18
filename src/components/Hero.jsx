export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0A1A2F]">
              Find the best products in every niche
            </h1>
            <p className="mt-4 text-lg text-[#222222]">Honest reviews, data-backed comparisons, and curated picks to help you buy with confidence.</p>
            <div className="mt-8 flex gap-3">
              <a href="#categories" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-[#1F67D1] text-white font-semibold shadow-sm hover:opacity-95">Explore Categories</a>
              <a href="#trending" className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-gray-200 text-[#0A1A2F] font-semibold hover:bg-gray-50">Trending Now</a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-[#444444]">
              <div className="flex -space-x-2">
                <img className="w-8 h-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200" />
                <img className="w-8 h-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200" />
                <img className="w-8 h-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=200" />
              </div>
              <p><span className="font-semibold text-[#0A1A2F]">Trusted by 50k+ readers</span> every month</p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-100">
              <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200" alt="Tech gadgets" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg ring-1 ring-gray-100 p-4 w-56">
              <p className="text-sm text-[#444444]">Top Pick</p>
              <p className="font-semibold text-[#0A1A2F]">Noise-cancelling Headphones</p>
              <a className="mt-2 inline-block text-sm text-white bg-[#1F67D1] px-3 py-1.5 rounded-lg">View Deal</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
