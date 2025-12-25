import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getFirestore, collection, getDocs, query, orderBy, limit } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// TODO: Firebase konsolundan alacağınız kendi yapılandırma bilgilerinizi buraya ekleyin.
const firebaseConfig = {
    apiKey: "AIzaSyD70zUV7_LmJE7CSdbkiQuVG6pe7sCzpCs",
    authDomain: "morsefy.firebaseapp.com",
    projectId: "morsefy",
    storageBucket: "morsefy.firebasestorage.app",
    messagingSenderId: "369997414196",
    appId: "1:369997414196:web:a364fd5ba8a343300baf61"
  };

// Firebase'i başlat
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Auth İşlemleri
document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.getElementById('login-btn');
  
  if (loginBtn) {
    loginBtn.addEventListener('click', async (e) => {
      if (auth.currentUser) {
        e.preventDefault(); // Sadece çıkış yaparken linke gitmesini engelle
        await signOut(auth);
        window.location.href = "index.html";
      }
      // Giriş yapmamışsa href="login.html" çalışır, müdahale etme.
    });

    onAuthStateChanged(auth, (user) => {
      if (user) {
        loginBtn.textContent = "Çıkış Yap";
      } else {
        loginBtn.textContent = "Giriş Yap";
      }
    });
  }

  // Login Form İşlemleri
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;

      try {
        await signInWithEmailAndPassword(auth, email, password);
        window.location.href = "index.html";
      } catch (error) {
        alert("Giriş başarısız: " + error.message);
      }
    });
  }

  // Register Form İşlemleri
  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('register-email').value;
      const password = document.getElementById('register-password').value;

      try {
        await createUserWithEmailAndPassword(auth, email, password);
        window.location.href = "index.html";
      } catch (error) {
        alert("Kayıt başarısız: " + error.message);
      }
    });
  }

  // Google Login Butonu (Login Sayfasındaki)
  const googleLoginBtn = document.getElementById('google-login-btn');
  if (googleLoginBtn) {
    googleLoginBtn.addEventListener('click', async () => {
      try {
        await signInWithPopup(auth, provider);
        window.location.href = "index.html";
      } catch (error) {
        console.error(error);
      }
    });
  }
});

// Blog yazılarını çekme fonksiyonu
