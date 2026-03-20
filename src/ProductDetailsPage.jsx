import React, { useState } from 'react'

const productData = {
  id: 1,
  name: "La Jolla Pro Carbon",
  brand: "Blanca",
  price: 225.00,
  originalPrice: 250.00,
  rating: 4.8,
  reviewCount: 124,
  stockCount: 15,
  description: "The La Jolla is our flagship control racquet. Designed with a round shape and a low balance point, it offers the perfect blend of precision and touch for tactical play. The 12K carbon fiber face ensures durability and a striking presence on the court.",
  features: [
    "12K Carbon Fiber Face for maximum durability",
    "Premium EVA Soft Core eliminates vibrations",
    "Anti-vibration bridge system",
    "Textured surface for enhanced spin"
  ],
  specs: {
    "Shape": "Round",
    "Weight": "360g - 375g",
    "Balance": "Low",
    "Core": "Premium EVA Soft",
    "Face": "12K Carbon",
    "Frame": "100% Carbon Fiber",
    "Thickness": "38mm"
  },
  images: [
    "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1200&q=80"
  ],
  variants: [
    { label: "Weight", options: ["360g", "365g", "370g", "375g"] },
    { label: "Color", options: ["Matte Black", "Arctic White", "Cyan Edition"] }
  ]
};

