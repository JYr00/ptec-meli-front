import React from 'react';
import { Product } from '../types';

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border rounded shadow p-4">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
      <h2 className="text-xl font-bold mt-4">{product.title}</h2>
      <p className="text-lg font-semibold">${product.price}</p>
    </div>
  );
};

export default ProductCard;