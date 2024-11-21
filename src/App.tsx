import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './features/authentication/context/AuthContext';
import { CartProvider } from './features/cart/context/CartContext';
import NavBar from './components/NavBar';
import AppRoutes from './routes/AppRoutes';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <NavBar />
          <AppRoutes />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;