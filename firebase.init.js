// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

/* const firebaseConfig = {
  apiKey: import.meta.VITE_REACT_APP_apiKey,
  authDomain: import.meta.VITE_REACT_APP_authDomain,
  projectId: import.meta.VITE_REACT_APP_projectId,
  storageBucket: import.meta.VITE_REACT_APP_storageBucket,
  messagingSenderId: import.meta.VITE_REACT_APP_messagingSenderId,
  appId: import.meta.VITE_REACT_APP_appId,
}; */
 const firebaseConfig = {
  apiKey: "AIzaSyA81oP02y_cmKeGlIiKoaLtMHTDiy4Y58M",
  authDomain: "emotion-d0774.firebaseapp.com",
  projectId: "emotion-d0774",
  storageBucket: "emotion-d0774.appspot.com",
  messagingSenderId: "383956820732",
  appId: "1:383956820732:web:a20ecd77ecdb9e62fd6d79",
};
console.log(import.meta.VITE_REACT_APP_apiKey);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
