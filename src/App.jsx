import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import { App as AntApp } from 'antd';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CrashPage from './pages/CrashPage';
import PlinkoPage from './pages/PlinkoPage';
import MinesPage from './pages/MinesPage';
import DinoPage from './pages/DinoPage';
import SlotsPage from './pages/SlotsPage';
import BlackjackPage from './pages/BlackjackPage';
import RoulettePage from './pages/RoulettePage';
import DicePage from './pages/DicePage';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
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
          <Route path="slots" element={<SlotsPage />} />
          <Route path="blackjack" element={<BlackjackPage />} />
          <Route path="roulette" element={<RoulettePage />} />
          <Route path="dice" element={<DicePage />} />
        </Route>
      </Routes>
    </AntApp>
  );
}

export default App;