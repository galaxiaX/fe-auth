// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT7VVV_tinNX3Rfw7l4CPq2eL6kpw99Ac",
  authDomain: "restaurant-caf18.firebaseapp.com",
  databaseURL:
    "https://restaurant-caf18-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "restaurant-caf18",
  storageBucket: "restaurant-caf18.appspot.com",
  messagingSenderId: "1065660591033",
  appId: "1:1065660591033:web:e75a1dd0c88055cf4fa468",
  measurementId: "G-S4PCB6MEGS",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Export function to initialize firebase.
export const initFirebase = () => {
  return app;
};
