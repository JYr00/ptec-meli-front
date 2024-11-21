import axios from 'axios';
import { AddCartItemRequest, CartResponse, UpdateCartItemRequest } from '../types';


const API_URL = 'http://localhost:5000/api/cart';

export const getCart = async (token: string): Promise<CartResponse> => {
    const response = await axios.get<CartResponse>(API_URL, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};

export const addItemToCart = async (
    token: string,
    item: AddCartItemRequest,
): Promise<string> => {
    const response = await axios.post<{ message: string }>(
        `${API_URL}/add`,
        item,
        {
            headers: { Authorization: `Bearer ${token}` },
        },
    );
    return response.data.message;
};

export const updateCartItem = async (
    token: string,
    item: UpdateCartItemRequest,
): Promise<string> => {
    const response = await axios.put<{ message: string }>(
        `${API_URL}/update`,
        item,
        {
            headers: { Authorization: `Bearer ${token}` },
        },
    );
    return response.data.message;
};

export const removeCartItem = async (token: string, productId: string) => {
  await axios.post(`${API_URL}/remove`, { productId }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const clearCart = async (token: string): Promise<string> => {
    const response = await axios.delete<{ message: string }>(
        `${API_URL}/clear`,
        {
            headers: { Authorization: `Bearer ${token}` },
        },
    );
    return response.data.message;
};
