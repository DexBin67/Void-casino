import { Link } from 'react-router-dom'

function HomePage({ currentUser }) {
  return (
    <div style={{ 
      background: '#0a0a0f', 
      minHeight: '100vh', 
      color: '#e0d0ff',
      width: '100%',
      maxWidth: '100vw',
      overflowX: 'hidden',
      overflowY: 'auto'
    }}>
      {/* Hero with Fox */}
      <div style={{ textAlign: 'center', padding: '80px 20px 40px' }}>
        <img src="/images/void-fox.png" alt="VOID FOX" style={{ height: "260px", filter: "drop-shadow(0 0 70px #c300ff)" }} />
        <h1 style={{ 
          fontSize: 'clamp(3rem, 9vw, 6.5rem)', 
          background: 'linear-gradient(90deg, #ffd700, #ff00dd, #c300ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          margin: '20px 0 10px'
        }}>
          VOID ORIGINALS
        </h1>
      </div>

      {/* 8 Games Grid */}
      <div style={{ padding: '20px', maxWidth: '1600px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          {[
            { name: "CRASH", path: "/crash", img: "/images/crash.avif" },
            { name: "PLINKO", path: "/plinko", img: "/images/plinko.avif" },
            { name: "MINES", path: "/mines", img: "/images/mines.avif" },
            { name: "DINO RUN", path: "/dino", img: "/images/dino.avif" },
            { name: "SLOTS", path: "/slots", emoji: "🎰" },
            { name: "BLACKJACK", path: "/blackjack", emoji: "♠️" },
            { name: "ROULETTE", path: "/roulette", emoji: "🎡" },
            { name: "DICE", path: "/dice", emoji: "🎲" }
          ].map(game => (
            <Link key={game.name} to={game.path} style={{ textDecoration: 'none' }}>
              <div style={{ background: '#1a1229', borderRadius: '16px', overflow: 'hidden', border: '1px solid #3a0033', transition: 'all 0.3s' }}>
                {game.img ? (
                  <img src={game.img} alt={game.name} style={{ width: '100%', height: '170px', objectFit: 'cover' }} />
                ) : (
                  <div style={{ height: '170px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '90px', background: '#2a1f3d' }}>
                    {game.emoji}
                  </div>
                )}
                <div style={{ padding: '20px', textAlign: 'center' }}>
                  <h3 style={{ color: '#ff99ff' }}>{game.name}</h3>
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