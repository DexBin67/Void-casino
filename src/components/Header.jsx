import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useWallet } from '../context/WalletContext'
import { auth } from '../firebase'

const GAME_PATHS = ['/crash', '/plinko', '/dino', '/mines']

function Header({ currentUser, onLoginClick, onRegisterClick }) {
    const location = useLocation()
    const { balance, deposit } = useWallet()
    const [showWalletDropdown, setShowWalletDropdown] = useState(false)
    const [showDepositModal, setShowDepositModal] = useState(false)
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
                        {/* CLICKABLE BALANCE */}
                        <div 
                            onClick={() => setShowDepositModal(true)}
                            style={{ 
                                background: '#1a1229', 
                                padding: '8px 20px', 
                                borderRadius: '9999px', 
                                border: '1px solid #ffd700',
                                color: '#ffd700',
                                fontWeight: 'bold',
                                cursor: 'pointer'
                            }}>
                            ₿ {balance.toFixed(4)}
                        </div>

                        <div style={{ background: "#1a1229", padding: "8px 18px", borderRadius: "9999px", border: "1px solid #c300ff", color: "#ff99ff" }}>
                            👤 {currentUser.email.split('@')[0]}
                        </div>

                        <button onClick={handleLogout} style={{ background: "#ff3366", color: "white", padding: "10px 22px", borderRadius: "9999px", border: "none", fontWeight: "bold", cursor: "pointer" }}>
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

            {/* Deposit Modal */}
            {showDepositModal && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                    background: 'rgba(0,0,0,0.95)', zIndex: 200,
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                    <div style={{ background: '#1a1229', padding: '40px', borderRadius: '16px', width: '380px', border: '2px solid #c300ff', textAlign: 'center' }}>
                        <h2 style={{ color: '#ffd700', marginBottom: '20px' }}>Deposit to VOID Casino</h2>
                        <input 
                            type="number" 
                            placeholder="Amount in BTC" 
                            style={{ width: '100%', padding: '14px', marginBottom: '20px', background: '#0a0a0f', border: '1px solid #c300ff', color: '#fff', borderRadius: '8px' }}
                            onChange={(e) => {/* you can add state later */}}
                        />
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <button onClick={() => setShowDepositModal(false)} style={{ flex: 1, padding: '14px', background: '#333', border: 'none', borderRadius: '8px', color: '#fff' }}>Cancel</button>
                            <button onClick={() => { deposit(0.01); setShowDepositModal(false); }} style={{ flex: 1, padding: '14px', background: '#ffd700', color: '#000', border: 'none', borderRadius: '8px', fontWeight: 'bold' }}>Deposit 0.01 BTC</button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header