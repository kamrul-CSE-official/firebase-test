// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXBo3gr-43S1X7y8mkf6M-_d9BBZyn__U",
  authDomain: "learnfirebase-7b751.firebaseapp.com",
  projectId: "learnfirebase-7b751",
  storageBucket: "learnfirebase-7b751.appspot.com",
  messagingSenderId: "170887580858",
  appId: "1:170887580858:web:6f9e0b4bd66fdafc828683",
  measurementId: "G-JEZL1QDTR9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;