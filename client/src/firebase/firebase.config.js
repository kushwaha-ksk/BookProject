// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFOOvW8UFMKW9M8Fm6TGzbU17PDeSTWiM",
  authDomain: "used-book-mart.firebaseapp.com",
  projectId: "used-book-mart",
  storageBucket: "used-book-mart.firebasestorage.app",
  messagingSenderId: "49216311819",
  appId: "1:49216311819:web:ec97053171fdf44fac2d0e",
  measurementId: "G-91P3JBYQE1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;