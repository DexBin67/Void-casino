import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useWallet } from '../context/WalletContext'
import { auth } from '../firebase'

const GAME_PATHS = ['/crash', '/plinko', '/dino', '/mines']

const BtcIcon = ({ size = 20, fontSize = 12 }) => (
    <div style={{
        width: size, height: size, minWidth: size,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        borderRadius: '50%', background: 'linear-gradient(135deg, #f7931a, #ffb347)',
        color: '#fff', fontWeight: 800, fontSize: fontSize,
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)'
    }}>₿</div>
)

function Header({ currentUser, onLoginClick, onRegisterClick }) {
    const location = useLocation()
    const { balance, deposit, resetBalance, transactions, toasts } = useWallet()
    const [showWalletDropdown, setShowWalletDropdown] = useState(false)
    const [depositAmount, setDepositAmount] = useState('')
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

    const handleDeposit = () => {
        const amt = parseFloat(depositAmount)
        if (!isNaN(amt) && amt > 0) {
            deposit(amt)
            setDepositAmount('')
        }
    }

    const handleLogout = () => {
        auth.signOut()
    }

    const formattedBalance = balance.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })

    return (
        <header className="header">
            <div className="header-left">
                <Link to="/" className="logo-link">
                    <span className="logo" style={{ color: 'var(--text-primary)' }}>Void</span>
                </Link>
            </div>

            <div className="header-center">
                {isGamePage ? (
                    /* Wallet Display on Game Pages */
                    <div className="header-wallet">
                        {/* ... your existing wallet code ... */}
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