import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const { productId } = useParams();

  return (
    <>
      <main>
        In product details {productId}
      </main>
    </>
  );
}
