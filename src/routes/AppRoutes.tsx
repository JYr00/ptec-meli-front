import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductList from '../features/products/pages/ProductList';
import LoginForm from '../features/authentication/pages/LoginForm';
import RegisterForm from '../features/authentication/pages/RegisterForm';
import CartPage from '../features/cart/pages/CartPage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
    </Routes>
  );
};

export default AppRoutes;