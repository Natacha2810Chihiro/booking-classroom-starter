import { createContext, useEffect, useState } from "react";
import { getToken, removeToken } from "../utilis/token-jwt";
import userService from "../services/user.services";

// Interface représentant un utilisateur
interface User {
  id: string;
  name: string;
  email: string;
  // Ajoute d'autres champs si nécessaire
}

// Type du contexte
interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined); // Définir le type du contexte

interface AuthContextProviderProps {
  children: React.ReactNode;
}

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const initializeAuth = async () => {
    const token = await getToken();
    if (token) {
      try {
        const response = await userService.getUserWithToken(token);
        setUser(response);  // Assurez-vous que 'response' correspond à la structure User
      } catch (error) {
        console.error("Erreur lors de la récupération de l'utilisateur :", error);
        setUser(null);
        removeToken();
      }
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    initializeAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};


export default AuthContext;
export { AuthContextProvider };
