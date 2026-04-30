import { Link } from 'react-router-dom'
import '../styles/home.css'

const games = [
    {
        id: 'crash',
        name: 'Crash',
        image: '/images/crash.avif',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
            </svg>
        ),
        path: '/crash',
    },
    {
        id: 'plinko',
        name: 'Plinko',
        image: '/images/plinko.avif',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 20h20L12 2zm0 4l6.5 12h-13L12 6z" />
            </svg>
        ),
        path: '/plinko',
    },
    {
        id: 'dino',
        name: 'Dino',
        image: '/images/dino.avif',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 16V8c0-1.1-.9-2-2-2h-3V4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v2H8C6.9 6 6 6.9 6 8v2H4v2h2v4c0 1.1.9 2 2 2h1v2h2v-2h6v2h2v-2h1c1.1 0 2-.9 2-2zm-6-6h-2V8h2v2z" />
            </svg>
        ),
        path: '/dino',
    },
    {
        id: 'mines',
        name: 'Mines',
        image: '/images/mines.avif',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
            </svg>
        ),
        path: '/mines',
    },
    // ... other games
]

function HomePage({ onRegisterClick, onLoginClick }) {
    return (
        <div className="home-page-container">
            <div className="home-page-hero">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="dot"></span> Leading Crypto Casino
                    </div>
                    <h1 style={{ lineHeight: '1.2' }}>Win BIG with<br />
                        <span style={{ fontFamily: "'Dancing Script', cursive", color: '#ff00dd', fontSize: '1.2em', textShadow: '0 0 15px #ff00dd' }}>VOID Originals</span>
                    </h1>
                    <p className="hero-desc">Play premium, provably fair casino games with instant payouts. Create an account today and get exclusive access.</p>
                    
                    <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
                        <button 
                            className="hero-btn" 
                            onClick={onRegisterClick}
                            style={{ background: '#c300ff' }}
                        >
                            Register Instantly
                        </button>
                        
                        <button 
                            className="hero-btn" 
                            onClick={onLoginClick}
                            style={{ background: '#9f00cc' }}
                        >
                            ENTER THE VOID
                        </button>
                    </div>

                    <div className="hero-artwork">
                        <img
                            src="/images/casino-chip.svg"
                            alt="VOID Casino"
                            style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 0 30px rgba(195, 0, 255, 0.4))' }}
                        />
                    </div>
                </div>
            </div>

            {/* Rest of your games grid stays the same */}
            <div className="home-section">
                <div className="section-header">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="var(--accent-blue)"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                    <h2 style={{ fontFamily: "'Dancing Script', cursive", fontSize: '32px', color: '#ff00dd', margin: 0 }}>VOID Originals</h2>
                </div>
                <div className="VOID-games-grid">
                    {games.map((game) => (
                        <Link
                            key={game.id}
                            to={game.comingSoon ? '#' : game.path}
                            className={`VOID-card ${game.comingSoon ? 'is-coming-soon' : ''}`}
                        >
                            {/* your existing game cards */}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HomePage
