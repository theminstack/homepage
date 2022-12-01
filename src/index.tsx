import 'normalize.css';

import { styled } from '@minstack/styled';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Hero } from './components/atoms/hero.js';
import { SubTitle } from './components/atoms/sub-title.js';
import { Title } from './components/molecules/title.js';

const GlobalStyle = styled.global`
  body {
    color: hsl(0, 0%, 90%);
    background-color: hsl(225, 33%, 10%);
    font-family: Arial, Helvetica, sans-serif;
  }
`;

createRoot(document.body.appendChild(document.createElement('div'))).render(
  <StrictMode>
    <GlobalStyle />
    <div style={{ height: '200vh' }}>
      <Hero>
        <Title />
        <SubTitle>High-quality, minimalist, open-source tools for web developers.</SubTitle>
      </Hero>
    </div>
  </StrictMode>,
);
