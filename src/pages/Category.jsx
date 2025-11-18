import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function CategoryPage(){
  const { slug } = useParams()
  const [products, setProducts] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(()=>{
    const load = async () => {
      try{
        const res = await fetch(`${baseUrl}/api/products?category=${slug}&limit=20`)
        const data = await res.json()
        setProducts(data)
      }catch(e){
        setProducts([])
      }
    }
    load()
  }, [slug])

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold text-[#0A1A2F] capitalize">{slug.replace('-', ' ')}</h1>
        <p className="text-[#444444] mt-2">Our latest reviews and picks</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(p => (
            <article key={p._id} className="rounded-xl ring-1 ring-gray-100 bg-white overflow-hidden hover:shadow-md transition">
              {p.image && (
                <div className="aspect-[4/3]">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                </div>
              )}
              <div className="p-4">
                <h3 className="font-semibold text-[#0A1A2F] line-clamp-2">{p.title}</h3>
                {p.description && <p className="text-sm text-[#222222] mt-2 line-clamp-3">{p.description}</p>}
                <div className="mt-3 flex items-center justify-between text-sm">
                  {typeof p.rating === 'number' && <p className="text-[#444444]">Rating: <span className="font-medium text-[#0A1A2F]">{p.rating.toFixed(1)}</span>/5</p>}
                  {p.price && <p className="text-[#0A1A2F] font-medium">${p.price}</p>}
                </div>
                {p.affiliate_url && (
                  <a href={p.affiliate_url} target="_blank" className="mt-4 inline-block w-full text-center bg-[#1F67D1] text-white font-semibold py-2 rounded-lg">View Deal</a>
                )}
              </div>
            </article>
          ))}
          {products.length === 0 && (
            <div className="col-span-full text-center text-[#444444]">No products found in this category yet.</div>
          )}
        </div>
      </div>
    </div>
  )
}
