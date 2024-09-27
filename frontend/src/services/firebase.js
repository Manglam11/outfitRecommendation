// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Firebase Authentication
// If you plan to use Firestore, Storage, etc., you can import them here as well

// Firebase configuration object with your project credentials
const firebaseConfig = {
  apiKey: "AIzaSyA9TEoN9RP80pgC8UGpsI09sL3vKmTkXC8",
  authDomain: "outfit-recommendation-6c635.firebaseapp.com",
  projectId: "outfit-recommendation-6c635",
  storageBucket: "outfit-recommendation-6c635.appspot.com",
  messagingSenderId: "608920596604",
  appId: "1:608920596604:web:034fb05b9b6b03087799f9",
  measurementId: "G-GC027EGNJ2",
};

// Initialize Firebase with the config object
const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics (optional)
const analytics = getAnalytics(app);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Export the necessary services (in this case, only Auth)
export { auth };
