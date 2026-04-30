import { Link } from 'react-router-dom'

function HomePage({ onRegisterClick, onLoginClick, currentUser }) {
  return (
    <div style={{ 
      background: '#0a0a0f', 
      minHeight: '100vh', 
      color: '#e0d0ff',
      width: '100%',
      maxWidth: '100%',
      overflowX: 'hidden',        // ← Prevents side scrolling
      overflowY: 'auto',
      position: 'relative',
      boxSizing: 'border-box'
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
            height: "260px", 
            maxWidth: "85%", 
            filter: "drop-shadow(0 0 70px #c300ff)" 
          }} 
        />
      </div>

      {/* Hero Text */}
      <div style={{ position: 'relative', zIndex: 10, padding: '30px 20px 60px', textAlign: 'center' }}>
        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 8vw, 6rem)', 
          lineHeight: '0.95', 
          margin: '0 0 16px',
          background: 'linear-gradient(90deg, #ffd700, #ff00dd, #c300ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 60px #ff00dd'
        }}>
          VOID ORIGINALS
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto', padding: '0 20px' }}>
          Provably fair • Instant payouts • Built for the rush
        </p>
      </div>

      {/* Games Grid - Mobile Friendly */}
      <div style={{ padding: '20px 20px 120px', maxWidth: '1600px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
          gap: '20px' 
        }}>
          {/* Your 8 games here - same as before */}
          <Link to="/crash" style={{ textDecoration: 'none' }}>
            <div style={{ background: '#1a1229', borderRadius: '16px', overflow: 'hidden', border: '1px solid #3a0033', transition: 'all 0.3s' }}>
              <img src="/images/crash.avif" alt="Crash" style={{ width: '100%', height: '160px', objectFit: 'cover' }} />
              <div style={{ padding: '16px', textAlign: 'center' }}>
                <h3 style={{ margin: '0 0 6px', color: '#ff99ff' }}>CRASH</h3>
                <p style={{ color: '#00ff9d' }}>Multipliers up to 1000x</p>
              </div>
            </div>
          </Link>

          {/* Repeat for Plinko, Mines, Dino, Slots, Blackjack, Roulette, Dice... (use the previous 8-game code) */}

        </div>
      </div>

      {/* Premium Footer */}
      <footer style={{ 
        background: '#050507', 
        borderTop: '1px solid #3a0033', 
        padding: '60px 20px 40px', 
        textAlign: 'center', 
        color: '#777', 
        fontSize: '0.95rem'
      }}>
        <p>© 2026 VOID CASINO • All Rights Reserved</p>
        <p style={{ marginTop: '8px' }}>18+ | Gamble Responsibly</p>
      </footer>
    </div>
  )
}

export default HomePage