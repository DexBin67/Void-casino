import { Link } from 'react-router-dom'

function HomePage({ onRegisterClick, onLoginClick, currentUser }) {
  return (
    <div style={{ background: '#0a0a0f', minHeight: '100vh', color: '#e0d0ff', position: 'relative', overflow: 'hidden' }}>

      {/* Background + Fox accent glows */}
      <div style={{ position: 'absolute', top: '20%', left: '10%', fontSize: '220px', opacity: 0.08, zIndex: 1, filter: 'blur(20px)' }}>🦊</div>

      {/* Hero */}
      <div style={{ position: 'relative', zIndex: 5, padding: '160px 40px 120px', textAlign: 'center' }}>
        <div style={{ color: '#ffd700', fontWeight: '900', letterSpacing: '6px', marginBottom: '20px' }}>DEEP IN THE VOID</div>
        
        <h1 style={{ 
          fontSize: '7rem', 
          lineHeight: '0.9', 
          margin: '0 0 30px',
          fontFamily: "'Impact', 'Arial Black', sans-serif",
          background: 'linear-gradient(90deg, #ffd700, #ff00dd, #c300ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 90px #ffd700'
        }}>
          VOID ORIGINALS
        </h1>

        <p style={{ fontSize: '1.7rem', maxWidth: '720px', margin: '0 auto 50px', opacity: 0.9 }}>
          Provably fair • Instant payouts • Built for those who chase the infinite rush
        </p>

        {!currentUser && (
          <div style={{ display: 'flex', gap: '28px', justifyContent: 'center' }}>
            <button onClick={onRegisterClick} style={{ padding: '24px 68px', fontSize: '1.5rem', background: 'linear-gradient(#ffd700, #ffaa00)', color: '#000', border: 'none', borderRadius: '9999px', fontWeight: 'bold', boxShadow: '0 0 70px #ffd700' }}>
              JOIN THE VOID
            </button>
            <button onClick={onLoginClick} style={{ padding: '24px 68px', fontSize: '1.5rem', background: 'transparent', border: '3px solid #ffd700', color: '#ffd700', borderRadius: '9999px', fontWeight: 'bold' }}>
              ENTER THE VOID
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage