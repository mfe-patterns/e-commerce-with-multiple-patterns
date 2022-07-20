import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import App from './App';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} />
        <Route path="/product/:id" component={ProductDetail} />
      </Switch>
    </BrowserRouter>
  )
}