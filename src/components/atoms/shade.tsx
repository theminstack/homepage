import { styled } from '@minstack/styled';
import { type ReactNode } from 'react';

type Props = {
  readonly children?: ReactNode;
};

const ShadeOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  clip: rect(0, auto, auto, 0);
  pointer-events: none;

  &:after {
    content: ' ';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 20vh;
    z-index: 1;
    background: linear-gradient(180deg, rgba(16, 20, 32, 0.99) 0%, rgba(16, 20, 32, 0) 100%);
  }
`;

const ShadeRoot = styled.div`
  position: relative;
`;

const Shade = ({ children }: Props): JSX.Element => {
  return (
    <ShadeRoot>
      <ShadeOverlay />
      {children}
    </ShadeRoot>
  );
};

export { Shade };
