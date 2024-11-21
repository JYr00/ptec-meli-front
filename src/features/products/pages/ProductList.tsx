import React, { useEffect, useState } from 'react';
import productService from '../services/productService';
import ProductCard from '../components/ProductCard';
import { Product, ProductResponse } from '../types';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  useEffect(() => {
    productService.getProducts(page).then((response: ProductResponse) => {
      setProducts(response.data);
      setTotalPages(response.meta.totalPages);    });
  }, [page]);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(prev => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(prev => prev - 1);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex flex-col items-center mt-6">
        <div className="flex items-center mb-4 space-x-2">
          <button
            onClick={handlePreviousPage}
            className="px-4 py-2 rounded bg-blue-500 text-white disabled:opacity-50"
            disabled={page === 1}
          >
            &lt;
          </button>
          {Array.from({ length: Math.min(6, totalPages) }, (_, index) => {
            const pageIndex = Math.max(1, Math.min(page - 3, totalPages - 5)) + index;
            if (pageIndex > totalPages) return null;
            return (
              <button
                key={pageIndex}
                onClick={() => setPage(pageIndex)}
                className={`px-4 py-2 rounded ${page === pageIndex ? 'bg-blue-700 text-white' : 'bg-slate-100 text-blue-700'}`}
              >
                {pageIndex}
              </button>
            );
          })}
          <button
            onClick={handleNextPage}
            className="px-4 py-2 rounded bg-blue-500 text-white disabled:opacity-50"
            disabled={page === totalPages}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;