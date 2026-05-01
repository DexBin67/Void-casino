import { useState, useEffect } from 'react';
import { useWallet } from '../context/WalletContext';

function CrashPage() {
  const { balance, deposit } = useWallet();
  const [bet, setBet] = useState(0.01);
  const [multiplier, setMultiplier] = useState(1.00);
  const [isFlying, setIsFlying] = useState(false);
  const [crashed, setCrashed] = useState(false);
  const [win, setWin] = useState(0);
  const [rocketPosition, setRocketPosition] = useState(50);

  const startCrash = () => {
    if (bet > balance) return alert("Not enough balance");
    
    setIsFlying(true);
    setCrashed(false);
    setMultiplier(1.00);
    setWin(0);
    setRocketPosition(50);

    let current = 1.00;
    const interval = setInterval(() => {
      current += Math.random() * 0.18 + 0.03;
      setMultiplier(parseFloat(current.toFixed(2)));
      setRocketPosition(Math.max(5, 50 - (current - 1) * 8)); // rocket flies up

      if (Math.random() < 0.018) { // crash chance
        clearInterval(interval);
        setIsFlying(false);
        setCrashed(true);
        setRocketPosition(90);
      }
    }, 70);
  };

  const cashOut = () => {
    const winnings = bet * multiplier;
    deposit(winnings);
    setWin(winnings);
    setIsFlying(false);
  };

  return (
    <div style={{ 
      padding: '20px', 
      textAlign: 'center', 
      background: 'linear-gradient(#0a0a0f, #1a0033)', 
      minHeight: '100vh', 
      color: '#fff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <h1 style={{ color: '#ff00dd', fontSize: '2.8rem', marginBottom: '10px' }}>CRASH</h1>
      <p style={{ fontSize: '1.3rem' }}>Balance: ₿ {balance.toFixed(4)}</p>

      {/* GAME AREA */}
      <div style={{ 
        height: '420px', 
        background: '#000', 
        borderRadius: '20px', 
        position: 'relative', 
        margin: '30px auto', 
        maxWidth: '800px',
        border: '3px solid #c300ff',
        overflow: 'hidden'
      }}>
        {/* Sky gradient */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: '50%', background: 'linear-gradient(#1a0033, #000)' }}></div>

        {/* Rocket */}
        <div style={{
          position: 'absolute',
          left: '50%',
          bottom: `${rocketPosition}%`,
          transform: 'translateX(-50%)',
          fontSize: '90px',
          transition: 'bottom 0.07s linear',
          filter: isFlying ? 'drop-shadow(0 0 30px #ffd700)' : 'none'
        }}>
          🚀
        </div>

        {/* Multiplier */}
        <div style={{ 
          position: 'absolute', 
          top: '40px', 
          left: '50%', 
          transform: 'translateX(-50%)',
          fontSize: '5.5rem',
          fontWeight: '900',
          color: isFlying ? '#ffd700' : (crashed ? '#ff3366' : '#fff'),
          textShadow: '0 0 40px currentColor'
        }}>
          {multiplier}x
        </div>

        {crashed && (
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '2.5rem', color: '#ff3366' }}>
            💥 CRASHED
          </div>
        )}
      </div>

      {/* Controls */}
      <div style={{ margin: '30px auto', maxWidth: '420px' }}>
        <input 
          type="number" 
          step="0.01" 
          value={bet} 
          onChange={e => setBet(parseFloat(e.target.value) || 0.01)} 
          style={{ padding: '16px', fontSize: '22px', width: '140px', background: '#1a1229', border: '2px solid #c300ff', borderRadius: '12px', color: '#fff', textAlign: 'center' }} 
        />
        
        <button 
          onClick={startCrash} 
          disabled={isFlying}
          style={{ padding: '16px 40px', margin: '0 10px', background: '#ffd700', color: '#000', border: 'none', borderRadius: '12px', fontSize: '20px', fontWeight: 'bold' }}
        >
          BET & LAUNCH
        </button>

        {isFlying && (
          <button 
            onClick={cashOut} 
            style={{ padding: '16px 40px', background: '#00ff9d', color: '#000', border: 'none', borderRadius: '12px', fontSize: '20px', fontWeight: 'bold' }}
          >
            CASHOUT
          </button>
        )}
      </div>

      {crashed && <h2 style={{ color: '#ff3366' }}>CRASHED! Lost ₿{bet}</h2>}
      {win > 0 && <h2 style={{ color: '#00ff9d' }}>💰 CASHED OUT +₿{win.toFixed(4)}</h2>}
    </div>
  );
}

export default CrashPage;