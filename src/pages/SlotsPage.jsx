import { useState } from 'react';
import { useWallet } from '../context/WalletContext';

function SlotsPage() {
  const { balance, deposit } = useWallet();
  const [bet, setBet] = useState(0.05);
  const [spinning, setSpinning] = useState(false);
  const [reels, setReels] = useState(['🎰', '🍒', '🛎️']);
  const [win, setWin] = useState(0);

  const spin = () => {
    if (bet > balance || spinning) return;
    setSpinning(true);
    setWin(0);

    setTimeout(() => {
      const symbols = ['🍒','🍋','🛎️','⭐','💎','7️⃣','🍉','BAR'];
      const newReels = [symbols[Math.floor(Math.random()*symbols.length)], symbols[Math.floor(Math.random()*symbols.length)], symbols[Math.floor(Math.random()*symbols.length)]];
      setReels(newReels);

      let mult = 1;
      if (newReels[0] === newReels[1] && newReels[1] === newReels[2]) mult = newReels[0] === '7️⃣' ? 50 : 15;
      else if (newReels[0] === newReels[1] || newReels[1] === newReels[2]) mult = 3;

      const winnings = bet * mult;
      if (winnings > 0) deposit(winnings);
      setWin(winnings);
      setSpinning(false);
    }, 1500);
  };

  return (
    <div style={{ padding: '40px', textAlign: 'center', background: '#0a0a0f', minHeight: '100vh', color: '#fff' }}>
      <h1 style={{ color: '#c300ff' }}>SLOTS</h1>
      <p>Balance: ₿ {balance.toFixed(4)}</p>

      <div style={{ fontSize: '100px', margin: '40px 0' }}>{reels.join('  ')}</div>

      <input type="number" step="0.01" value={bet} onChange={e => setBet(parseFloat(e.target.value))} style={{ padding: '12px', width: '140px', background: '#1a1229', border: '2px solid #c300ff' }} />
      <button onClick={spin} disabled={spinning} style={{ padding: '12px 40px', marginLeft: '15px', background: '#ffd700', color: '#000', borderRadius: '9999px' }}>SPIN</button>

      {win > 0 && <h2 style={{ color: '#00ff9d' }}>WIN ₿{win.toFixed(4)}</h2>}
    </div>
  );
}

export default SlotsPage;