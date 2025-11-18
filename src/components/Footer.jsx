export default function Footer(){
  const links = [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Affiliate Disclosure', href: '/disclosure' },
    { label: 'Privacy Policy', href: '/privacy' },
  ]
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#1F67D1]" />
            <p className="text-[#0A1A2F] font-semibold">Affiliate Hub</p>
          </div>
          <nav className="flex flex-wrap gap-4 text-sm">
            {links.map(l => (
              <a key={l.label} href={l.href} className="text-[#444444] hover:text-[#1F67D1]">{l.label}</a>
            ))}
          </nav>
        </div>
        <p className="mt-6 text-xs text-[#444444]">We may earn a commission when you buy through links on our site. This helps keep our content free and independent.</p>
        <p className="mt-2 text-xs text-[#444444]">© {new Date().getFullYear()} Affiliate Hub. All rights reserved.</p>
      </div>
    </footer>
  )
}
