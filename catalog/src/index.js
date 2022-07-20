import React from 'react';
import ReactDOM from 'react-dom';
import { StylesProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

ReactDOM.render(
  <StylesProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StylesProvider>,
  document.querySelector('#main-dev-root')
);
