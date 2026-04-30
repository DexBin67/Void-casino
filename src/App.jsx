import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import { App as AntApp } from 'antd';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CrashPage from './pages/CrashPage';
import PlinkoPage from './pages/PlinkoPage';
import MinesPage from './pages/MinesPage';
import DinoPage from './pages/DinoPage';

// Placeholder for the other 4 games (we'll fill them later)
const Placeholder = ({ title }) => (
  <div style={{ padding: '80px 20px', textAlign: 'center', color: '#fff', background: '#0a0a0f', minHeight: '100vh' }}>
    <h1 style={{ color: '#c300ff' }}>{title}</h1>
    <p style={{ fontSize: '1.4rem', marginTop: '40px' }}>🎮 Coming very soon - Full playable version loading...</p>
    <p style={{ marginTop: '60px', opacity: 0.6 }}>Balance & betting system already connected</p>
  </div>
);

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return () => unsubscribe();
  }, []);

  return (
    <AntApp>
      <Routes>
        <Route path="/" element={<Layout currentUser={currentUser} onLoginClick={() => setShowLogin(true)} onRegisterClick={() => setShowRegister(true)} />}>
          <Route index element={<HomePage currentUser={currentUser} />} />
          <Route path="crash" element={<CrashPage />} />
          <Route path="plinko" element={<PlinkoPage />} />
          <Route path="mines" element={<MinesPage />} />
          <Route path="dino" element={<DinoPage />} />
          
          {/* Placeholders for the rest */}
          <Route path="slots" element={<Placeholder title="SLOTS" />} />
          <Route path="blackjack" element={<Placeholder title="BLACKJACK" />} />
          <Route path="roulette" element={<Placeholder title="ROULETTE" />} />
          <Route path="dice" element={<Placeholder title="DICE" />} />
        </Route>
      </Routes>
    </AntApp>
  );
}

export default App;