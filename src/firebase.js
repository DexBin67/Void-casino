import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHpLAQlM-IUvEolm0VM9LaNBMK4qKPjog",
  authDomain: "void-casino-979d3.firebaseapp.com",
  projectId: "void-casino-979d3",
  storageBucket: "void-casino-979d3.firebasestorage.app",
  messagingSenderId: "601790449116",
  appId: "1:601790449116:web:e2a486f609bb5d6e2efb19",
  measurementId: "G-W9Y0JV7TV1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Listen to login state globally
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("🔥 User logged in:", user.email);
  } else {
    console.log("👤 No user logged in");
  }
});

export default app;