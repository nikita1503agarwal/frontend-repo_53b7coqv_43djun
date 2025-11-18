export default function SEO({ title = 'Affiliate Hub', description = 'Expert product reviews, comparisons, and buying guides across tech, gadgets, beauty, fitness, and more.' }){
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  )
}
