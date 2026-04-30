import { useState } from 'react';

function DepositModal({ isOpen, onClose, onDeposit }) {
  const [amount, setAmount] = useState('');

  if (!isOpen) return null;

  const handleDeposit = () => {
    const num = parseFloat(amount);
    if (num > 0) {
      onDeposit(num);
      setAmount('');
      onClose();
    }
  };

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.9)', zIndex: 200,
      display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      <div style={{ background: '#1a1229', padding: '40px', borderRadius: '16px', width: '380px', border: '2px solid #c300ff' }}>
        <h2 style={{ color: '#ffd700', textAlign: 'center' }}>Deposit to VOID</h2>
        <input 
          type="number" 
          placeholder="Amount in BTC" 
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ width: '100%', padding: '14px', margin: '20px 0', background: '#0a0a0f', border: '1px solid #c300ff', color: '#fff', borderRadius: '8px' }}
        />
        <div style={{ display: 'flex', gap: '12px' }}>
          <button onClick={onClose} style={{ flex: 1, padding: '14px', background: '#333', border: 'none', borderRadius: '8px' }}>Cancel</button>
          <button onClick={handleDeposit} style={{ flex: 1, padding: '14px', background: '#ffd700', color: '#000', border: 'none', borderRadius: '8px', fontWeight: 'bold' }}>Deposit</button>
        </div>
      </div>
    </div>
  );
}

export default DepositModal;