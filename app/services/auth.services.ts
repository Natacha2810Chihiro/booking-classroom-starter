import axios from 'axios';


const API_URL = "http://localhost:8000/api/auth";

const AuthService = {
  
  signin: async (credentials: any) => {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data; 
  },

 
  signup: async (credentials: any) => {
    const response = await axios.post(`${API_URL}/signup`, credentials);
    return response.data; 
  },
};

export default AuthService;
