import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7D--iQTyl_NJB3ECcZmVmJtCMewaAI5Y",
  authDomain: "trippydunia-9140.firebaseapp.com",
  projectId: "trippydunia-9140",
  storageBucket: "trippydunia-9140.appspot.com",
  messagingSenderId: "453927922697",
  appId: "1:453927922697:web:e05a5cba0e072e43169cd8",
  measurementId: "G-PHTEN28BYM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

// Export the app and any other Firebase services you need
export { app, analytics };
