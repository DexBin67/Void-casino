import { Link } from 'react-router-dom'

function HomePage({ onRegisterClick, onLoginClick, currentUser }) {
  return (
    <div style={{ background: '#050507', minHeight: '100vh', color: '#e0d0ff', position: 'relative', overflow: 'hidden' }}>
      
      {/* Deep Nebula Background */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        background: 'radial-gradient(circle at 25% 30%, rgba(180,0,255,0.45) 0%, transparent 60%), radial-gradient(circle at 75% 75%, rgba(0,255,220,0.35) 0%, transparent 70%)',
        zIndex: 0
      }}></div>

      {/* Floating Casino Elements - Lots of them */}
      <div style={{ position: 'absolute', top: '12%', left: '8%', fontSize: '85px', opacity: 0.25, zIndex: 1, transform: 'rotate(-25deg)' }}>🪙</div>
      <div style={{ position: 'absolute', top: '28%', right: '15%', fontSize: '110px', opacity: 0.22, zIndex: 1, transform: 'rotate(30deg)' }}>🪙</div>
      <div style={{ position: 'absolute', top: '45%', left: '18%', fontSize: '70px', opacity: 0.28, zIndex: 1 }}>🃏</div>
      <div style={{ position: 'absolute', top: '55%', right: '22%', fontSize: '95px', opacity: 0.20, zIndex: 1, transform: 'rotate(-15deg)' }}>🎰</div>
      <div style={{ position: 'absolute', bottom: '32%', left: '12%', fontSize: '80px', opacity: 0.26, zIndex: 1 }}>♠️</div>
      <div style={{ position: 'absolute', bottom: '45%', right: '18%', fontSize: '65px', opacity: 0.24, zIndex: 1 }}>🪙</div>
      <div style={{ position: 'absolute', top: '65%', left: '28%', fontSize: '100px', opacity: 0.18, zIndex: 1, transform: 'rotate(40deg)' }}>🎲</div>
      <div style={{ position: 'absolute', top: '22%', right: '28%', fontSize: '75px', opacity: 0.23, zIndex: 1 }}>♣️</div>

      {/* Void Portals */}
      <div style={{ position: 'absolute', top: '35%', left: '8%', width: '220px', height: '220px', border: '4px solid rgba(255,0,221,0.35)', borderRadius: '50%', boxShadow: '0 0 90px #ff00dd', zIndex: 1, opacity: 0.25 }}></div>
      <div style={{ position: 'absolute', bottom: '35%', right: '15%', width: '160px', height: '160px', border: '4px solid rgba(0,255,200,0.35)', borderRadius: '50%', boxShadow: '0 0 70px #00ffcc', zIndex: 1, opacity: 0.22 }}></div>

      {/* Cyber Grid */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: `linear-gradient(rgba(140,0,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(140,0,255,0.12) 1px, transparent 1px)`,
        backgroundSize: '55px 55px',
        zIndex: 2
      }}></div>

      {/* Hero Content */}
      <div style={{ position: 'relative', zIndex: 5, padding: '160px 40px 120px', textAlign: 'center' }}>
        <div style={{ color: '#00ff9d', fontWeight: '900', letterSpacing: '6px', marginBottom: '20px' }}>DEEP IN THE VOID</div>
        
        <h1 style={{ 
          fontSize: '6.4rem', 
          lineHeight: '0.95', 
          margin: '0 0 32px',
          fontFamily: "'Impact', 'Arial Black', sans-serif",
          background: 'linear-gradient(90deg, #ff00dd, #c300ff, #00ffdd)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 90px #ff00dd'
        }}>
          WIN BIG WITH<br />VOID ORIGINALS
        </h1>

        <p style={{ fontSize: '1.65rem', maxWidth: '720px', margin: '0 auto 50px', opacity: 0.9 }}>
          Provably fair • Instant payouts • Built for degenerates who live for the rush
        </p>

        {!currentUser && (
          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center' }}>
            <button onClick={onRegisterClick} style={{ padding: '22px 60px', fontSize: '1.45rem', background: 'linear-gradient(#c300ff, #9f00cc)', border: 'none', borderRadius: '9999px', fontWeight: 'bold', boxShadow: '0 0 60px #c300ff' }}>
              REGISTER INSTANTLY
            </button>
            <button onClick={onLoginClick} style={{ padding: '22px 60px', fontSize: '1.45rem', background: '#0f0a1f', border: '3px solid #ff00dd', color: '#ff99ff', borderRadius: '9999px', fontWeight: 'bold' }}>
              ENTER THE VOID
            </button>
          </div>
        )}

        {currentUser && (
          <div style={{ fontSize: '1.8rem', color: '#00ffaa', marginTop: '30px' }}>
            Welcome back, {currentUser.email.split('@')[0]} — ready to chase the rush?
          </div>
        )}
      </div>

      {/* Your games grid below */}
    </div>
  )
}

export default HomePage