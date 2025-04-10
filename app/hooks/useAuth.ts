import { useContext } from "react";
import AuthService from "../services/auth.services";
import AuthContext from "../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getToken } from "../utilis/token-jwt";
import { removeToken, saveToken } from "../utilis/token-jwt";


const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const signin = async (credentials: any) => {
    try {
      const response = await AuthService.signin(credentials);
      setUser(response.user);
      saveToken(response.token);
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
    }
  };

  const signup = async (credentials: any) => {
    try {
     
      const response = await AuthService.signup(credentials);
      setUser(response.user);  
      saveToken(response.token);  
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
    }
  };

  const signout = async () => {
    try {
      await AsyncStorage.removeItem("token");
      setUser(null);
    } catch (error) {
      console.error("Erreur lors de la déconnexion :", error);
    }
  };

  return { user, signin, signup, signout, getToken };
};

export default useAuth;