const similarProducts = [
  { id: 2, name: 'Manhattan Power', price: '$250', image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=900&q=80', rating: 4.9 },
  { id: 3, name: 'Coronado Fast', price: '$240', image: 'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?auto=format&fit=crop&w=900&q=80', rating: 4.6 },
  { id: 4, name: 'Del Mar Starter', price: '$180', image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=900&q=80', rating: 4.5 },
];

const reviews = [
  { id: 1, author: "James Wilson", rating: 5, date: "October 12, 2025", title: "Game changer for control", text: "I've been playing padel for 4 years and this racquet immediately improved my drop shots. The sweet spot is massive and the textured face generates ridiculous spin." },
  { id: 2, author: "Sofia Martinez", rating: 4, date: "September 28, 2025", title: "Excellent feel, slightly heavy", text: "Love the matte finish and the overall feel of the EVA soft core. I opted for the 375g version which turned out perfectly balanced, though my arm gets tired after 2 hours." }
];

export default function ProductDetailsPage({ navigate }) {
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariants, setSelectedVariants] = useState({ "Weight": "365g", "Color": "Matte Black" });

  const StarIcon = ({ fill = "#F8D247" }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill={fill} stroke={fill} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );

  return (
    <div className="page-container" style={{ backgroundColor: 'var(--background-color)' }}>
      
      {/* 1. HERO PRODUCT SECTION */}
      <div className="container product-detail-grid">
        
        {/* Left: Image Gallery */}
        <div className="product-gallery">
          {/* Thumbnails */}
          <div className="product-gallery-thumbnails">
            {productData.images.map((img, idx) => (
              <div 
                key={idx} 
                onClick={() => setActiveImage(idx)}
                style={{ 
                  aspectRatio: '1/1', 
                  backgroundColor: 'var(--surface-color)', 
                  borderRadius: '8px', 
                  cursor: 'pointer',
                  border: activeImage === idx ? '2px solid var(--text-primary)' : '1px solid rgba(255,255,255,0.05)',
                  overflow: 'hidden',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  minWidth: '80px', flexShrink: 0
                }}
              >
                <img src={img} alt={`Thumbnail ${idx}`} style={{ width: '80%', height: '80%', objectFit: 'contain', mixBlendMode: 'normal' }} />
              </div>
            ))}
          </div>
          {/* Main Image */}
          <div className="product-gallery-main" style={{ backgroundColor: 'var(--surface-color)', border: '1px solid rgba(255,255,255,0.05)' }}>
            <img src={productData.images[activeImage]} alt={productData.name} style={{ mixBlendMode: 'normal' }} />
          </div>
        </div>

        {/* Right: Product Details & Actions */}
        <div style={{ paddingRight: '20px', minWidth: 0 }}>
          <div style={{ fontSize: '12px', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px', fontWeight: 600 }}>
            {productData.brand}
          </div>
          <h1 className="title-xl" style={{ marginBottom: '16px', color: 'var(--text-primary)' }}>{productData.name}</h1>
          
          {/* Ratings & Reviews */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <div style={{ display: 'flex', gap: '4px' }}>
              {[1, 2, 3, 4, 5].map(star => <StarIcon key={star} fill={star <= Math.round(productData.rating) ? "#F8D247" : "none"} />)}
            </div>
            <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)' }}>{productData.rating}</span>
            <span style={{ fontSize: '14px', color: '#F8D247', cursor: 'pointer', textDecoration: 'underline' }}>See all {productData.reviewCount} reviews</span>
          </div>

          {/* Pricing */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '32px' }}>
            <span style={{ fontWeight: 800, color: 'var(--text-primary)' }}>${productData.price.toFixed(2)}</span>
            {productData.originalPrice > productData.price && (
              <span style={{ fontSize: '18px', color: 'var(--text-secondary)', textDecoration: 'line-through' }}>${productData.originalPrice.toFixed(2)}</span>
            )}
            <span style={{ fontSize: '12px', padding: '4px 8px', backgroundColor: 'rgba(248, 210, 71, 0.1)', color: '#F8D247', borderRadius: '4px', fontWeight: 600 }}>In Stock</span>
          </div>

          <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.6', marginBottom: '40px' }}>
            {productData.description}
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.05)', marginBottom: '32px' }}/>

          {/* Variants Selectors */}
          {productData.variants.map((variant) => (
            <div key={variant.label} style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px', color: 'var(--text-primary)' }}>{variant.label}: <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>{selectedVariants[variant.label]}</span></div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {variant.options.map(opt => {
                  const isSelected = selectedVariants[variant.label] === opt;

                  return (
                    <button 
                      key={opt}
                      onClick={() => setSelectedVariants({...selectedVariants, [variant.label]: opt})}
                      aria-pressed={isSelected}
                      style={{ 
                        padding: '10px 20px', 
                        borderRadius: '8px', 
                        border: isSelected ? '2px solid var(--accent-cta)' : '1px solid var(--border-color)',
                        backgroundColor: isSelected ? 'var(--accent-cta)' : 'var(--surface-color)',
                        color: isSelected ? '#121212' : 'var(--text-primary)',
                        boxShadow: isSelected ? '0 0 0 2px rgba(248, 210, 71, 0.2)' : 'none',
                        fontWeight: 600, fontSize: '13px', cursor: 'pointer', transition: 'all 0.2s'
                      }}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Actions: Quantity & Add to Cart */}
          <div className="cart-actions-wrapper">
            <div className="quantity-control" style={{ display: 'flex', alignItems: 'center', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '999px', padding: '0 20px', height: '56px' }}>
               <button onClick={() => setQuantity(Math.max(1, quantity - 1))} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', padding: '0 10px', color: 'var(--text-primary)' }}>-</button>
               <span style={{ fontSize: '16px', fontWeight: 600, width: '32px', textAlign: 'center', color: 'var(--text-primary)' }}>{quantity}</span>
               <button onClick={() => setQuantity(quantity + 1)} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', padding: '0 10px', color: 'var(--text-primary)' }}>+</button>
            </div>
            
            <button className="pill-button add-to-cart-button" onClick={() => navigate('/cart')} style={{ backgroundColor: 'var(--text-primary)', color: 'var(--background-color)', height: '56px' }}>
              <span>Add to Cart - ${(productData.price * quantity).toFixed(2)}</span>
            </button>
          </div>

          {/* Fast Checkout CTA */}
          <button className="pill-button" style={{ width: '100%', backgroundColor: 'var(--accent-yellow)', color: '#090909', height: '56px', marginBottom: '32px' }}>
            <span>Buy it now</span>
          </button>

          {/* Shipping & Support Perks */}
          <div className="perks-grid" style={{ backgroundColor: 'var(--surface-color)', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text-primary)" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
               <div>
                 <span style={{ fontSize: '13px', fontWeight: 700, display: 'block', color: 'var(--text-primary)' }}>Fast Dispatch</span>
                 <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Ships within 24 hours</span>
               </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text-primary)" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
               <div>
                 <span style={{ fontSize: '13px', fontWeight: 700, display: 'block', color: 'var(--text-primary)' }}>30-Day Returns</span>
                 <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Hassle-free guarantee</span>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. TABBED CONTENT SECTION (Details & Specs) */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'var(--surface-color)' }}>
        <div className="container tabbed-content-grid">
           
           {/* Detailed Description */}
           <div>
              <h2 className="title-md" style={{ marginBottom: '24px', color: 'var(--text-primary)' }}>About this item</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.6', marginBottom: '32px' }}>
                The Blanca La Jolla is crafted for players who dictate the pace of the game. Utilizing an advanced aerospace-grade carbon fiber lay-up, this racquet ensures that every touch is translated into pure kinetic energy, while minimizing structural vibrations to protect your arm during intense tournament play.
              </p>
              <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '16px', color: 'var(--text-primary)' }}>Key Features</h3>
              <ul style={{ listStyleType: 'disc', color: 'var(--text-secondary)', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '15px' }}>
                {productData.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
           </div>
           
           {/* Technical Specs Table */}
           <div>
              <h2 className="title-md" style={{ marginBottom: '24px', color: 'var(--text-primary)' }}>Technical Specs</h2>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                 {Object.entries(productData.specs).map(([key, value], idx) => (
                    <div key={key} style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', backgroundColor: idx % 2 === 0 ? 'rgba(0,0,0,0.2)' : 'transparent', borderRadius: idx % 2 === 0 ? '8px' : '0' }}>
                       <span style={{ color: 'var(--text-secondary)', fontWeight: 600, fontSize: '14px' }}>{key}</span>
                       <span style={{ color: 'var(--text-primary)', fontWeight: 500, fontSize: '14px' }}>{value}</span>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </div>

      {/* 3. CUSTOMER REVIEWS */}
      <div className="container" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
         <h2 className="title-md" style={{ fontSize: '40px', marginBottom: '64px', textAlign: 'center', color: 'var(--text-primary)' }}>Customer Reviews</h2>
         
         <div className="reviews-grid">
            {/* Rating Summary */}
            <div>
               <div style={{ fontSize: '64px', fontWeight: 800, lineHeight: 1, color: 'var(--text-primary)' }}>{productData.rating}</div>
               <div style={{ display: 'flex', gap: '4px', margin: '12px 0' }}>
                 {[1,2,3,4,5].map(star => <StarIcon key={star} fill="#F8D247" />)}
               </div>
               <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '32px' }}>Based on {productData.reviewCount} reviews</p>
               
               {/* Progress Bars */}
               {[5,4,3,2,1].map(stars => (
                 <div key={stars} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '13px', width: '20px', color: 'var(--text-primary)' }}>{stars}★</span>
                    <div style={{ flex: 1, height: '8px', backgroundColor: 'var(--surface-color)', borderRadius: '4px', overflow: 'hidden' }}>
                       <div style={{ height: '100%', width: stars === 5 ? '80%' : stars === 4 ? '15%' : '2%', backgroundColor: '#F8D247' }}></div>
                    </div>
                 </div>
               ))}
               
               <button style={{ width: '100%', padding: '16px', border: '1px solid rgba(255,255,255,0.2)', backgroundColor: 'transparent', color: 'var(--text-primary)', borderRadius: '999px', fontWeight: 700, marginTop: '40px', cursor: 'pointer' }}>Write a Review</button>
            </div>
            
            {/* Review Flow */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              {reviews.map(review => (
                <div key={review.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '40px' }}>
                   <div style={{ display: 'flex', gap: '4px', marginBottom: '12px' }}>
                     {[1,2,3,4,5].map(star => <StarIcon key={star} fill={star <= review.rating ? "#F8D247" : "none"} />)}
                   </div>
                   <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary)' }}>{review.title}</h4>
                   <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.6', marginBottom: '16px' }}>{review.text}</p>
                   <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                     <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{review.author}</span> — {review.date}
                   </div>
                </div>
              ))}
              <div style={{ textAlign: 'center' }}>
                 <button style={{ color: '#F8D247', background: 'none', border: 'none', fontSize: '15px', fontWeight: 600, cursor: 'pointer', textDecoration: 'underline' }}>Load More Reviews</button>
              </div>
            </div>
         </div>
      </div>

      {/* 4. SIMILAR PRODUCTS CAROUSEL */}
      <div style={{ backgroundColor: 'var(--surface-color)', paddingTop: '100px', paddingBottom: '100px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
         <div className="container">
           <h2 className="title-md" style={{ marginBottom: '48px', color: 'var(--text-primary)' }}>You might also like</h2>
           
           <div className="collection-grid">
             {similarProducts.map(item => (
               <div key={item.id} className="product-card-unit" onClick={() => navigate('/product')} style={{ cursor: 'pointer', backgroundColor: 'var(--background-color)', padding: '24px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div className="product-image-card" style={{ backgroundColor: 'var(--surface-color)', aspectRatio: '1/1', marginBottom: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
                     <img src={item.image} alt={item.name} style={{ width: '80%', height: '80%', objectFit: 'contain', mixBlendMode: 'normal' }} />
                  </div>
                  <div>
                    <h3 className="product-label" style={{ fontSize: '18px', color: 'var(--text-primary)' }}>{item.name}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '8px 0 16px' }}>
                       <StarIcon fill="#F8D247" /> <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)' }}>{item.rating}</span>
                    </div>
                    <p style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)' }}>{item.price}</p>
                  </div>
               </div>
             ))}
           </div>
         </div>
      </div>

    </div>
  )
}
