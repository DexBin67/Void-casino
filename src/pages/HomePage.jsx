import { Link } from 'react-router-dom'

function HomePage({ onRegisterClick, onLoginClick, currentUser }) {
  return (
    <div style={{ background: '#050507', minHeight: '100vh', color: '#e0d0ff' }}>
      {/* BIG HERO - Addictive AF */}
      <div style={{
        background: 'linear-gradient(135deg, #1a0033 0%, #2a004d 50%, #4a0080 100%)',
        padding: '120px 40px 90px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ 
          position: 'absolute', top: '20%', left: '10%', width: '300px', height: '300px',
          background: 'radial-gradient(circle, rgba(255,0,221,0.15) 0%, transparent 70%)',
          borderRadius: '50%', filter: 'blur(60px)'
        }}></div>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ color: '#00ff9d', fontWeight: '800', letterSpacing: '3px', marginBottom: '16px' }}>
            🔥 LEADING CRYPTO CASINO
          </div>
          <h1 style={{ 
            fontSize: '5.2rem', lineHeight: '1.05', margin: '0 0 24px',
            background: 'linear-gradient(90deg, #ff00dd, #c300ff, #00ffdd)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
          }}>
            Win BIG with<br />VOID ORIGINALS
          </h1>
          <p style={{ fontSize: '1.5rem', maxWidth: '620px', margin: '0 auto 40px', opacity: 0.9 }}>
            Provably fair games • Instant payouts • Built for degenerates who chase the rush
          </p>

          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={onRegisterClick}
              style={{ padding: '18px 52px', fontSize: '1.3rem', background: 'linear-gradient(#c300ff, #9f00cc)', border: 'none', borderRadius: '9999px', fontWeight: 'bold', boxShadow: '0 0 30px #c300ff' }}
            >
              REGISTER INSTANTLY
            </button>
            <button 
              onClick={onLoginClick}
              style={{ padding: '18px 52px', fontSize: '1.3rem', background: '#1a1229', border: '2px solid #ff00dd', color: '#ff99ff', borderRadius: '9999px', fontWeight: 'bold' }}
            >
              ENTER THE VOID
            </button>
          </div>
        </div>
      </div>

      {/* Games Section */}
      <div style={{ padding: '60px 40px', maxWidth: '1600px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.8rem', marginBottom: '50px', color: '#ff99ff' }}>
          VOID ORIGINALS
        </h2>
        {/* Your game grid goes here - keep your existing cards but make them bigger and neon */}
      </div>
    </div>
  )
}

export default HomePage