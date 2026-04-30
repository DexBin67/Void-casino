import { Link } from 'react-router-dom'

function HomePage({ onRegisterClick, onLoginClick, currentUser }) {
  return (
    <div style={{ background: '#050507', minHeight: '100vh', color: '#e0d0ff', position: 'relative', overflow: 'hidden' }}>
      
      {/* Deep Futuristic Background */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        background: 'radial-gradient(circle at 30% 20%, rgba(180,0,255,0.4) 0%, transparent 60%), radial-gradient(circle at 70% 80%, rgba(0,255,200,0.35) 0%, transparent 70%)',
        zIndex: 0
      }}></div>

      {/* Floating Casino Elements */}
      <div style={{ position: 'absolute', top: '15%', left: '8%', fontSize: '120px', opacity: 0.15, transform: 'rotate(-25deg)', zIndex: 1 }}>🃏</div>
      <div style={{ position: 'absolute', top: '35%', right: '12%', fontSize: '140px', opacity: 0.12, transform: 'rotate(15deg)', zIndex: 1 }}>🎰</div>
      <div style={{ position: 'absolute', bottom: '25%', left: '18%', fontSize: '110px', opacity: 0.18, transform: 'rotate(-35deg)', zIndex: 1 }}>♠️</div>
      <div style={{ position: 'absolute', top: '55%', right: '22%', fontSize: '130px', opacity: 0.14, transform: 'rotate(28deg)', zIndex: 1 }}>💎</div>

      {/* Cyber Grid */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: `linear-gradient(rgba(140,0,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(140,0,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
        zIndex: 2
      }}></div>

      {/* Hero Content */}
      <div style={{ position: 'relative', zIndex: 5, padding: '160px 40px 120px', textAlign: 'center' }}>
        <div style={{ color: '#00ff9d', fontWeight: '900', letterSpacing: '6px', marginBottom: '20px' }}>DEEP IN THE VOID</div>
        
        <h1 style={{ 
          fontSize: '6.5rem', 
          lineHeight: '0.95', 
          margin: '0 0 30px',
          fontFamily: "'Impact', 'Arial Black', sans-serif",
          background: 'linear-gradient(90deg, #ff00dd, #c300ff, #00ffdd)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 80px #ff00dd, 0 0 140px #c300ff'
        }}>
          WIN BIG WITH<br />VOID ORIGINALS
        </h1>

        <p style={{ fontSize: '1.7rem', maxWidth: '720px', margin: '0 auto 50px', opacity: 0.95 }}>
          Provably fair • Instant payouts • Built for degenerates who live for the rush
        </p>

        <div style={{ display: 'flex', gap: '24px', justifyContent: 'center' }}>
          <button 
            onClick={onRegisterClick}
            style={{ padding: '22px 60px', fontSize: '1.45rem', background: 'linear-gradient(#c300ff, #9f00cc)', border: 'none', borderRadius: '9999px', fontWeight: 'bold', boxShadow: '0 0 60px #c300ff' }}
          >
            REGISTER INSTANTLY
          </button>
          <button 
            onClick={onLoginClick}
            style={{ padding: '22px 60px', fontSize: '1.45rem', background: '#0f0a1f', border: '3px solid #ff00dd', color: '#ff99ff', borderRadius: '9999px', fontWeight: 'bold' }}
          >
            ENTER THE VOID
          </button>
        </div>
      </div>

      {/* Your games grid stays below */}
    </div>
  )
}

export default HomePage