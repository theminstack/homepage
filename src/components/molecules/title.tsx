import { styled } from '@minstack/styled';

import { ParallaxFocus } from '../atoms/parallax-focus.js';
import { ParallaxLayer } from '../atoms/parallax-layer.js';
import { ParallaxRoot } from '../atoms/parallax-root.js';

const TitleRoot = styled(ParallaxRoot)`
  margin-top: 20vh;
  font-weight: bold;

  ${ParallaxLayer}:nth-child(1) {
    color: #123;
  }

  ${ParallaxLayer}:nth-child(2) {
    color: #246;
  }

  &,
  ${ParallaxLayer} {
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 7rem;
    font-size: 4rem;
  }
`;

const TitleFocus = styled(ParallaxFocus)`
  color: transparent;
  background: linear-gradient(0deg, rgba(238, 238, 238, 1) 10%, rgba(131, 194, 255, 1) 70%);
  background-clip: text;
`;

const Title = () => {
  return (
    <TitleRoot>
      <ParallaxLayer yScale="-8rem" yOffset="-3rem" xOffset="-1rem">
        ≡ MinStack
      </ParallaxLayer>
      <ParallaxLayer yScale="-4rem" yOffset="-1.5rem" xOffset="-0.5rem">
        ≡ MinStack
      </ParallaxLayer>
      <TitleFocus>≡ MinStack</TitleFocus>
    </TitleRoot>
  );
};

export { Title };
