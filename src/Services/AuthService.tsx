// AuthService.ts
import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

interface LoginData {
  email: string;
  password: string;
}

const AuthService = {
  login: async (data: LoginData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, data);
      // You can handle the response data here
      return response.data;
    } catch (error:any) {
      // Handle errors
      console.error('Login failed:', error.response.data);
      throw error; // Rethrow the error to handle it in the component
    }
  },
};

export default AuthService;
