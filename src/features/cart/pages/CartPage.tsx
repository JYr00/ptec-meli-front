import React from 'react';
import { useCart } from '../hooks/useCart';
import { toast } from 'react-toastify';

const CartPage: React.FC = () => {
  const { cart, removeItem } = useCart();

  const handleRemoveItem = (productId: string) => {
    removeItem(productId);
    toast.success('Item removed from cart!');
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4 border rounded">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart?.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart?.items.map((item) => (
            <li key={item.productId} className="flex justify-between items-center mb-2 p-2 border-b">
              <div>
                <h4 className="font-bold">{item.name}</h4>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                {item.quantity > 1 && (
                  <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                )}
              </div>
              <div>
                <button
                  onClick={() => handleRemoveItem(item.productId)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="font-bold text-xl mt-4">
        Total: ${cart?.items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
      </div>
    </div>
  );
};

export default CartPage;