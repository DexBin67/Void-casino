import { Link } from 'react-router-dom'

function HomePage({ onRegisterClick, onLoginClick, currentUser }) {
  return (
    <div style={{ background: '#0a0a0f', minHeight: '100vh', color: '#e0d0ff', position: 'relative', overflow: 'hidden' }}>

      {/* Deep Luxury Nebula */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        background: 'radial-gradient(circle at 25% 25%, rgba(255,215,0,0.28) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(180,0,255,0.42) 0%, transparent 60%)',
        zIndex: 0
      }}></div>

      {/* Floating Premium Casino Elements */}
      <div style={{ position: 'absolute', top: '15%', left: '8%', fontSize: '170px', opacity: 0.24, zIndex: 1, filter: 'drop-shadow(0 0 60px #ffd700)' }}>🪙</div>
      <div style={{ position: 'absolute', top: '32%', right: '12%', fontSize: '145px', opacity: 0.26, zIndex: 1, filter: 'drop-shadow(0 0 55px #ffd700)' }}>🪙</div>
      <div style={{ position: 'absolute', top: '48%', left: '20%', fontSize: '110px', opacity: 0.23, zIndex: 1, transform: 'rotate(-22deg)' }}>🃏</div>
      <div style={{ position: 'absolute', top: '58%', right: '18%', fontSize: '125px', opacity: 0.21, zIndex: 1 }}>🎰</div>
      <div style={{ position: 'absolute', bottom: '28%', left: '15%', fontSize: '95px', opacity: 0.25, zIndex: 1 }}>♠️</div>
      <div style={{ position: 'absolute', top: '22%', right: '25%', fontSize: '80px', opacity: 0.19, zIndex: 1 }}>🎲</div>

      {/* Void Portals */}
      <div style={{ position: 'absolute', top: '38%', left: '10%', width: '260px', height: '260px', border: '5px solid rgba(255,215,0,0.3)', borderRadius: '50%', boxShadow: '0 0 110px #ffd700', zIndex: 1, opacity: 0.35 }}></div>
      <div style={{ position: 'absolute', bottom: '32%', right: '15%', width: '190px', height: '190px', border: '5px solid rgba(180,0,255,0.3)', borderRadius: '50%', boxShadow: '0 0 90px #c300ff', zIndex: 1, opacity: 0.32 }}></div>

      {/* Cyber Grid */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: `linear-gradient(rgba(255,215,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,0.08) 1px, transparent 1px)`,
        backgroundSize: '70px 70px',
        zIndex: 2
      }}></div>

      {/* Hero */}
      <div style={{ position: 'relative', zIndex: 5, padding: '180px 40px 140px', textAlign: 'center' }}>
        <div style={{ color: '#ffd700', fontWeight: '900', letterSpacing: '8px', marginBottom: '20px' }}>THE NEW STANDARD</div>
        
        <h1 style={{ 
          fontSize: '7.4rem', 
          lineHeight: '0.88', 
          margin: '0 0 30px',
          fontFamily: "'Impact', 'Arial Black', sans-serif",
          background: 'linear-gradient(90deg, #ffd700, #ff00dd, #c300ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 100px #ffd700'
        }}>
          VOID<br />ORIGINALS
        </h1>

        <p style={{ fontSize: '1.75rem', maxWidth: '780px', margin: '0 auto 50px', opacity: 0.95 }}>
          Where luxury meets luck. Provably fair. Instant payouts. Built for those who demand the best.
        </p>

        {!currentUser && (
          <div style={{ display: 'flex', gap: '28px', justifyContent: 'center' }}>
            <button onClick={onRegisterClick} style={{ padding: '26px 72px', fontSize: '1.55rem', background: 'linear-gradient(#ffd700, #ffaa00)', color: '#000', border: 'none', borderRadius: '9999px', fontWeight: 'bold', boxShadow: '0 0 80px #ffd700' }}>
              JOIN THE VOID
            </button>
            <button onClick={onLoginClick} style={{ padding: '26px 72px', fontSize: '1.55rem', background: 'transparent', border: '3px solid #ffd700', color: '#ffd700', borderRadius: '9999px', fontWeight: 'bold' }}>
              ENTER THE VOID
            </button>
          </div>
        )}

        {currentUser && (
          <div style={{ fontSize: '2.1rem', color: '#ffd700', marginTop: '30px' }}>
            Welcome back, {currentUser.email.split('@')[0]} — the high rollers are waiting.
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage