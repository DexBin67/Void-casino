import { useState } from 'react';
import { useWallet } from '../context/WalletContext';

function BlackjackPage() {
  const { balance, deposit } = useWallet();
  const [bet, setBet] = useState(0.05);
  const [playerHand, setPlayerHand] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState('');

  const deck = () => {
    const suits = ['♥', '♦', '♣', '♠'];
    const values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    return suits.flatMap(s => values.map(v => v + s));
  };

  const getValue = (card) => {
    const v = card.slice(0, -1);
    if (['J','Q','K'].includes(v)) return 10;
    if (v === 'A') return 11;
    return parseInt(v);
  };

  const startGame = () => {
    if (bet > balance) return alert("Not enough balance");
    const newDeck = deck().sort(() => Math.random() - 0.5);
    const player = [newDeck[0], newDeck[1]];
    const dealer = [newDeck[2], newDeck[3]];

    setPlayerHand(player);
    setDealerHand(dealer);
    setGameOver(false);
    setMessage('');
  };

  const hit = () => {
    // Simple hit logic
    const newDeck = deck().sort(() => Math.random() - 0.5);
    setPlayerHand([...playerHand, newDeck[0]]);
  };

  const stand = () => {
    // Dealer plays
    let dealerTotal = dealerHand.reduce((sum, card) => sum + getValue(card), 0);
    let playerTotal = playerHand.reduce((sum, card) => sum + getValue(card), 0);

    let result = '';
    let winnings = 0;

    if (playerTotal > 21) {
      result = "You bust!";
    } else if (dealerTotal > 21 || playerTotal > dealerTotal) {
      result = "You win!";
      winnings = bet * 2;
    } else if (playerTotal === dealerTotal) {
      result = "Push";
      winnings = bet;
    } else {
      result = "Dealer wins";
    }

    if (winnings > 0) deposit(winnings);
    setMessage(result);
    setGameOver(true);
  };

  return (
    <div style={{ padding: '40px', textAlign: 'center', background: '#0a0a0f', minHeight: '100vh', color: '#fff' }}>
      <h1 style={{ color: '#c300ff' }}>BLACKJACK</h1>
      <p>Balance: ₿ {balance.toFixed(4)}</p>

      <div style={{ margin: '30px 0' }}>
        <input type="number" step="0.01" value={bet} onChange={e => setBet(parseFloat(e.target.value))} style={{ padding: '12px', width: '140px' }} />
        <button onClick={startGame} style={{ padding: '12px 40px', marginLeft: '20px', background: '#ffd700', color: '#000' }}>DEAL</button>
      </div>

      <div style={{ fontSize: '1.5rem', margin: '30px 0' }}>
        Dealer: {dealerHand.join(' ')}
      </div>
      <div style={{ fontSize: '2rem', margin: '30px 0' }}>
        You: {playerHand.join(' ')}
      </div>

      {!gameOver && playerHand.length > 0 && (
        <>
          <button onClick={hit} style={{ padding: '12px 40px', margin: '10px', background: '#00ff9d' }}>HIT</button>
          <button onClick={stand} style={{ padding: '12px 40px', margin: '10px', background: '#ff3366' }}>STAND</button>
        </>
      )}

      {message && <h2 style={{ color: message.includes('win') ? '#00ff9d' : '#ff3366' }}>{message}</h2>}
    </div>
  );
}

export default BlackjackPage;