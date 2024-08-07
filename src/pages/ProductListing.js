import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/product/productSlice';

const ProductListing = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const status = useSelector((state) => state.product.status);
  const error = useSelector((state) => state.product.error);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Product Listing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4">
            <h3 className="text-lg font-bold">{product.title}</h3>
            <img src={product.image} alt={product.title} className="w-full h-64 object-cover" />
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
