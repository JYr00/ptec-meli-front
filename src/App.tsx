import React from 'react';
import NavBar from './components/NavBar';
import ProductList from './features/products/components/ProductList';

const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <ProductList />
    </div>
  );
};

export default App;