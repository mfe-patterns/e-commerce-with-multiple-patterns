import { createGlobalStyle } from 'styled-components';

import RobotoRegular from "./fonts/Roboto-Regular.ttf";

export const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Roboto-Regular';
    src: url(${RobotoRegular}) format('ttf');        
  }
`;

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto-Regular', Open-Sans, Helvetica, Sans-Serif;
  }
  .container {
    max-width: 1280px;
    margin: 0 auto;
    width: 100%;    
  }
`;