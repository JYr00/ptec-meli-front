import { ReactNode } from 'react';
import { CartItem, CartResponse } from '../types';


export interface CartContextProps {
    cart: CartResponse | null;
    error: string | null;
    addItem: (item: CartItem) => void;
    updateItem: (item: { productId: string; quantity: number }) => void;
    removeItem: (productId: string) => void;
    clear: () => void;
}

export interface CartProviderProps {
    children: ReactNode;
}
