import React from 'react'

const collections = [
  { id: 1, name: 'Coronado', price: '$240', type: 'Performance', bgcolor: '#EAE1C0', image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a631d6?auto=format&fit=crop&q=80' },
  { id: 2, name: 'La Jolla', price: '$225', type: 'Control', bgcolor: '#F1EDE2', image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a631d6?auto=format&fit=crop&q=80' },
  { id: 3, name: 'Manhattan', price: '$250', type: 'Power', bgcolor: '#DDE4C7', image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a631d6?auto=format&fit=crop&q=80' },
  { id: 4, name: 'Del Mar', price: '$230', type: 'All-around', bgcolor: '#85BABC', image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a631d6?auto=format&fit=crop&q=80' },
]

export default function CollectionPage({ navigate }) {
  return (
    <div className="section container" style={{ paddingTop: '160px', minHeight: '100vh', background: '#FFFFFF' }}>
      <header style={{ marginBottom: '80px' }}>
        <h1 className="title-display">The Collection</h1>
        <p className="text-subtitle">MINIMAL. POWERFUL. INTENTIONAL.</p>
      </header>

      <div className="filter-bar">
        <div className="filter-item active">All Racquets</div>
        <div className="filter-item">Performance</div>
        <div className="filter-item">Control</div>
        <div className="filter-item">Power</div>
      </div>

      <div className="collection-grid">
        {collections.map(item => (
          <div key={item.id} className="product-card-unit" onClick={() => navigate('/product')} style={{ cursor: 'pointer' }}>
            <div className="product-image-card" style={{ backgroundColor: item.bgcolor }}>
               {item.name === 'Del Mar' ? (
                 <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ 
                      fontFamily: 'serif', 
                      fontSize: '64px', 
                      color: 'white', 
                      fontWeight: 300,
                      fontStyle: 'italic'
                    }}>Del Mar</span>
                 </div>
               ) : (
                 <img src={item.image} alt={item.name} style={{ mixBlendMode: 'multiply' }} />
               )}
            </div>
            
            <div className="product-info-row">
              <div>
                <h3 className="product-label">{item.name}</h3>
                <p className="product-meta">{item.type} • {item.price}</p>
              </div>
              
              <div className="view-details-btn">
                <span>View Details</span>
                <div className="arrow-circle">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
