import { useEffect, useState } from 'react'

export default function BlogPreview() {
  const [posts, setPosts] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/blogs?limit=3`)
        const data = await res.json()
        setPosts(data)
      } catch (e) {
        setPosts([])
      }
    }
    fetchPosts()
  }, [])

  return (
    <section className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-[#0A1A2F]">Latest guides</h2>
            <p className="text-[#444444]">Research-based advice and buying tips</p>
          </div>
          <a href="/blog" className="hidden sm:inline-block text-[#1F67D1] font-medium">Read all</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map(p => (
            <article key={p._id} className="rounded-xl ring-1 ring-gray-100 bg-white overflow-hidden hover:shadow-md transition">
              {p.hero_image && (
                <div className="aspect-[4/3]">
                  <img src={p.hero_image} alt={p.title} className="w-full h-full object-cover" />
                </div>
              )}
              <div className="p-4">
                <h3 className="font-semibold text-[#0A1A2F] line-clamp-2">{p.title}</h3>
                {p.excerpt && <p className="text-sm text-[#222222] mt-2 line-clamp-3">{p.excerpt}</p>}
                <a href={`/blog/${p.slug || p._id}`} className="mt-4 inline-block text-[#1F67D1] font-medium">Read more</a>
              </div>
            </article>
          ))}
          {posts.length === 0 && (
            <div className="md:col-span-3 text-center text-[#444444]">No posts yet.</div>
          )}
        </div>
      </div>
    </section>
  )
}
