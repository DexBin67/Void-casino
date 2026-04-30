import { Link } from 'react-router-dom'

function HomePage({ onRegisterClick, onLoginClick, currentUser }) {
  return (
    <div style={{ background: '#0a0a0f', minHeight: '100vh', color: '#e0d0ff', position: 'relative', overflow: 'hidden' }}>
      
      {/* Luxury Nebula Background */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        background: 'radial-gradient(circle at 30% 20%, rgba(255, 215, 0, 0.25) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(180, 0, 255, 0.35) 0%, transparent 60%)',
        zIndex: 0
      }}></div>

      {/* Floating Premium Elements */}
      <div style={{ position: 'absolute', top: '18%', left: '10%', fontSize: '160px', opacity: 0.22, zIndex: 1, filter: 'drop-shadow(0 0 60px #ffd700)' }}>🪙</div>
      <div style={{ position: 'absolute', top: '35%', right: '12%', fontSize: '140px', opacity: 0.25, zIndex: 1, filter: 'drop-shadow(0 0 50px #ffd700)' }}>🪙</div>
      <div style={{ position: 'absolute', top: '48%', left: '22%', fontSize: '110px', opacity: 0.20, zIndex: 1, transform: 'rotate(-20deg)' }}>🃏</div>
      <div style={{ position: 'absolute', top: '62%', right: '18%', fontSize: '95px', opacity: 0.23, zIndex: 1 }}>🎰</div>
      <div style={{ position: 'absolute', bottom: '28%', left: '15%', fontSize: '130px', opacity: 0.18, zIndex: 1 }}>♠️</div>

      {/* Elegant Grid Overlay */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: `linear-gradient(rgba(255,215,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,0.06) 1px, transparent 1px)`,
        backgroundSize: '80px 80px',
        zIndex: 1
      }}></div>

      {/* Hero */}
      <div style={{ position: 'relative', zIndex: 5, padding: '180px 40px 140px', textAlign: 'center' }}>
        <div style={{ color: '#ffd700', fontWeight: '900', letterSpacing: '8px', marginBottom: '16px', fontSize: '1.1rem' }}>THE NEW STANDARD IN CRYPTO GAMING</div>
        
        <h1 style={{ 
          fontSize: '7rem', 
          lineHeight: '0.9', 
          margin: '0 0 30px',
          fontFamily: "'Impact', 'Arial Black', sans-serif",
          background: 'linear-gradient(90deg, #ffd700, #ff00dd, #c300ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 80px #ffd700'
        }}>
          VOID<br />ORIGINALS
        </h1>

        <p style={{ fontSize: '1.8rem', maxWidth: '780px', margin: '0 auto 50px', opacity: 0.95 }}>
          Where luxury meets luck. Provably fair. Instant payouts. Built for those who demand the best.
        </p>

        {!currentUser && (
          <div style={{ display: 'flex', gap: '28px', justifyContent: 'center' }}>
            <button onClick={onRegisterClick} style={{ padding: '24px 64px', fontSize: '1.5rem', background: 'linear-gradient(#ffd700, #ffaa00)', color: '#000', border: 'none', borderRadius: '9999px', fontWeight: 'bold', boxShadow: '0 0 70px #ffd700' }}>
              JOIN THE VOID
            </button>
            <button onClick={onLoginClick} style={{ padding: '24px 64px', fontSize: '1.5rem', background: 'transparent', border: '3px solid #ffd700', color: '#ffd700', borderRadius: '9999px', fontWeight: 'bold' }}>
              ENTER THE VOID
            </button>
          </div>
        )}

        {currentUser && (
          <div style={{ fontSize: '2rem', color: '#ffd700', marginTop: '30px' }}>
            Welcome back, {currentUser.email.split('@')[0]} — the tables are waiting.
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage