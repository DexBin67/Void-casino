import { useState, useEffect } from 'react';
import { useWallet } from '../context/WalletContext';

function CrashPage() {
  const { balance, deposit } = useWallet(); // deposit = win
  const [bet, setBet] = useState(0.01);
  const [multiplier, setMultiplier] = useState(1);
  const [isFlying, setIsFlying] = useState(false);
  const [crashed, setCrashed] = useState(false);
  const [win, setWin] = useState(0);

  const startCrash = () => {
    if (bet > balance) return alert("Not enough balance");
    setIsFlying(true);
    setCrashed(false);
    setMultiplier(1);
    setWin(0);

    let current = 1;
    const interval = setInterval(() => {
      current += Math.random() * 0.15 + 0.02;
      setMultiplier(current.toFixed(2));

      if (Math.random() < 0.015) { // random crash
        clearInterval(interval);
        setIsFlying(false);
        setCrashed(true);
      }
    }, 80);
  };

  const cashOut = () => {
    const winnings = bet * multiplier;
    deposit(winnings);
    setWin(winnings);
    setIsFlying(false);
  };

  return (
    <div style={{ padding: '40px', textAlign: 'center', color: '#fff', background: '#0a0a0f', minHeight: '100vh' }}>
      <h1 style={{ color: '#ff00dd' }}>CRASH</h1>
      <p>Balance: ₿ {balance.toFixed(4)}</p>

      <div style={{ fontSize: '6rem', fontWeight: 'bold', color: isFlying ? '#ffd700' : '#ff3366' }}>
        {multiplier}x
      </div>

      <div style={{ margin: '30px' }}>
        <input type="number" step="0.01" value={bet} onChange={e => setBet(parseFloat(e.target.value))} style={{ padding: '12px', fontSize: '18px', width: '120px' }} />
        <button onClick={startCrash} disabled={isFlying} style={{ padding: '12px 30px', marginLeft: '10px', background: '#ffd700', color: '#000', border: 'none', borderRadius: '12px', fontSize: '18px' }}>BET & LAUNCH</button>
        {isFlying && <button onClick={cashOut} style={{ padding: '12px 30px', marginLeft: '10px', background: '#00ff9d', color: '#000', border: 'none', borderRadius: '12px', fontSize: '18px' }}>CASHOUT</button>}
      </div>

      {crashed && <h2 style={{ color: '#ff3366' }}>CRASHED! You lost ₿{bet}</h2>}
      {win > 0 && <h2 style={{ color: '#00ff9d' }}>CASHED OUT! +₿{win.toFixed(4)}</h2>}
    </div>
  );
}

export default CrashPage;