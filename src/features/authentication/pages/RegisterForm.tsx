import React, { useState } from 'react';
import authService from '../services/authService';
import { useNavigate } from 'react-router-dom';
import { RegisterRequest } from '../types';

const RegisterForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);
    try {
      const response = await authService.register({ name, email, password } as RegisterRequest);
      console.log('response backend',response);
      setSuccess('Registration successful! Redirecting...');
      setTimeout(() => navigate('/login'), 2000);
    } catch {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 border rounded">
      {error && <div className="bg-red-200 text-red-800 p-2 mb-4 rounded">{error}</div>}
      {success && <div className="bg-green-200 text-green-800 p-2 mb-4 rounded">{success}</div>}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-4 border rounded">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
            required
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            required
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
