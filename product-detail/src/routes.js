import React from 'react';
import { Routes, Route } from "react-router-dom";

import ProductDetail from './components/ProductDetail';
import Dashboard from './components/Dashboard';

const RoutePaths = () => {
  return (
    <Routes>
      <Route path="/product-details" element={<Dashboard />} />
      <Route path="" element={<ProductDetail />} />
    </Routes>
  );
};

export default RoutePaths;
