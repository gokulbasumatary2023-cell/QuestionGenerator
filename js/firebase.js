
// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAhPwd7Vs1GVxD1zrBKQTpxLHIKlKLGFGE",
  authDomain: "questiongenerator-c58b2.firebaseapp.com",
  projectId: "questiongenerator-c58b2",
  storageBucket: "questiongenerator-c58b2.firebasestorage.app",
  messagingSenderId: "1012409720095",
  appId: "1:1012409720095:web:6204b7d3f291ae0336642a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
