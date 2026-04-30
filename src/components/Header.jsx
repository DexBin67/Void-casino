import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useWallet } from '../context/WalletContext'
import { auth } from '../firebase'

const GAME_PATHS = ['/crash', '/plinko', '/dino', '/mines']

function Header({ currentUser, onLoginClick, onRegisterClick }) {
    const location = useLocation()
    const { balance, deposit } = useWallet()
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
            padding: '10px 12px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            flexWrap: 'wrap',
            gap: '8px'
        }}>
            
            {/* Logo */}
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                <img 
                    src="/images/void-fox.png" 
                    alt="VOID FOX" 
                    style={{ height: "48px", filter: "drop-shadow(0 0 15px #c300ff)" }} 
                />
                <div style={{ fontSize: "clamp(18px, 4vw, 28px)" }}>
                    <span style={{ fontWeight: "900", color: "#ff00dd" }}>VOID</span>
                    <span style={{ color: "#ffd700", fontWeight: "bold" }}>CASINO</span>
                </div>
            </Link>

            {/* Search - Hidden on very small screens */}
            <div style={{ flex: 1, minWidth: '180px', maxWidth: '320px', margin: '0 8px' }}>
                <div style={{ position: 'relative' }}>
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        style={{ width: '100%', padding: '10px 16px 10px 40px', background: '#1a1229', border: '1px solid #3a0033', borderRadius: '9999px', color: '#fff', fontSize: '14px' }}
                    />
                    <span style={{ position: 'absolute', left: '14px', top: '11px' }}>🔍</span>
                </div>
            </div>

            {/* Right Side */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                {currentUser ? (
                    <>
                        {/* Clickable Balance */}
                        <div 
                            onClick={() => alert('Deposit modal coming next!')}
                            style={{ 
                                background: '#1a1229', 
                                padding: '6px 14px', 
                                borderRadius: '9999px', 
                                border: '1px solid #ffd700',
                                color: '#ffd700',
                                fontWeight: 'bold',
                                fontSize: '14px',
                                cursor: 'pointer',
                                whiteSpace: 'nowrap'
                            }}>
                            ₿ {balance.toFixed(4)}
                        </div>

                        <div style={{ background: "#1a1229", padding: "6px 14px", borderRadius: "9999px", border: "1px solid #c300ff", color: "#ff99ff", fontSize: '14px' }}>
                            👤 {currentUser.email.split('@')[0]}
                        </div>

                        <button onClick={handleLogout} style={{ background: "#ff3366", color: "white", padding: "6px 16px", borderRadius: "9999px", border: "none", fontWeight: "bold", cursor: "pointer", fontSize: '14px' }}>
                            LOGOUT
                        </button>
                    </>
                ) : (
                    <>
                        <button onClick={onLoginClick} style={{ padding: '8px 16px', background: 'transparent', border: '2px solid #c300ff', color: '#c300ff', borderRadius: '9999px', fontSize: '14px' }}>Sign In</button>
                        <button onClick={onRegisterClick} style={{ padding: '8px 16px', background: 'linear-gradient(#ffd700, #ffaa00)', color: '#000', border: 'none', borderRadius: '9999px', fontSize: '14px', fontWeight: 'bold' }}>Register</button>
                    </>
                )}
            </div>
        </header>
    )
}

export default Header