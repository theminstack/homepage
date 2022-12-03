import 'normalize.css';

import { styled } from '@minstack/styled';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Home } from './components/pages/home.js';
import { theme } from './constants/theme.js';

const GlobalStyle = styled.global`
  line-height: 1.375;

  body {
    color: ${theme.color.white};
    background-color: ${theme.color.black};
    font-family: Arial, Helvetica, sans-serif;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: unset;
    font-weight: unset;
    margin: unset;
  }
`;

createRoot(document.body.appendChild(document.createElement('div'))).render(
  <StrictMode>
    <GlobalStyle />
    <Home />
  </StrictMode>,
);
