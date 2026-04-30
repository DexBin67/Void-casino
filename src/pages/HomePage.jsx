import { Link } from 'react-router-dom'

function HomePage({ onRegisterClick, onLoginClick, currentUser }) {
  return (
    <div style={{ background: '#050507', minHeight: '100vh', color: '#e0d0ff', position: 'relative', overflow: 'hidden' }}>
      
      {/* Deep Nebula Background */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        background: 'radial-gradient(circle at 20% 30%, rgba(160,0,255,0.5) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(0,240,255,0.35) 0%, transparent 60%)',
        zIndex: 0
      }}></div>

      {/* Premium Floating Elements */}
      <div style={{ position: 'absolute', top: '15%', left: '10%', fontSize: '180px', opacity: 0.18, zIndex: 1, transform: 'rotate(-28deg)', filter: 'drop-shadow(0 0 40px #ffd700)' }}>🪙</div>
      <div style={{ position: 'absolute', top: '35%', right: '12%', fontSize: '160px', opacity: 0.20, zIndex: 1, transform: 'rotate(22deg)', filter: 'drop-shadow(0 0 50px #ffd700)' }}>🪙</div>
      <div style={{ position: 'absolute', top: '48%', left: '22%', fontSize: '95px', opacity: 0.25, zIndex: 1, transform: 'rotate(-35deg)', filter: 'drop-shadow(0 0 30px #ff00dd)' }}>🃏</div>
      <div style={{ position: 'absolute', top: '62%', right: '18%', fontSize: '130px', opacity: 0.22, zIndex: 1, transform: 'rotate(15deg)', filter: 'drop-shadow(0 0 40px #ff00dd)' }}>🎰</div>
      <div style={{ position: 'absolute', bottom: '25%', left: '15%', fontSize: '110px', opacity: 0.19, zIndex: 1, transform: 'rotate(-20deg)', filter: 'drop-shadow(0 0 35px #ffd700)' }}>🪙</div>

      {/* Void Portals */}
      <div style={{ position: 'absolute', top: '32%', left: '8%', width: '280px', height: '280px', border: '5px solid rgba(255,0,221,0.3)', borderRadius: '50%', boxShadow: '0 0 120px #ff00dd', zIndex: 1, opacity: 0.35 }}></div>
      <div style={{ position: 'absolute', bottom: '28%', right: '15%', width: '200px', height: '200px', border: '5px solid rgba(0,255,200,0.3)', borderRadius: '50%', boxShadow: '0 0 90px #00ffcc', zIndex: 1, opacity: 0.3 }}></div>

      {/* Cyber Grid */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: `linear-gradient(rgba(140,0,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(140,0,255,0.15) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
        zIndex: 2
      }}></div>

      {/* Hero */}
      <div style={{ position: 'relative', zIndex: 5, padding: '160px 40px 120px', textAlign: 'center' }}>
        <div style={{ color: '#00ff9d', fontWeight: '900', letterSpacing: '8px', marginBottom: '20px' }}>DEEP IN THE VOID</div>
        
        <h1 style={{ 
          fontSize: '6.8rem', 
          lineHeight: '0.92', 
          margin: '0 0 30px',
          fontFamily: "'Impact', 'Arial Black', sans-serif",
          background: 'linear-gradient(90deg, #ff00dd, #c300ff, #00ffdd)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 100px #ff00dd'
        }}>
          WIN BIG WITH<br />VOID ORIGINALS
        </h1>

        <p style={{ fontSize: '1.7rem', maxWidth: '720px', margin: '0 auto 50px', opacity: 0.9 }}>
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
          <div style={{ fontSize: '1.9rem', color: '#00ffaa', marginTop: '30px' }}>
            Welcome back, {currentUser.email.split('@')[0]} — ready to chase the rush?
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage