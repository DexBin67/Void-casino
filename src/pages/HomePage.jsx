import { Link } from 'react-router-dom'

function HomePage({ onRegisterClick, onLoginClick, currentUser }) {
  return (
    <div style={{ background: '#0a0a0f', minHeight: '100vh', color: '#e0d0ff' }}>

      {/* Minimal Hero */}
      <div style={{ padding: '80px 40px 60px', textAlign: 'center', background: 'linear-gradient(#1a0033, #0a0a0f)' }}>
        <h1 style={{ fontSize: '3.8rem', margin: '0 0 16px', color: '#ff00dd' }}>VOID ORIGINALS</h1>
        <p style={{ fontSize: '1.4rem', opacity: 0.9 }}>Provably fair • Instant payouts • Built for the rush</p>
      </div>

      {/* Main Game Grid - The Focus */}
      <div style={{ padding: '40px', maxWidth: '1600px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
          
          {/* Crash */}
          <Link to="/crash" style={{ textDecoration: 'none' }}>
            <div style={{ background: '#1a1229', borderRadius: '16px', overflow: 'hidden', border: '1px solid #3a0033', transition: '0.3s' }}>
              <img src="/images/crash.avif" alt="Crash" style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
              <div style={{ padding: '20px', textAlign: 'center' }}>
                <h3 style={{ margin: '0 0 8px', color: '#ff99ff' }}>CRASH</h3>
                <p style={{ color: '#00ff9d', fontSize: '0.95rem' }}>Multipliers up to 1000x</p>
              </div>
            </div>
          </Link>

          {/* Plinko */}
          <Link to="/plinko" style={{ textDecoration: 'none' }}>
            <div style={{ background: '#1a1229', borderRadius: '16px', overflow: 'hidden', border: '1px solid #3a0033', transition: '0.3s' }}>
              <img src="/images/plinko.avif" alt="Plinko" style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
              <div style={{ padding: '20px', textAlign: 'center' }}>
                <h3 style={{ margin: '0 0 8px', color: '#ff99ff' }}>PLINKO</h3>
                <p style={{ color: '#00ff9d', fontSize: '0.95rem' }}>Drop & Win Big</p>
              </div>
            </div>
          </Link>

          {/* Mines */}
          <Link to="/mines" style={{ textDecoration: 'none' }}>
            <div style={{ background: '#1a1229', borderRadius: '16px', overflow: 'hidden', border: '1px solid #3a0033', transition: '0.3s' }}>
              <img src="/images/mines.avif" alt="Mines" style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
              <div style={{ padding: '20px', textAlign: 'center' }}>
                <h3 style={{ margin: '0 0 8px', color: '#ff99ff' }}>MINES</h3>
                <p style={{ color: '#00ff9d', fontSize: '0.95rem' }}>High Risk High Reward</p>
              </div>
            </div>
          </Link>

          {/* Dino */}
          <Link to="/dino" style={{ textDecoration: 'none' }}>
            <div style={{ background: '#1a1229', borderRadius: '16px', overflow: 'hidden', border: '1px solid #3a0033', transition: '0.3s' }}>
              <img src="/images/dino.avif" alt="Dino" style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
              <div style={{ padding: '20px', textAlign: 'center' }}>
                <h3 style={{ margin: '0 0 8px', color: '#ff99ff' }}>DINO RUN</h3>
                <p style={{ color: '#00ff9d', fontSize: '0.95rem' }}>Endless Runner</p>
              </div>
            </div>
          </Link>

          {/* Add more slots here later */}
          <div style={{ background: '#1a1229', borderRadius: '16px', overflow: 'hidden', border: '1px solid #3a0033', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '260px', color: '#666' }}>
            More Slots Coming Soon
          </div>

        </div>
      </div>
    </div>
  )
}

export default HomePage