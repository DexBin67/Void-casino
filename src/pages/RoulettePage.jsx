import { useState } from 'react';
import { useWallet } from '../context/WalletContext';

function RoulettePage() {
  const { balance, deposit } = useWallet();
  const [bet, setBet] = useState(0.05);
  const [betType, setBetType] = useState('red');
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);

  const spin = () => {
    if (bet > balance || spinning) return;
    setSpinning(true);

    setTimeout(() => {
      const number = Math.floor(Math.random() * 37);
      const color = number === 0 ? 'green' : (number % 2 === 0 ? 'black' : 'red');
      let winnings = 0;

      if (betType === color || (betType === 'even' && number % 2 === 0 && number !== 0) || (betType === 'odd' && number % 2 === 1)) {
        winnings = bet * (betType === 'red' || betType === 'black' ? 2 : 1);
      }

      if (winnings > 0) deposit(winnings);
      setResult({ number, color, winnings });
      setSpinning(false);
    }, 1800);
  };

  return (
    <div style={{ padding: '40px', textAlign: 'center', background: '#0a0a0f', minHeight: '100vh', color: '#fff' }}>
      <h1 style={{ color: '#c300ff' }}>ROULETTE</h1>
      <p>Balance: ₿ {balance.toFixed(4)}</p>

      <div style={{ fontSize: '6rem', margin: '40px 0', transition: 'all 1.8s' }}>
        {spinning ? '🎡' : result ? result.number : '🎰'}
      </div>

      <div style={{ margin: '30px 0' }}>
        <input type="number" step="0.01" value={bet} onChange={e => setBet(parseFloat(e.target.value))} style={{ padding: '12px', width: '140px' }} />
        
        <select value={betType} onChange={e => setBetType(e.target.value)} style={{ padding: '12px', margin: '0 10px', background: '#1a1229' }}>
          <option value="red">Red</option>
          <option value="black">Black</option>
          <option value="even">Even</option>
          <option value="odd">Odd</option>
        </select>

        <button onClick={spin} disabled={spinning} style={{ padding: '12px 50px', background: '#ffd700', color: '#000', borderRadius: '9999px' }}>
          {spinning ? "SPINNING..." : "SPIN WHEEL"}
        </button>
      </div>

      {result && (
        <h2 style={{ color: result.winnings > 0 ? '#00ff9d' : '#ff3366' }}>
          {result.number} ({result.color}) — {result.winnings > 0 ? `+₿${result.winnings.toFixed(4)}` : 'Lost'}
        </h2>
      )}
    </div>
  );
}

export default RoulettePage;