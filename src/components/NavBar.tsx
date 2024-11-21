import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../features/authentication/hooks/useAuth';
import { useCart } from '../features/cart/hooks/useCart';

const NavBar: React.FC = () => {
  const { token, logout } = useAuth();
  const { cart } = useCart();
  const totalItems = cart?.items.reduce((sum, item) => sum + item.quantity, 0) || 0;

  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-2xl font-bold">Shopping Cart App</h1>
        <ul className="flex space-x-4 items-center">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/cart" className="hover:underline flex items-center">
            <span>Cart</span>
            <div className="ml-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
              {totalItems}
            </div>
          </Link></li>
          {token ? (
            <li>
              <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
            </li>
          ) : (
            <>
              <li><Link to="/login" className="hover:underline">Login</Link></li>
              <li><Link to="/register" className="hover:underline">Register</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;