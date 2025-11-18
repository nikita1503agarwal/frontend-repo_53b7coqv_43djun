import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CategoryGrid from './components/CategoryGrid'
import Trending from './components/Trending'
import Comparison from './components/Comparison'
import BlogPreview from './components/BlogPreview'
import Badges from './components/Badges'
import Footer from './components/Footer'
import SEO from './components/SEO'

function App() {
  return (
    <div className="min-h-screen bg-white text-[#222222]">
      <SEO />
      <Navbar />
      <main>
        <Hero />
        <CategoryGrid />
        <Trending />
        <Comparison />
        <BlogPreview />
        <Badges />
      </main>
      <Footer />
    </div>
  )
}

export default App
