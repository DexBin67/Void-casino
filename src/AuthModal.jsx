import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export default function AuthModal({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        alert("✅ Successfully logged in — Welcome back to the VOID");
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("✅ Account created! Welcome to VOID CASINO");
      }
      onClose();
    } catch (err) {
      let msg = err.message.replace("Firebase: ", "");
      if (msg.includes("already-in-use")) msg = "Email already registered. Try logging in.";
      if (msg.includes("wrong-password")) msg = "Wrong password.";
      if (msg.includes("user-not-found")) msg = "No account found with this email.";
      setError(msg);
    }
    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
      background: "rgba(3,3,5,0.98)", zIndex: 10000,
      display: "flex", alignItems: "center", justifyContent: "center"
    }}>
      <div style={{
        background: "#0c0819", padding: "40px", borderRadius: "16px",
        width: "400px", border: "3px solid #c300ff", boxShadow: "0 0 50px #c300ff"
      }}>
        <h2 style={{ color: "#ff00dd", textAlign: "center", marginBottom: "20px" }}>
          {isLogin ? "ENTER THE VOID" : "CREATE ACCOUNT"}
        </h2>

        {error && <p style={{ color: "#ff3366", textAlign: "center" }}>{error}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: "14px", margin: "8px 0", background: "#1a1229", border: "1px solid #9f00cc", color: "white", borderRadius: "8px" }}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "14px", margin: "8px 0", background: "#1a1229", border: "1px solid #9f00cc", color: "white", borderRadius: "8px" }}
            required
          />

          <button 
            type="submit" 
            disabled={loading}
            style={{
              width: "100%", padding: "16px", marginTop: "15px",
              background: loading ? "#555" : "linear-gradient(#c300ff, #9f00cc)",
              color: "white", border: "none", borderRadius: "10px", fontWeight: "bold", fontSize: "16px"
            }}
          >
            {loading ? "LOADING..." : (isLogin ? "SIGN IN" : "CREATE ACCOUNT")}
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "20px", color: "#ff99ff" }}>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span 
            onClick={() => { setIsLogin(!isLogin); setError(""); }}
            style={{ color: "#00ffdd", cursor: "pointer", textDecoration: "underline" }}
          >
            {isLogin ? "Create one" : "Sign in"}
          </span>
        </p>

        <button onClick={onClose} style={{ marginTop: "15px", color: "#888", width: "100%" }}>
          Close
        </button>
      </div>
    </div>
  );
}