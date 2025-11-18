export default function Badges(){
  const badges = [
    {label: 'Verified Reviews'},
    {label: 'Real-World Testing'},
    {label: 'No Spam, No Hype'},
    {label: 'Affiliate Disclosure'},
  ]
  return (
    <section className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map((b, i)=> (
            <div key={i} className="rounded-xl bg-white ring-1 ring-gray-100 px-4 py-6 text-center">
              <p className="text-sm font-semibold text-[#0A1A2F]">{b.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
