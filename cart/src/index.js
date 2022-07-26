import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'ui-components';

import Items from './Items';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <div className='container'>
      <Items />
    </div>
  </ThemeProvider>,
  document.querySelector('#main-dev-root')
);
