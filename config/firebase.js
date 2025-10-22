// config/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// 👇 نفس بياناتك من Firebase Console (بدون Analytics)
const firebaseConfig = {
  apiKey: "AIzaSyAN-tIO40w11F7jOnrzNWLobKBGDXQEYm8",
  authDomain: "hoss-b8b59.firebaseapp.com",
  projectId: "hoss-b8b59",
  storageBucket: "hoss-b8b59.appspot.com",
  messagingSenderId: "262372392543",
  appId: "1:262372392543:web:62b666835e53b731c625ea",
};

// ✅ تأكد إن التطبيق ما يتهيّأش أكثر من مرة
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// 🔐 تهيئة Firebase Auth (بدون Analytics)
export const auth = getAuth(app);
