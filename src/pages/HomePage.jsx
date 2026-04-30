import { Link } from 'react-router-dom'

function HomePage({ onRegisterClick, onLoginClick, currentUser }) {
  return (
    <div style={{ background: '#050507', minHeight: '100vh', color: '#e0e0ff' }}>
      {/* Hero - Toshi Style */}
      <div style={{
        background: 'linear-gradient(135deg, #1a0033 0%, #4a0080 100%)',
        padding: '100px 40px 80px',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div style={{ color: '#00ff9d', fontWeight: 'bold', marginBottom: '12px' }}>LEADING CRYPTO CASINO</div>
        <h1 style={{ fontSize: '4.8rem', lineHeight: '1.1', color: '#ff00dd', textShadow: '0 0 40px #ff00dd' }}>
          Win BIG with<br />VOID Originals
        </h1>
        <p style={{ fontSize: '1.4rem', maxWidth: '700px', margin: '20px auto' }}>
          Play premium, provably fair games with instant payouts.
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '30px' }}>
          <button onClick={onRegisterClick} style={{ padding: '18px 48px', fontSize: '1.2rem', background: '#c300ff', border: 'none', borderRadius: '9999px', fontWeight: 'bold' }}>
            Register Instantly
          </button>
          <button onClick={onLoginClick} style={{ padding: '18px 48px', fontSize: '1.2rem', background: '#9f00cc', border: 'none', borderRadius: '9999px', fontWeight: 'bold' }}>
            ENTER THE VOID
          </button>
        </div>
      </div>

      {/* Games Grid */}
      <div style={{ padding: '60px 40px', maxWidth: '1600px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px', color: '#ff99ff', fontSize: '2.2rem' }}>VOID Originals</h2>
        {/* Your existing games grid stays here */}
      </div>
    </div>
  )
}

export default HomePage