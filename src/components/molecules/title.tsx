import { styled } from '@minstack/styled';
import color from 'color';
import { type ReactNode } from 'react';

import { theme } from '../../constants/theme.js';
import { ParallaxFocus } from '../atoms/parallax-focus.js';
import { ParallaxLayer } from '../atoms/parallax-layer.js';
import { ParallaxRoot } from '../atoms/parallax-root.js';

type Props = {
  children?: ReactNode;
};

const TitleParallax = styled(ParallaxRoot)`
  font-weight: bold;

  ${ParallaxLayer}:nth-child(1) {
    color: ${color(theme.color.primary).saturationl(50).lightness(15).toString()};
  }

  ${ParallaxLayer}:nth-child(2) {
    color: ${color(theme.color.primary).saturationl(50).lightness(30).toString()};
  }

  &,
  ${ParallaxLayer} {
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 7rem;
    font-size: 4rem;
    white-space: nowrap;
  }
`;

const TitleFocus = styled(ParallaxFocus)`
  color: ${theme.color.primary};
  color: transparent;
  background-image: linear-gradient(0deg, ${theme.color.white} 10%, ${theme.color.primary} 70%);
  background-size: 100% calc(100% - 2px);
  background-position: center;
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  overflow: hidden;
`;

const Title = ({ children }: Props) => {
  return (
    <TitleParallax>
      <ParallaxLayer yScale="-8rem" yOffset="-3rem" xOffset="-1rem">
        {children}
      </ParallaxLayer>
      <ParallaxLayer yScale="-4rem" yOffset="-1.5rem" xOffset="-0.5rem">
        {children}
      </ParallaxLayer>
      <TitleFocus>
        <h1>{children}</h1>
      </TitleFocus>
    </TitleParallax>
  );
};

export { Title };
