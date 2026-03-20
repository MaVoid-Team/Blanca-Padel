import React from 'react'

export default function CartPage({ navigate }) {
  // Simulating an empty cart as specified by the design's layout
  const cartItems = []

  return (
    <div className="section container" style={{ paddingTop: '120px', minHeight: 'calc(100vh - 200px)' }}>
      <h1 className="title-lg" style={{ marginBottom: '8px' }}>Your cart ({cartItems.length})</h1>
      
      <div className="cart-layout">
        <div className="cart-main">
          {cartItems.length === 0 ? (
            <div className="cart-empty-state">
              <svg className="cart-icon-large" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <p style={{ fontSize: '18px', color: 'var(--text-secondary)', marginBottom: '32px' }}>Looks like your cart is empty...</p>
              <button 
                className="button" 
                style={{ padding: '16px 32px', fontSize: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}
                onClick={() => navigate('/collection')}
              >
                Shop racquets
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          ) : (
             // Cart items list would go here
             <div>Items...</div>
          )}
        </div>
        
        <div className="cart-sidebar">
          <div className="overview-card">
            <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '24px' }}>Overview</h3>
            
            <div className="overview-row">
              <span>Subtotal</span>
              <span>$0.00</span>
            </div>
            
            <div className="overview-row">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            
            <div className="overview-row">
              <span>Discount</span>
              <span>Calculated at checkout</span>
            </div>
            
            <div className="overview-total">
              <span>Total</span>
              <span>$0.00</span>
            </div>
            
            <button 
              className="button" 
              style={{ width: '100%', padding: '16px', fontSize: '16px', marginTop: '32px' }}
              disabled={cartItems.length === 0}
            >
              Your cart is empty
            </button>
            
            <div className="payment-icons">
               <div className="payment-icon"><span style={{fontSize: '10px', fontWeight: 'bold'}}>VISA</span></div>
               <div className="payment-icon"><span style={{fontSize: '10px', fontWeight: 'bold'}}>MC</span></div>
               <div className="payment-icon"><span style={{fontSize: '10px', fontWeight: 'bold'}}>AMEX</span></div>
               <div className="payment-icon"><span style={{fontSize: '10px', fontWeight: 'bold'}}>Pay</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
