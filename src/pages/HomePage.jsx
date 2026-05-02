import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div style={{ 
      background: '#0a0a0f', 
      minHeight: '100vh', 
      color: '#e0d0ff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Premium Hero Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(/images/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.75,
        zIndex: 0
      }}></div>

      {/* Hero Content */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '140px 20px 80px' }}>
        <img src="/images/void-fox.png" alt="VOID FOX" style={{ height: "320px", filter: "drop-shadow(0 0 80px #c300ff)" }} />
        <h1 style={{ 
          fontSize: 'clamp(3.5rem, 10vw, 7rem)', 
          background: 'linear-gradient(90deg, #ffd700, #ff00dd, #c300ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 80px #ff00dd',
          margin: '20px 0'
        }}>
          VOID CASINO
        </h1>
        <p style={{ fontSize: '1.6rem', opacity: 0.9 }}>Provably fair • Instant payouts • Built for the rush</p>
      </div>

      {/* 8 Games Grid - Premium Cards */}
      <div style={{ padding: '20px', maxWidth: '1600px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
          {[
            { name: "CRASH", path: "/crash", img: "/images/crash-banner.jpg" },
            { name: "PLINKO", path: "/plinko", img: "/images/plinko-banner.jpg" },
            { name: "MINES", path: "/mines", img: "/images/mines-banner.jpg" },
            { name: "DINO RUN", path: "/dino", img: "/images/dino-banner.jpg" },
            { name: "SLOTS", path: "/slots", img: "/images/slots-banner.jpg" },
            { name: "BLACKJACK", path: "/blackjack", img: "/images/blackjack-banner.jpg" },
            { name: "ROULETTE", path: "/roulette", img: "/images/roulette-banner.jpg" },
            { name: "DICE", path: "/dice", img: "/images/dice-banner.jpg" }
          ].map(game => (
            <Link key={game.name} to={game.path} style={{ textDecoration: 'none' }}>
              <div style={{ background: '#1a1229', borderRadius: '20px', overflow: 'hidden', border: '1px solid #3a0033', transition: 'all 0.4s', boxShadow: '0 10px 30px rgba(195, 0, 255, 0.2)' }}>
                <img src={game.img} alt={game.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div style={{ padding: '20px', textAlign: 'center' }}>
                  <h3 style={{ color: '#ff99ff', fontSize: '1.4rem' }}>{game.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage