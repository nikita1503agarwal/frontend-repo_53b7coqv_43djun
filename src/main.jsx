import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import CategoryPage from './pages/Category'
import Blog from './pages/Blog'
import ProductReview from './pages/ProductReview'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Test />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/review/:id" element={<ProductReview />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
