import React from 'react';
import { useAuth } from '../features/authentication/hooks/useAuth';

const NavBar: React.FC = () => {
  const { token, logout } = useAuth();

  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-2xl font-bold">Shopping Cart App</h1>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:underline">Home</a></li>
          {!token ? (
            <>
              <li><a href="/login" className="hover:underline">Login</a></li>
              <li><a href="/register" className="hover:underline">Register</a></li>
            </>
          ) : (
            <li>
              <button onClick={logout} className="hover:underline">
                Logout
              </button>
            </li>
          )}
          <li><a href="/cart" className="hover:underline">Cart</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;