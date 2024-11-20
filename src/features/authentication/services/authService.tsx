import axios from 'axios';
import { LoginRequest, RegisterRequest, AuthResponse, RegisterResponse } from '../types';

const login = async (credentials: LoginRequest): Promise<AuthResponse> => {
  const response = await axios.post<AuthResponse>('http://localhost:5000/api/auth/login', credentials);
  return response.data;
};

const register = async (userData: RegisterRequest): Promise<RegisterResponse> => {
  const response = await axios.post<RegisterResponse>('http://localhost:5000/api/auth/register', userData);
  return response.data;
};

export default { login, register };