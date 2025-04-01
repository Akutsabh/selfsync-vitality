
import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "@/components/ui/sonner";

interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load user from local storage on init
  useEffect(() => {
    const storedUser = localStorage.getItem("selfsync_user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Failed to parse stored user:", e);
        localStorage.removeItem("selfsync_user");
      }
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Demo login logic - in a real app, this would be an API call
      if (email === "demo@example.com" && password === "password") {
        const newUser = {
          id: "user1",
          email: "demo@example.com",
          name: "Demo User",
          avatar: "/assets/avatar.png"
        };
        
        setUser(newUser);
        localStorage.setItem("selfsync_user", JSON.stringify(newUser));
        toast.success("Logged in successfully!");
      } else {
        // For demo purposes, also accept any email/password combo
        const newUser = {
          id: "user" + Math.random().toString(36).substr(2, 9),
          email: email,
          name: email.split('@')[0],
        };
        
        setUser(newUser);
        localStorage.setItem("selfsync_user", JSON.stringify(newUser));
        toast.success("Logged in successfully!");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Failed to login. Please try again.");
      toast.error("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string) => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Demo registration logic
      const newUser = {
        id: "user" + Math.random().toString(36).substr(2, 9),
        email,
        name,
      };
      
      setUser(newUser);
      localStorage.setItem("selfsync_user", JSON.stringify(newUser));
      toast.success("Account created successfully!");
    } catch (err) {
      console.error("Registration error:", err);
      setError("Failed to register. Please try again.");
      toast.error("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("selfsync_user");
    toast.success("Logged out successfully");
  };

  const value = {
    user,
    loading,
    error,
    login,
    register,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
