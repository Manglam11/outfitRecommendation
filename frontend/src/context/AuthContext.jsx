// context/AuthContext.js
import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../services/firebase"; // Import Firebase authentication

// Create Auth Context
const AuthContext = createContext();

// Provide Auth Context
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // Function to handle sign-out
  const logOut = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ user, loading, logOut }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Use Auth Context
export const useAuth = () => useContext(AuthContext);
