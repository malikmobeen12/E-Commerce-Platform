import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../features/product/productSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);
  const status = useSelector((state) => state.product.status);
  const error = useSelector((state) => state.product.error);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id));
    }
  }, [dispatch, id]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-4">
      {product && (
        <>
          <h2 className="text-2xl font-bold">{product.title}</h2>
          <img src={product.image} alt={product.title} className="w-1/3" />
          <p>{product.description}</p>
          <p className="text-xl font-bold">${product.price}</p>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
