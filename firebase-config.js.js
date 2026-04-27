// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

// 🔥 REMPLACE PAR TES VRAIES CLÉS FIREBASE 🔥
const firebaseConfig = {
    apiKey: "AIzaSyBv_xxxxxx",           // ← À remplacer
    authDomain: "ton-projet.firebaseapp.com",  // ← À remplacer
    projectId: "ton-projet-id",           // ← À remplacer
    storageBucket: "ton-projet.appspot.com", // ← À remplacer
    messagingSenderId: "123456789",       // ← À remplacer
    appId: "1:123456789:web:abcdef"       // ← À remplacer
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };