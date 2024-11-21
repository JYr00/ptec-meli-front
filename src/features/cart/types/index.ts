export interface CartItem {
    productId: string;
    name: string;
    price: number;
    quantity: number;
}

export interface CartResponse {
    id: string;
    items: CartItem[];
    totalPrice: number;
}

export interface AddCartItemRequest {
    productId: string;
    name: string;
    price: number;
    quantity: number;
}

export interface UpdateCartItemRequest {
    productId: string;
    quantity: number;
}
