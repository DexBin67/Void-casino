import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useWallet } from '../context/WalletContext'
import { auth } from '../firebase'

const GAME_PATHS = ['/crash', '/plinko', '/dino', '/mines']

function Header({ currentUser, onLoginClick, onRegisterClick }) {
    const location = useLocation()
    const { balance } = useWallet()
    const [showWalletDropdown, setShowWalletDropdown] = useState(false)
    const dropdownRef = useRef(null)
    const isGamePage = GAME_PATHS.some(p => location.pathname.startsWith(p))

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setShowWalletDropdown(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleLogout = () => auth.signOut()

    return (
        <header style={{ 
            background: '#0a0a0f', 
            borderBottom: '1px solid #3a0033', 
            padding: '12px 20px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            position: 'sticky',
            top: 0,
            zIndex: 100
        }}>
            
            {/* Logo */}
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
                <img 
                    src="/images/void-fox.png" 
                    alt="VOID FOX" 
                    style={{ height: "52px", filter: "drop-shadow(0 0 15px #c300ff)" }} 
                />
                <div>
                    <span style={{ fontSize: "32px", fontWeight: "900", color: "#ff00dd", letterSpacing: "-1px" }}>VOID</span>
                    <span style={{ fontSize: "18px", color: "#ffd700", fontWeight: "bold" }}>CASINO</span>
                </div>
            </Link>

            {/* Search */}
            <div style={{ flex: 1, maxWidth: '420px', margin: '0 30px' }}>
                <div style={{ position: 'relative' }}>
                    <input 
                        type="text" 
                        placeholder="Search your game..." 
                        style={{ width: '100%', padding: '12px 20px 12px 48px', background: '#1a1229', border: '1px solid #3a0033', borderRadius: '9999px', color: '#fff' }}
                    />
                    <span style={{ position: 'absolute', left: '18px', top: '13px' }}>🔍</span>
                </div>
            </div>

            {/* Right Side */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                {currentUser ? (
                    <>
                        <div style={{ 
                            background: '#1a1229', 
                            padding: '8px 20px', 
                            borderRadius: '9999px', 
                            border: '1px solid #ffd700',
                            color: '#ffd700',
                            fontWeight: 'bold'
                        }}>
                            ₿ {balance.toFixed(4)}
                        </div>

                        <div style={{ background: "#1a1229", padding: "8px 18px", borderRadius: "9999px", border: "1px solid #c300ff", color: "#ff99ff" }}>
                            👤 {currentUser.email.split('@')[0]}
                        </div>

                        <button 
                            onClick={handleLogout}
                            style={{ background: "#ff3366", color: "white", padding: "10px 22px", borderRadius: "9999px", border: "none", fontWeight: "bold", cursor: "pointer" }}
                        >
                            LOGOUT
                        </button>
                    </>
                ) : (
                    <>
                        <button onClick={onLoginClick} style={{ padding: '10px 24px', background: 'transparent', border: '2px solid #c300ff', color: '#c300ff', borderRadius: '9999px', fontWeight: 'bold' }}>Sign In</button>
                        <button onClick={onRegisterClick} style={{ padding: '10px 24px', background: 'linear-gradient(#ffd700, #ffaa00)', color: '#000', border: 'none', borderRadius: '9999px', fontWeight: 'bold' }}>Register</button>
                    </>
                )}
            </div>
        </header>
    )
}

export default Header

    return (
        <header className="header" style={{ background: '#0a0a0f', borderBottom: '1px solid #3a0033' }}>
            <div className="header-left">
                <Link to="/" className="logo-link" style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none' }}>
                    {/* VOID FOX THIEF LOGO */}
                    <img 
                        src="/images/void-fox.png" 
                        alt="VOID FOX" 
                        style={{ 
                            height: "58px", 
                            filter: "drop-shadow(0 0 20px #c300ff)" 
                        }} 
                    />
                    <div>
                        <span style={{ fontSize: "34px", fontWeight: "900", color: "#ff00dd", letterSpacing: "-2px" }}>VOID</span>
                        <span style={{ fontSize: "19px", color: "#ffd700", fontWeight: "bold" }}>CASINO</span>
                    </div>
                </Link>
            </div>

            <div className="header-center">
                {isGamePage ? (
                    <div className="header-wallet">
                        {/* your wallet code stays here if you want */}
                    </div>
                ) : (
                    <div className="search-input-wrapper">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="var(--text-secondary)" className="search-icon">
                            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                        </svg>
                        <input type="text" placeholder="Search your game" className="search-input" />
                    </div>
                )}
            </div>

            <div className="header-right">
                {currentUser ? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{
                            background: "#1a1229", padding: "8px 18px", borderRadius: "9999px",
                            border: "1px solid #c300ff", color: "#ff99ff", fontSize: "14px"
                        }}>
                            👤 {currentUser.email.split('@')[0]}
                        </div>
                        <button
                            onClick={handleLogout}
                            style={{
                                background: "#ff3366", color: "white", border: "none",
                                padding: "8px 20px", borderRadius: "9999px", fontWeight: "bold", cursor: "pointer"
                            }}
                        >
                            LOGOUT
                        </button>
                    </div>
                ) : (
                    <>
                        <button className="btn btn-login" onClick={onLoginClick}>Sign In</button>
                        <button className="btn btn-register" onClick={onRegisterClick}>Register</button>
                    </>
                )}
            </div>
        </header>
    )
}

export default Header