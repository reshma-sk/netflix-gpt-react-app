// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiQFmHoGI0YN6sEToPtfTlw0zjzyLlTp0",
  authDomain: "netflix-gpt-86121.firebaseapp.com",
  projectId: "netflix-gpt-86121",
  storageBucket: "netflix-gpt-86121.appspot.com",
  messagingSenderId: "111974050539",
  appId: "1:111974050539:web:72ed64de278d9cd885ecae",
  measurementId: "G-W602QZWCDK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth();