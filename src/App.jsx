import React, { useState, useEffect } from 'react'
import HomePage from './HomePage'
import TestimonialsPage from './TestimonialsPage'
import CollectionPage from './CollectionPage'
import ProductDetailsPage from './ProductDetailsPage'
import CartPage from './CartPage'

function App() {
  const [currentRoute, setCurrentRoute] = useState('/')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark')
  }, [])

  const navigate = (path) => {
    setCurrentRoute(path)
    setIsMobileMenuOpen(false)
    window.scrollTo(0, 0)
  }

  return (
    <>
      <header className="header unified-header">
          <div className="container header-content">
            <a href="#" className="logo unified-logo" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 12c0-4.2 3.8-7 9-7s9 2.8 9 7-3.8 7-9 7-9-2.8-9-7z"></path>
                <line x1="4" y1="4" x2="20" y2="20"></line>
              </svg>
              <span>BLANCA</span>
            </a>
          
          <button 
            className="hamburger-btn" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>

          <nav className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <a 
              href="#" 
              className={`nav-link ${currentRoute === '/collection' || currentRoute === '/product' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); navigate('/collection'); }}
            >
              Racquets
            </a>
            <a 
              href="#" 
              className="nav-link"
              onClick={(e) => { e.preventDefault(); navigate('/collection'); }}
            >
              Bundles
            </a>
            <a 
              href="#" 
              className="nav-link"
              onClick={(e) => { e.preventDefault(); }}
            >
              Accessories
            </a>
            <a 
              href="#" 
              className="nav-link"
              onClick={(e) => { e.preventDefault(); }}
            >
              Apparel
            </a>
            <a 
              href="#" 
              className="nav-link"
              onClick={(e) => { e.preventDefault(); }}
            >
              Trial our gear
            </a>
            <a 
              href="#" 
              className="nav-link"
              onClick={(e) => { e.preventDefault(); navigate('/'); }}
            >
              About us
            </a>
            <a 
              href="#" 
              className={`nav-link ${currentRoute === '/testimonials' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); navigate('/testimonials'); }}
            >
              Players
            </a>
          </nav>
          
          <div className="nav-icons">
             <button className="icon-btn nav-icon-box">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
             </button>
             <button className="icon-btn nav-icon-box" onClick={(e) => { navigate('/cart'); }}>
               {/* Minimalist Cart Icon */}
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
             </button>
          </div>
          </div>
        </header>

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
