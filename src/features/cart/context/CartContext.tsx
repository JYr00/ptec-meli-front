import React, { createContext, useState, useEffect, useCallback, useMemo } from 'react';
import { CartItem, CartResponse } from '../types';
import { getCart, addItemToCart, updateCartItem, removeCartItem, clearCart } from '../services/cartService';
import { useAuth } from '../../authentication/hooks/useAuth';
import { CartContextProps, CartProviderProps } from './CartType';


const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const { token } = useAuth();
  const [cart, setCart] = useState<CartResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchCart = useCallback(async () => {
    try {
      if (token) {
        const cartData = await getCart(token);
        setCart(cartData);
      }
    } catch {
      setError('Failed to fetch cart. Please try again later.');
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      fetchCart();
    } else {
      setCart(null); // Clear cart when user logs out
    }
  }, [token, fetchCart]);

  const addItem = useCallback(async (item: CartItem) => {
    try {
      if (token) {
        await addItemToCart(token, item);
        fetchCart();
      }
    } catch {
      setError('Failed to add item to cart.');
    }
  }, [token, fetchCart]);

  const updateItem = useCallback(async (item: { productId: string; quantity: number }) => {
    try {
      if (token) {
        await updateCartItem(token, item);
        fetchCart();
      }
    } catch {
      setError('Failed to update item in cart.');
    }
  }, [token, fetchCart]);

  const removeItem = useCallback(async (productId: string) => {
    try {
      if (token) {
        await removeCartItem(token, productId);
        fetchCart();
      }
    } catch {
      setError('Failed to remove item from cart.');
    }
  }, [token, fetchCart]);

  const clear = useCallback(async () => {
    try {
      if (token) {
        await clearCart(token);
        fetchCart();
      }
    } catch {
      setError('Failed to clear cart.');
    } finally {
      setCart(null); // Ensure cart is cleared from state
    }
  }, [token, fetchCart]);

  const value = useMemo(() => ({ cart, error, addItem, updateItem, removeItem, clear }), [cart, error, addItem, updateItem, removeItem, clear]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;