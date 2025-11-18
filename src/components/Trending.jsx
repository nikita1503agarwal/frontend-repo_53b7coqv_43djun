import { useEffect, useState } from 'react'

export default function Trending() {
  const [items, setItems] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/products?trending=true&limit=8`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        setItems([])
      }
    }
    fetchTrending()
  }, [])

  return (
    <section id="trending" className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-[#0A1A2F]">Trending picks</h2>
            <p className="text-[#444444]">Our community’s most-loved products</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(p => (
            <article key={p._id} className="rounded-xl ring-1 ring-gray-100 bg-white overflow-hidden hover:shadow-md transition">
              {p.image && (
                <div className="aspect-[4/3]">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover"/>
                </div>
              )}
              <div className="p-4">
                <h3 className="font-semibold text-[#0A1A2F] line-clamp-2">{p.title}</h3>
                {typeof p.rating === 'number' && (
                  <p className="text-sm text-[#444444] mt-1">Rating: <span className="font-medium text-[#0A1A2F]">{p.rating.toFixed(1)}</span>/5</p>
                )}
                {p.pros?.length > 0 && (
                  <ul className="mt-3 text-sm text-[#222222] list-disc list-inside space-y-1">
                    {p.pros.slice(0,3).map((x, i)=> <li key={i}>{x}</li>)}
                  </ul>
                )}
                {p.affiliate_url && (
                  <a href={p.affiliate_url} target="_blank" className="mt-4 inline-block w-full text-center bg-[#1F67D1] text-white font-semibold py-2 rounded-lg">Check Price</a>
                )}
              </div>
            </article>
          ))}
          {items.length === 0 && (
            <div className="col-span-full text-center text-[#444444]">No trending products yet.</div>
          )}
        </div>
      </div>
    </section>
  )
}
