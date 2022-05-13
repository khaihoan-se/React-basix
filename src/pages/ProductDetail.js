import React, {useState} from 'react';
import {useParams} from "react-router-dom"
import ProductInfo from '../components/ProductInfo';
import useQuery from '../hooks/useQuery';
const ProductDetail = () => {
  const { id } = useParams();
  const { data: product, loading, error } = useQuery(`/products/${id}`);

  return (
    <div>
       {/* khi nào product có giá trị mới render component ProductInfo còn không có giá trị thì không render ra component productInfo */}
      { product && <ProductInfo product={product} /> }
      { loading && <div>Loading...</div> }
      { error && <div>{error}</div> }
    </div>
  );
}

export default ProductDetail;
