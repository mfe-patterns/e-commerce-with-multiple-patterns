import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StylesProvider } from '@material-ui/core/styles';
import RoutePaths from './routes';

ReactDOM.render(
  <StylesProvider>
    <BrowserRouter>
      <RoutePaths />
    </BrowserRouter>
  </StylesProvider>,
  document.querySelector("#product-dev-root")
);
