// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBd242uNNK63hVTC9WlDHNkwVZJNYF1dbk",
  authDomain: "weekly-task-manager-577b6.firebaseapp.com",
  projectId: "weekly-task-manager-577b6",
  storageBucket: "weekly-task-manager-577b6.firebasestorage.app",
  messagingSenderId: "953943001384",
  appId: "1:953943001384:web:ab5a95fc8773937db2681d",
  measurementId: "G-VLWZM3REQQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
