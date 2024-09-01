import { useState, createContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const AuthContext = createContext({}); // Create AuthContext

function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // user data or null
  const [loadingAuth, setLoadingAuth] = useState(false); // loading state during authentication
  const [loading, setLoading] = useState(true); // indicates loading state on initial load
  const navigate = useNavigate();

  // Save user to localStorage
  const setUserLocalStorage = (userData) => {
    localStorage.setItem('@adm', JSON.stringify(userData));
  };

  // Retrieve user from localStorage
  const getUserLocalStorage = () => {
    const storedUser = localStorage.getItem('@adm');
    return storedUser ? JSON.parse(storedUser) : null;
  };

  // Mock function to simulate signing in
  function signIn(password) {
    setLoadingAuth(true);
    if (password === 'admin') { // Replace with real validation logic
      const userData = { name: 'admin' }; // Mock user object
      setUser(userData); // Set user state
      setUserLocalStorage(userData); // Save the user to localStorage
      setLoadingAuth(false);
      toast(`👋 Welcome back, admin!`);
      navigate('/admin/dashboard');
    } else {
      setLoadingAuth(false);
      toast.error('Invalid password');
    }
  }

  useEffect(() => {
    const storedUser = getUserLocalStorage(); // Check localStorage on mount
    if (storedUser) {
      setUser(storedUser); // Set user state from localStorage if available
    }
    setLoading(false); // Stop loading regardless of whether a user was found
  }, []);

  const signed = !!user; // If user is not null, signed is true

  return (
    <AuthContext.Provider value={{ signIn, loadingAuth, user, signed, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;