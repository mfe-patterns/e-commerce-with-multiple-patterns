import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';

export default () => {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="products" element={<ProductList />} />
      <Route path="products/:productId" element={<ProductDetail />} />
    </Routes >
  )
}