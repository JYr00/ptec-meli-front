import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductList from '../features/products/components/ProductList';
import LoginForm from '../features/authentication/components/LoginForm';
import RegisterForm from '../features/authentication/components/RegisterForm';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
    </Routes>
  );
};

export default AppRoutes;