import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const categories = [
  { slug: 'tech', name: 'Tech' },
  { slug: 'gadgets', name: 'Gadgets' },
  { slug: 'beauty', name: 'Beauty' },
  { slug: 'fitness', name: 'Fitness' },
  { slug: 'home', name: 'Home' },
  { slug: 'kitchen', name: 'Kitchen' },
  { slug: 'fashion', name: 'Fashion' },
  { slug: 'personal-care', name: 'Personal Care' },
  { slug: 'lifestyle', name: 'Lifestyle' },
  { slug: 'gaming', name: 'Gaming' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#1F67D1]" />
          <span className="text-[#0A1A2F] font-semibold">Affiliate Hub</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-[#444444]">
          {categories.slice(0,6).map((c) => (
            <NavLink key={c.slug} to={`/category/${c.slug}`} className={({isActive})=>`hover:text-[#1F67D1] transition ${isActive? 'text-[#1F67D1] font-medium':'text-[#444444]'}`}>{c.name}</NavLink>
          ))}
          <NavLink to="/blog" className={({isActive})=>`hover:text-[#1F67D1] transition ${isActive? 'text-[#1F67D1] font-medium':'text-[#444444]'}`}>Blog</NavLink>
        </nav>

        <button onClick={()=>setOpen(v=>!v)} className="md:hidden p-2 rounded-lg border border-gray-200 text-[#0A1A2F]">
          <Menu size={20} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3 grid grid-cols-2 gap-3">
            {categories.map(c => (
              <Link key={c.slug} to={`/category/${c.slug}`} className="text-sm text-[#444444] hover:text-[#1F67D1]" onClick={()=>setOpen(false)}>
                {c.name}
              </Link>
            ))}
            <Link to="/blog" className="text-sm text-[#444444] hover:text-[#1F67D1]" onClick={()=>setOpen(false)}>Blog</Link>
          </div>
        </div>
      )}
    </header>
  )
}
