export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
}

export interface ProductResponse {
    data: Product[];
    meta: {
        totalPages: number;
        totalItems: number;
        currentPage: 1;
    };
}
