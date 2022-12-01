import 'normalize.css';

import { styled } from '@minstack/styled';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Shade } from './components/atoms/shade.js';
import { Title } from './components/molecules/title.js';

const GlobalStyle = styled.global`
  body {
    color: #eee;
    background-color: rgba(16, 20, 32, 1);
    font-family: Arial, Helvetica, sans-serif;
  }
`;

createRoot(document.body.appendChild(document.createElement('div'))).render(
  <StrictMode>
    <GlobalStyle />
    <div style={{ height: '200vh' }}>
      <Shade>
        <Title />
        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            fontSize: '2rem',
            fontWeight: 'bold',
            justifyContent: 'center',
          }}
        >
          <div style={{ maxWidth: '100%', padding: '0 1rem', textAlign: 'center', width: '36rem' }}>
            High-quality, minimalist, open-source tools for web developers.
          </div>
        </div>
      </Shade>
    </div>
  </StrictMode>,
);
