import React from 'react'

const testimonials = [
  {
    id: 1,
    quote: "Amazing customer service, fantastic paddle. I've tried many brands, but the precision and touch of the La Jolla is unmatched. It feels like an extension of my arm.",
    name: "Jake T.",
    location: "Del Mar, CA",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=240&q=80"
  },
  {
    id: 2,
    quote: "The Manhattan gives me exactly what I need on the court. Ultimate power without sacrificing the sweet spot. Incredible design and top-tier build quality.",
    name: "Sarah L.",
    location: "Miami, FL",
    image: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=240&q=80"
  },
  {
    id: 3,
    quote: "Beautiful, cohesive aesthetics and a matte finish that turns heads. The performance speaks for itself. Highly recommended for anyone taking their game seriously.",
    name: "Marcus P.",
    location: "Austin, TX",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=240&q=80"
  }
]

export default function TestimonialsPage() {
  return (
    <div className="section container" style={{ paddingTop: '160px', minHeight: '100vh', backgroundColor: '#090909' }}>
       
       {/* Dark Mode Override logic handled directly inline for safety or via global CSS */}
       
       <header style={{ textAlign: 'center', marginBottom: '100px' }}>
          <h1 className="title-display" style={{ color: '#FFFFFF' }}>See what our players think.</h1>
          <p className="text-subtitle" style={{ color: '#888888', marginTop: '24px', fontSize: '16px' }}>
             Don't just take our word for it. Our community shares their experience.
          </p>
       </header>
       
         <div className="testimonials-grid">
         {testimonials.map(item => (
           <div key={item.id} style={{
               backgroundColor: '#111111', 
               border: '1px solid rgba(255,255,255,0.05)', 
               borderRadius: '12px', 
               padding: '48px 32px',
               display: 'flex',
               flexDirection: 'column',
               justifyContent: 'space-between'
             }}>
             
             <div>
               <div style={{ display: 'flex', gap: '4px', marginBottom: '24px' }}>
                  {/* Rating Stars using Golden Yellow */}
                  {[1,2,3,4,5].map(star => (
                    <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill="#F8D247" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  ))}
               </div>
               
               <p style={{ color: '#FFFFFF', fontSize: '18px', lineHeight: '1.6', fontWeight: 400, marginBottom: '40px' }}>
                 "{item.quote}"
               </p>
             </div>
             
             <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
               <img 
                 src={item.image} 
                 alt={`Reviewer ${item.name}`} 
                 style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }} 
               />
               <div>
                 <span style={{ color: '#FFFFFF', display: 'block', fontWeight: 600, fontSize: '14px', marginBottom: '4px' }}>{item.name}</span>
                 <span style={{ color: '#888888', display: 'block', fontSize: '13px' }}>{item.location}</span>
               </div>
             </div>

           </div>
         ))}
       </div>
    </div>
  )
}

