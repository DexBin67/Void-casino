import { Link } from 'react-router-dom'

function HomePage({ onRegisterClick, onLoginClick, currentUser }) {
  return (
    <div style={{ background: '#0a0a0f', minHeight: '100vh', color: '#e0d0ff', position: 'relative', overflow: 'hidden' }}>

      {/* Background Glow */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        background: 'radial-gradient(circle at 30% 20%, rgba(180,0,255,0.4) 0%, transparent 60%), radial-gradient(circle at 70% 70%, rgba(0,255,200,0.3) 0%, transparent 70%)',
        zIndex: 0
      }}></div>

      {/* VOID FOX THIEF - Clean & Centered */}
      <div style={{ position: 'absolute', top: '120px', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <img 
          src="/images/void-fox.png" 
          alt="VOID FOX" 
          style={{ 
            height: "280px", 
            filter: "drop-shadow(0 0 70px #c300ff)" 
          }} 
        />
      </div>

      {/* Hero Text - Moved down so fox doesn't overlap */}
      <div style={{ position: 'relative', zIndex: 10, padding: '380px 40px 80px', textAlign: 'center' }}>
        <h1 style={{ 
          fontSize: '6.8rem', 
          lineHeight: '0.9', 
          margin: '0 0 20px',
          background: 'linear-gradient(90deg, #ffd700, #ff00dd, #c300ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 80px #ff00dd'
        }}>
          VOID ORIGINALS
        </h1>
        <p style={{ fontSize: '1.7rem', opacity: 0.9 }}>
          Provably fair • Instant payouts • Built for the rush
        </p>
      </div>

      {/* Games Grid */}
      <div style={{ padding: '0 40px 100px', maxWidth: '1600px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '28px' }}>
          <Link to="/crash" style={{ textDecoration: 'none' }}>
            <div style={{ background: '#1a1229', borderRadius: '16px', overflow: 'hidden', border: '1px solid #3a0033' }}>
              <img src="/images/crash.avif" alt="Crash" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '20px', textAlign: 'center' }}>
                <h3 style={{ margin: '0 0 8px', color: '#ff99ff' }}>CRASH</h3>
                <p style={{ color: '#00ff9d' }}>Multipliers up to 1000x</p>
              </div>
            </div>
          </Link>

          <Link to="/plinko" style={{ textDecoration: 'none' }}>
            <div style={{ background: '#1a1229', borderRadius: '16px', overflow: 'hidden', border: '1px solid #3a0033' }}>
              <img src="/images/plinko.avif" alt="Plinko" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '20px', textAlign: 'center' }}>
                <h3 style={{ margin: '0 0 8px', color: '#ff99ff' }}>PLINKO</h3>
                <p style={{ color: '#00ff9d' }}>Drop & Win Big</p>
              </div>
            </div>
          </Link>

          <Link to="/mines" style={{ textDecoration: 'none' }}>
            <div style={{ background: '#1a1229', borderRadius: '16px', overflow: 'hidden', border: '1px solid #3a0033' }}>
              <img src="/images/mines.avif" alt="Mines" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '20px', textAlign: 'center' }}>
                <h3 style={{ margin: '0 0 8px', color: '#ff99ff' }}>MINES</h3>
                <p style={{ color: '#00ff9d' }}>High Risk High Reward</p>
              </div>
            </div>
          </Link>

          <Link to="/dino" style={{ textDecoration: 'none' }}>
            <div style={{ background: '#1a1229', borderRadius: '16px', overflow: 'hidden', border: '1px solid #3a0033' }}>
              <img src="/images/dino.avif" alt="Dino" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '20px', textAlign: 'center' }}>
                <h3 style={{ margin: '0 0 8px', color: '#ff99ff' }}>DINO RUN</h3>
                <p style={{ color: '#00ff9d' }}>Endless Runner</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage