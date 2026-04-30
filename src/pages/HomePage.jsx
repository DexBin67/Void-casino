import { Link } from 'react-router-dom'

function HomePage({ onRegisterClick, onLoginClick, currentUser }) {
  return (
    <div style={{ 
      background: '#0a0a0f', 
      minHeight: '100vh', 
      color: '#e0d0ff',
      width: '100%',
      overflowY: 'auto',
      position: 'relative'
    }}>

      {/* Background Glow */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        background: 'radial-gradient(circle at 30% 20%, rgba(180,0,255,0.4) 0%, transparent 60%), radial-gradient(circle at 70% 70%, rgba(0,255,200,0.3) 0%, transparent 70%)',
        zIndex: 0
      }}></div>

      {/* VOID FOX THIEF */}
      <div style={{ position: 'relative', zIndex: 5, paddingTop: '60px', textAlign: 'center' }}>
        <img 
          src="/images/void-fox.png" 
          alt="VOID FOX" 
          style={{ 
            height: "280px", 
            maxWidth: "90%", 
            filter: "drop-shadow(0 0 70px #c300ff)" 
          }} 
        />
      </div>

      {/* Hero Text */}
      <div style={{ position: 'relative', zIndex: 10, padding: '30px 20px 60px', textAlign: 'center' }}>
        <h1 style={{ 
          fontSize: 'clamp(2.8rem, 8vw, 6.5rem)', 
          lineHeight: '0.95', 
          margin: '0 0 16px',
          background: 'linear-gradient(90deg, #ffd700, #ff00dd, #c300ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 60px #ff00dd'
        }}>
          VOID ORIGINALS
        </h1>
        <p style={{ fontSize: '1.3rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto' }}>
          Provably fair • Instant payouts • Built for the rush
        </p>
      </div>

      {/* Games Grid with Hover */}
      <div style={{ padding: '20px 20px 120px', maxWidth: '1600px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
          gap: '24px' 
        }}>
          
          <Link to="/crash" style={{ textDecoration: 'none' }}>
            <div className="game-card" style={{ background: '#1a1229', borderRadius