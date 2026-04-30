import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useWallet } from '../context/WalletContext'
import { auth } from '../firebase'

const GAME_PATHS = ['/crash', '/plinko', '/dino', '/mines']

function Header({ currentUser, onLoginClick, onRegisterClick }) {
    const location = useLocation()
    const { balance, deposit } = useWallet()
    const [showDepositModal, setShowDepositModal] = useState(false)
    const dropdownRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                // close if needed
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
            zIndex: 100
        }}>
            
            {/* Logo */}
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                <img src="/images/void-fox.png" alt="VOID FOX" style={{ height: "48px", filter: "drop-shadow(0 0 15px #c300ff)" }} />
                <div>
                    <span style={{ fontSize: "28px", fontWeight: "900", color: "#ff00dd" }}>VOID</span>
                    <span style={{ fontSize: "17px", color: "#ffd700", fontWeight: "bold" }}>CASINO</span>
                </div>
            </Link>

            {/* Search */}
            <div style={{ flex: 1, maxWidth: '360px', margin: '0 12px' }}>
                <input type="text" placeholder="Search your game..." style={{ width: '100%', padding: '10px 40px 10px 16px', background: '#1a1229', border: '1px solid #3a0033', borderRadius: '9999px', color: '#fff' }} />
            </div>

            {/* Right Side */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                {currentUser ? (
                    <>
                        {/* CLICKABLE BALANCE */}
                        <div 
                            onClick={() => setShowDepositModal(true)}
                            style={{ 
                                background: '#1a1229', 
                                padding: '7px 16px', 
                                borderRadius: '9999px', 
                                border: '1px solid #ffd700',
                                color: '#ffd700',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                fontSize: '15px'
                            }}>
                            ₿ {balance.toFixed(4)}
                        </div>

                        <div style={{ background: "#1a1229", padding: "7px 16px", borderRadius: "9999px", border: "1px solid #c300ff", color: "#ff99ff", fontSize: '15px' }}>
                            👤 {currentUser.email.split('@')[0]}
                        </div>

                        <button onClick={handleLogout} style={{ background: "#ff3366", color: "white", padding: "8px 18px", borderRadius: "9999px", border: "none", fontWeight: "bold", cursor: "pointer" }}>
                            LOGOUT
                        </button>
                    </>
                ) : (
                    <>
                        <button onClick={onLoginClick} style={{ padding: '8px 18px', background: 'transparent', border: '2px solid #c300ff', color: '#c300ff', borderRadius: '9999px' }}>Sign In</button>
                        <button onClick={onRegisterClick} style={{ padding: '8px 18px', background: 'linear-gradient(#ffd700, #ffaa00)', color: '#000', border: 'none', borderRadius: '9999px', fontWeight: 'bold' }}>Register</button>
                    </>
                )}
            </div>

            {/* DEPOSIT MODAL */}
            {showDepositModal && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                    background: 'rgba(0,0,0,0.95)', zIndex: 999,
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                    <div style={{ background: '#1a1229', padding: '40px', borderRadius: '20px', width: '360px', textAlign: 'center', border: '2px solid #c300ff' }}>
                        <h2 style={{ color: '#ffd700', marginBottom: '20px' }}>Deposit BTC</h2>
                        <p style={{ color: '#aaa', marginBottom: '20px' }}>Instant • No fees</p>
                        
                        <input 
                            type="number" 
                            placeholder="0.01" 
                            step="0.001"
                            style={{ width: '100%', padding: '16px', fontSize: '18px', background: '#0a0a0f', border: '1px solid #c300ff', borderRadius: '12px', color: '#fff', textAlign: 'center' }}
                            onChange={(e) => {/* later */}}
                        />

                        <div style={{ marginTop: '30px', display: 'flex', gap: '12px' }}>
                            <button onClick={() => setShowDepositModal(false)} style={{ flex: 1, padding: '14px', background: '#333', border: 'none', borderRadius: '12px', color: '#fff' }}>Cancel</button>
                            <button onClick={() => { deposit(0.05); setShowDepositModal(false); }} style={{ flex: 1, padding: '14px', background: '#ffd700', color: '#000', border: 'none', borderRadius: '12px', fontWeight: 'bold' }}>Deposit 0.05 BTC</button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header