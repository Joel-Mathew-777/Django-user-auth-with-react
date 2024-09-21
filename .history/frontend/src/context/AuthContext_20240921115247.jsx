import { createContext, useState, useEffect, useContext } from "react";

// Create the AuthContext
const AuthContext = createContext();

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // On mount, load user data from localStorage (if any)
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    try {
      // Check if 'storedUser' is defined and not null
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      }
    } catch (error) {
      console.error("Error parsing user data from localStorage", error);
      // Handle invalid JSON or any parsing error here
      setUser(null);
    }
  }, []);

  // Login function to update user and store token
  const login = (userData) => {
    setUser(userData);
    // Save user data to localStorage in stringified form
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // Logout function to clear user data and token
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
