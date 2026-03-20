import React from 'react'

const allRacquets = [
  { id: 1, name: 'La Jolla', image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=900&q=80', desc: 'High end flat profile tear drop... advanced performance and an incredibly balanced weight...' },
  { id: 2, name: 'Manhattan', image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80', desc: 'Our high-end and powerful diamond profile racquet. Phenomenal feel, exceptional...' },
  { id: 3, name: 'Malibu', image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=900&q=80', desc: 'Designed for control and precision with a rounded profile...' }
]

export default function HomePage({ navigate }) {
  return (
    <div className="homepage-dark">
      <section className="hp-hero">
        <div className="container hp-hero-container">
          <div className="hp-hero-content">
            <h1 className="hp-title-xl">Minimal. Powerful.<br/>Intentional.</h1>
            <p className="hp-hero-text">
              At Blanca, we're not about fluff. We're about the game. Our equipment is designed to be functional and cool but doesn't need to shout. We're for the player who prefers style in subtlety, and who brings an unassuming look that doesn't compromise on quality.
            </p>
            <button className="hp-cta-btn" onClick={() => navigate('/collection')}>
              Shop our racquets
              <div className="hp-cta-circle">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
            </button>
          </div>
          <div className="hp-hero-media">
            <img
              src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1400&q=80"
              alt="Padel racquet on court"
              className="hp-hero-img"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="hp-difference-section">
        <div className="container">
          <h2 className="hp-section-title text-center">The Blanca difference</h2>
          
          <div className="hp-diff-grid">
            <div className="hp-diff-box">
               <div className="hp-icons-row">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F8D247" strokeWidth="1.5"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
               </div>
               <h3>Minimal</h3>
               <p>At Blanca, we're not about fluff. We're about the game. Our equipment is built...</p>
            </div>
            
            <div className="hp-diff-box">
               <div className="hp-icons-row">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F8D247" strokeWidth="1.5"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>
               </div>
               <h3>All Levels</h3>
               <p>We've built all levels of players. We've honed our designs alongside...</p>
            </div>
            
            <div className="hp-diff-box">
               <div className="hp-icons-row">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F8D247" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
               </div>
               <h3>Quality</h3>
               <p>Quality beyond all limits. Handcrafted from premium compounding professional materials.</p>
            </div>
            
            <div className="hp-social-box">
               <h3>Join the Blanca<br/>Padel Social Club</h3>
               <p style={{fontSize: '12px', color: '#999', marginBottom: '16px'}}>Follow our Instagram feed @blanca.padel.</p>
               <div className="hp-social-images">
                 <img src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=240&q=80" alt="ig1" />
                 <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=240&q=80" alt="ig2" />
                 <img src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=240&q=80" alt="ig3" />
               </div>
               <a href="#" className="hp-social-link">Instagram feed →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="hp-tech-section">
        <div className="container hp-tech-container">
          <div className="hp-tech-left">
            <h2>Modern Tech</h2>
            <img src="https://images.unsplash.com/photo-1471295253337-3ceaaedca402?auto=format&fit=crop&w=1200&q=80" alt="Player" className="hp-tech-img" />
          </div>
          <div className="hp-tech-right">
             <div className="hp-tech-content">
               <h3>We are carbon fiber obsessed</h3>
               <p>
                 We are a super-premium padel brand, dedicated to providing the highest level of detail. From the aesthetics to the performance. We engineer carbon fiber designs meant to make a statement, bringing an unassuming look that doesn't compromise on quality. 
               </p>
             </div>
          </div>
        </div>
      </section>

      <section className="hp-products-section">
        <div className="container">
          <h2 className="hp-section-title text-center" style={{marginBottom: '48px'}}>Find your perfect fit</h2>
          <div className="hp-products-grid">
            {allRacquets.slice(0, 2).map((item, i) => (
              <div key={item.id} className="hp-product-card" onClick={() => navigate('/product')}>
                 <img src={item.image} alt={item.name} />
                 <h4 className="hp-product-name">{item.name}</h4>
                 <p className="hp-product-desc">{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <button className="hp-cta-btn hp-cta-btn-small" onClick={() => navigate('/collection')}>
              View all racquets
              <div className="hp-cta-circle">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
            </button>
          </div>
        </div>
      </section>

      <div className="hp-marquee-wrapper">
         <div className="hp-marquee">BLANCA • RACQUETS • MINIMAL • BLANCA • RACQUETS • MINIMAL</div>
      </div>
      
      <footer className="hp-footer">
        <div className="container hp-footer-container">
           <div className="hp-footer-col">
             <h4>Explore</h4>
             <a href="#">Racquets</a>
             <a href="#">Accessories</a>
             <a href="#">Trial run gear</a>
           </div>
           <div className="hp-footer-col">
             <h4>About us</h4>
             <a href="#">Apparel</a>
             <a href="#">Bundles</a>
           </div>
           <div className="hp-footer-col">
             <h4>Contact</h4>
             <a href="#">Instagram @blanca.padel</a>
             <a href="#">Hello@blanca.padel</a>
           </div>
           <div className="hp-footer-col">
             <h4>Legal</h4>
             <a href="#">Privacy Policy</a>
             <a href="#">Terms of Service</a>
           </div>
        </div>
        <div className="container hp-footer-bottom">
           <a href="#">Back to top</a>
           <span>Site by Blanca Padel</span>
        </div>
      </footer>
    </div>
  )
}
