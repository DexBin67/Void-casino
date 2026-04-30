import { Link } from 'react-router-dom'

function HomePage({ onRegisterClick, onLoginClick, currentUser }) {
  return (
    <div style={{ 
      background: '#050507', 
      minHeight: '100vh', 
      color: '#e0d0ff', 
      position: 'relative', 
      overflow: 'hidden' 
    }}>
      {/* Deep Nebula Background */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'radial-gradient(circle at 30% 20%, rgba(120, 0, 255, 0.35) 0%, transparent 60%), radial-gradient(circle at 70% 70%, rgba(0, 255, 200, 0.25) 0%, transparent 70%)',
        zIndex: 0
      }}></div>

      {/* Cyber Grid Overlay */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: `
          linear-gradient(rgba(140, 0, 255, 0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(140, 0, 255, 0.08) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        zIndex: 1,
        opacity: 0.6
      }}></div>

      {/* Hero Content */}
      <div style={{ 
        position: 'relative', zIndex: 2, 
        padding: '140px 40px 100px', textAlign: 'center' 
      }}>
        <div style={{ color: '#00ff9d', fontWeight: '800', letterSpacing: '4px', marginBottom: '20px' }}>
          🔥 DEEP IN THE VOID
        </div>
        
        <h1 style={{ 
          fontSize: '6rem', 
          lineHeight: '1.0', 
          margin: '0 0 30px',
          background: 'linear-gradient(90deg, #ff00dd, #c300ff, #00ffdd)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 80px #ff00dd, 0 0 120px #c300ff'
        }}>
          Win BIG with<br />VOID ORIGINALS
        </h1>

        <p style={{ fontSize: '1.65rem', maxWidth: '720px', margin: '0 auto 50px', opacity: 0.95 }}>
          Provably fair games • Instant payouts • Built for those who chase the infinite rush
        </p>

        <div style={{ display: 'flex', gap: '24px', justifyContent: 'center' }}>
          <button 
            onClick={onRegisterClick}
            style={{ 
              padding: '22px 60px', fontSize: '1.4rem', 
              background: 'linear-gradient(#c300ff, #9f00cc)', 
              border: 'none', borderRadius: '9999px', 
              fontWeight: 'bold', boxShadow: '0 0 50px #c300ff' 
            }}
          >
            REGISTER INSTANTLY
          </button>
          <button 
            onClick={onLoginClick}
            style={{ 
              padding: '22px 60px', fontSize: '1.4rem', 
              background: '#0f0a1f', border: '3px solid #ff00dd', 
              color: '#ff99ff', borderRadius: '9999px', fontWeight: 'bold' 
            }}
          >
            ENTER THE VOID
          </button>
        </div>
      </div>

      {/* Your games grid goes below here */}
    </div>
  )
}

export default HomePage