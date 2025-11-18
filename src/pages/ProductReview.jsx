import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ProductReview(){
  const { id } = useParams()
  const product = {
    title: 'Noise-cancelling Headphones Pro X',
    image: 'https://images.unsplash.com/photo-1657223143975-d29d7959a70f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOb2lzZS1jYW5jZWxsaW5nJTIwSGVhZHBob25lcyUyMFBybyUyMFh8ZW58MHwwfHx8MTc2MzQ1NTEyNXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    verdict: 'Excellent ANC and comfort for daily commuting with class-leading battery life.',
    features: [
      'Hybrid ANC with transparency mode',
      '40-hour battery life (ANC on)',
      'Bluetooth 5.3 with multipoint',
      'USB‑C fast charging',
    ],
    pros: ['Top-tier noise cancellation', 'Comfortable for long sessions', 'Rich, balanced sound'],
    cons: ['Premium price', 'Bulky case'],
    alternatives: ['QuietComfort Ultra', 'WH-1000XM5'],
    rating: 4.7,
    affiliate_url: '#',
    faq: [
      { q: 'Does it support wired listening?', a: 'Yes, via the included 3.5mm cable.' },
      { q: 'Can I connect to two devices?', a: 'Yes, it supports Bluetooth multipoint.' },
    ],
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    image: [product.image],
    review: {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: product.rating, bestRating: '5', worstRating: '0' },
      reviewBody: product.verdict,
      author: { '@type': 'Person', name: 'Editorial Team' }
    },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: product.rating, reviewCount: 24 },
    offers: { '@type': 'Offer', price: '199.00', priceCurrency: 'USD', availability: 'https://schema.org/InStock' }
  }

  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-3xl font-bold text-[#0A1A2F]">{product.title}</h1>
          <p className="mt-2 text-[#444444]">Our verdict: {product.verdict}</p>
          <div className="mt-6 rounded-2xl overflow-hidden ring-1 ring-gray-100">
            <img src={product.image} alt={product.title} className="w-full h-auto"/>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <section>
              <h2 className="text-xl font-semibold text-[#0A1A2F]">Key features</h2>
              <ul className="mt-3 list-disc list-inside space-y-1 text-[#222222]">
                {product.features.map((f,i)=> <li key={i}>{f}</li>)}
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-[#0A1A2F]">Pros & Cons</h2>
              <div className="mt-3 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-green-50 ring-1 ring-green-100 p-4">
                  <p className="text-sm font-semibold text-[#0A1A2F]">Pros</p>
                  <ul className="mt-2 list-disc list-inside text-sm text-[#222222] space-y-1">
                    {product.pros.map((p,i)=> <li key={i}>{p}</li>)}
                  </ul>
                </div>
                <div className="rounded-xl bg-red-50 ring-1 ring-red-100 p-4">
                  <p className="text-sm font-semibold text-[#0A1A2F]">Cons</p>
                  <ul className="mt-2 list-disc list-inside text-sm text-[#222222] space-y-1">
                    {product.cons.map((c,i)=> <li key={i}>{c}</li>)}
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-[#0A1A2F]">Comparison alternatives</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.alternatives.map((a,i)=> (
                <span key={i} className="px-3 py-1.5 rounded-full bg-gray-50 ring-1 ring-gray-200 text-sm text-[#444444]">{a}</span>
              ))}
            </div>
          </section>

          <div className="mt-8 flex items-center gap-4">
            <a href={product.affiliate_url} target="_blank" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-[#1F67D1] text-white font-semibold shadow-sm">Check Price</a>
            <div className="text-sm text-[#444444]">Rating: <span className="font-semibold text-[#0A1A2F]">{product.rating}</span>/5</div>
          </div>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-[#0A1A2F]">FAQ</h2>
            <dl className="mt-4 space-y-4">
              {product.faq.map((f, i)=> (
                <div key={i} className="rounded-xl ring-1 ring-gray-100 p-4">
                  <dt className="font-medium text-[#0A1A2F]">{f.q}</dt>
                  <dd className="mt-1 text-[#222222]">{f.a}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}} />
      </main>
      <Footer />
    </div>
  )
}
