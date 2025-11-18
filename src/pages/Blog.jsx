export default function Blog(){
  return (
    <div className="bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold text-[#0A1A2F]">Buying Guides & Reviews</h1>
        <p className="text-[#444444] mt-2">Actionable, research-backed articles to help you choose better.</p>
        <div className="mt-8 space-y-8">
          <article className="rounded-xl ring-1 ring-gray-100 p-6">
            <h2 className="text-xl font-semibold text-[#0A1A2F]">How to choose the right smartwatch in 2025</h2>
            <p className="mt-2 text-[#222222]">Understand sensors, battery life, GPS accuracy, and app ecosystems before you buy.</p>
            <a className="mt-3 inline-block text-[#1F67D1] font-medium" href="#">Read more</a>
          </article>
          <article className="rounded-xl ring-1 ring-gray-100 p-6">
            <h2 className="text-xl font-semibold text-[#0A1A2F]">Air fryers vs convection ovens: which is best for you?</h2>
            <p className="mt-2 text-[#222222]">We break down performance, capacity, and maintenance with clear pros and cons.</p>
            <a className="mt-3 inline-block text-[#1F67D1] font-medium" href="#">Read more</a>
          </article>
        </div>
      </div>
    </div>
  )
}
