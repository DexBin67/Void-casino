import { useState, useEffect } from "react";
import AuthModal from "./AuthModal";
import { Routes, Route } from 'react-router-dom'
import { App as AntApp } from 'antd'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import CrashPage from './pages/CrashPage'
import PlinkoPage from './pages/PlinkoPage'
import DinoPage from './pages/DinoPage'
import MinesPage from './pages/MinesPage'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Listen to login state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log("🔥 Auth state changed:", user ? user.email : "Logged out");
    });
    return () => unsubscribe();
  }, []);

  return (
    <AntApp>
      <Routes>
        <Route 
          path="/" 
          element={
            <Layout 
              currentUser={currentUser}
              onLoginClick={() => setShowLogin(true)}
              onRegisterClick={() => setShowRegister(true)}
            />
          }
        >
          <Route 
            index 
            element={
              <HomePage 
                onRegisterClick={() => setShowRegister(true)}
                onLoginClick={() => setShowLogin(true)}
                currentUser={currentUser}
              />
            } 
          />
          <Route path="crash" element={<CrashPage />} />
          <Route path="plinko" element={<PlinkoPage />} />
          <Route path="dino" element={<DinoPage />} />
          <Route path="mines" element={<MinesPage />} />
        </Route>
      </Routes>

      {/* Real Auth Modals */}
      <AuthModal 
        isOpen={showLogin} 
        onClose={() => setShowLogin(false)} 
        isLogin={true} 
      />
      <AuthModal 
        isOpen={showRegister} 
        onClose={() => setShowRegister(false)} 
        isLogin={false} 
      />
    </AntApp>
  );
}

export default App;