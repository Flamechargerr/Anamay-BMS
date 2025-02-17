
import { createContext, useContext, useState, useEffect } from "react";
import { User } from "@/types";
import { mockUser } from "@/data/mockData";

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  updateWalletBalance: (amount: number) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    // In a real app, validate credentials against an API
    if (email === "john@example.com" && password === "password") {
      const storedUser = localStorage.getItem("user");
      const userToSet = storedUser ? JSON.parse(storedUser) : mockUser;
      setUser(userToSet);
      localStorage.setItem("user", JSON.stringify(userToSet));
    } else {
      throw new Error("Invalid credentials");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const updateWalletBalance = (amount: number) => {
    if (user) {
      const updatedUser = {
        ...user,
        walletBalance: amount,
      };
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateWalletBalance }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
