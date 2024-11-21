import React from 'react';
import { useCart } from '../../cart/hooks/useCart';
import { useAuth } from '../../authentication/hooks/useAuth';
import { toast } from 'react-toastify';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();
  const { token } = useAuth();

  const handleAddToCart = () => {
    if (!token) {
      toast.error('Please login or register to add items to the cart.');
      return;
    }

    const item = {
      productId: product.id.toString(),
      name: product.title,
      price: product.price,
      quantity: 1,
    };
    addItem(item);
    toast.success('Item added to cart!');
  };

  return (
    <div className="border p-4 rounded mb-4 flex flex-col justify-between h-full">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4 rounded" />
      <div className="flex-grow">
        <h3 className="font-bold text-lg mb-2">{product.title}</h3>
        <p className="mb-2">Price: ${product.price.toFixed(2)}</p>
      </div>
      <button
        onClick={handleAddToCart}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded flex items-center justify-center"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;