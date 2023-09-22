// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//! yetkilendirme için gerekli importlars
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4PNhBCP_rSYGes3BoohgByB4j5Nu7TTM",
  authDomain: "chat-app-cdbaf.firebaseapp.com",
  projectId: "chat-app-cdbaf",
  storageBucket: "chat-app-cdbaf.appspot.com",
  messagingSenderId: "386345322830",
  appId: "1:386345322830:web:32a9668dd0290048d5761f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//! yetkilendirme için  kurulum
export const auth = getAuth(app);

//! google sağlayıcısı kurulumu
export const provider = new GoogleAuthProvider();

//! veritabanı kurulumu
export const db = getFirestore(app);