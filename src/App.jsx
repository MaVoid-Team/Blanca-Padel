import React, { useState, useEffect } from 'react'
import HomePage from './HomePage'
import TestimonialsPage from './TestimonialsPage'
import CollectionPage from './CollectionPage'
import ProductDetailsPage from './ProductDetailsPage'
import CartPage from './CartPage'

function App() {
  const [currentRoute, setCurrentRoute] = useState('/')
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  const navigate = (path) => {
    setCurrentRoute(path)
    window.scrollTo(0, 0)
  }

  return (
    <>
      {currentRoute !== '/' && (
        <header className="header">
          <div className="container header-content">
            <a href="#" className="logo" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Blanca.</a>
          
          <nav className="nav-links">
            <a 
              href="#" 
              className={`nav-link ${currentRoute === '/collection' || currentRoute === '/product' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); navigate('/collection'); }}
            >
              Collection
            </a>
            <a 
              href="#" 
              className={`nav-link ${currentRoute === '/testimonials' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); navigate('/testimonials'); }}
            >
              Testimonials
            </a>
            <a 
              href="#" 
              className="nav-link"
              onClick={(e) => { e.preventDefault(); navigate('/'); }}
            >
              About
            </a>
          </nav>
          
          <div className="nav-icons">
             <button className="icon-btn" onClick={toggleTheme} title="Toggle Theme">
               {theme === 'light' ? (
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
               ) : (
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
               )}
             </button>
             <button className="icon-btn">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
             </button>
             <button className="icon-btn" onClick={(e) => { navigate('/cart'); }}>
               {/* Minimalist Cart Icon */}
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
             </button>
          </div>
          </div>
        </header>
      )}

      <main>
        {currentRoute === '/' && <HomePage navigate={navigate} />}
        {currentRoute === '/testimonials' && <TestimonialsPage navigate={navigate} />}
        {currentRoute === '/collection' && <CollectionPage navigate={navigate} />}
        {currentRoute === '/product' && <ProductDetailsPage navigate={navigate} />}
        {currentRoute === '/cart' && <CartPage navigate={navigate} />}
      </main>

      {currentRoute !== '/' && (
        <footer className="footer">
          <div className="container">
            <div className="footer-top">
              <div className="footer-col" style={{ maxWidth: '300px' }}>
              <div className="logo" style={{ marginBottom: '24px' }}>Blanca.</div>
              <p className="text-muted">Premium performance padel racquets engineered for intentional play. Designed in California.</p>
            </div>
            
            <div className="footer-nav">
              <div className="footer-col">
                <h4>Explore</h4>
                <ul>
                  <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/product'); }}>La Jolla</a></li>
                  <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/product'); }}>Manhattan</a></li>
                  <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/product'); }}>Malibu</a></li>
                  <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/collection'); }}>All Racquets</a></li>
                </ul>
              </div>
              
              <div className="footer-col">
                <h4>Contact</h4>
                <ul>
                  <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/'); }}>About Us</a></li>
                  <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Our Technology</a></li>
                  <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/testimonials'); }}>Player Reviews</a></li>
                </ul>
              </div>
              
              <div className="footer-col">
                <h4>Legal</h4>
                <ul>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Shipping & Returns</a></li>
                  <li><a href="#">FAQ</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Blanca Padel. All rights reserved.</p>
            <div style={{ display: 'flex', gap: '24px' }}>
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
          </div>
        </footer>
      )}
    </>
  )
}

export default App
