export default function Comparison() {
  const columns = ["Product", "Rating", "Best for", "Price"]
  const rows = [
    { name: "Wireless Headphones", rating: 4.7, best: "Commuting", price: "$199" },
    { name: "Smartwatch Pro", rating: 4.5, best: "Fitness tracking", price: "$249" },
    { name: "4K Monitor", rating: 4.6, best: "Productivity", price: "$329" },
  ]

  return (
    <section className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-[#0A1A2F]">Top picks at a glance</h2>
            <p className="text-[#444444]">Quickly compare features to find your best fit</p>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl ring-1 ring-gray-100">
          <table className="min-w-full divide-y divide-gray-100">
            <thead className="bg-gray-50/50">
              <tr>
                {columns.map(h => (
                  <th key={h} scope="col" className="px-6 py-3 text-left text-sm font-semibold text-[#0A1A2F]">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {rows.map((r, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-[#0A1A2F]">{r.name}</td>
                  <td className="px-6 py-4 text-sm text-[#222222]">{r.rating}</td>
                  <td className="px-6 py-4 text-sm text-[#222222]">{r.best}</td>
                  <td className="px-6 py-4 text-sm text-[#222222]">{r.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
