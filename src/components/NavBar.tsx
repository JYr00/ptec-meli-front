import React from 'react';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-2xl font-bold">Shopping Cart App</h1>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/login" className="hover:underline">Login</a></li>
          <li><a href="/cart" className="hover:underline">Cart</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;