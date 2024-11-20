import axios from 'axios';
import { ProductResponse } from '../types';

const getProducts = async (page: number): Promise<ProductResponse> => {
    const response = await axios.get<ProductResponse>(
        `http://localhost:5000/api/products?page=${page}&limit=6`,
    );
    if (typeof response.data !== 'object' || response.data === null) {
        throw new Error('Unexpected response type');
    }
    return response.data;
};

export default { getProducts };
