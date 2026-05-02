import { useState } from 'react';
import { useWallet } from '../context/WalletContext';

function DicePage() {
  const { balance, deposit } = useWallet();
  const [bet, setBet] = useState(0.05);
  const [roll, setRoll] = useState(null);
  const [target, setTarget] = useState(50);
  const [result, setResult] = useState('');

  const rollDice = () => {
    if (bet > balance) return alert("Not enough balance");

    const diceRoll = Math.floor(Math.random() * 100) + 1;
    setRoll(diceRoll);

    let winnings = 0;
    if (diceRoll > target) {
      winnings = bet * (100 / (100 - target));
      deposit(winnings);
      setResult(`WIN +₿${winnings.toFixed(4)}`);
    } else {
      setResult("LOSE");
    }
  };

  return (
    <div style={{ padding: '40px', textAlign: 'center', background: '#0a0a0f', minHeight: '100vh', color: '#fff' }}>
      <h1 style={{ color: '#c300ff' }}>DICE</h1>
      <p>Balance: ₿ {balance.toFixed(4)}</p>

      <div style={{ fontSize: '6rem', margin: '40px 0' }}>
        {roll ? `${roll}` : '🎲'}
      </div>

      <div style={{ margin: '30px 0' }}>
        <input type="number" step="0.01" value={bet} onChange={e => setBet(parseFloat(e.target.value))} style={{ padding: '12px', width: '140px' }} />
        
        <div style={{ margin: '20px 0' }}>
          Roll over <input type="number" value={target} onChange={e => setTarget(parseInt(e.target.value))} style={{ width: '80px', padding: '8px' }} /> to win
        </div>

        <button onClick={rollDice} style={{ padding: '16px 60px', background: '#ffd700', color: '#000', fontSize: '22px', borderRadius: '9999px' }}>
          ROLL DICE
        </button>
      </div>

      {result && <h2 style={{ color: result.includes('WIN') ? '#00ff9d' : '#ff3366' }}>{result}</h2>}
    </div>
  );
}

export default DicePage;