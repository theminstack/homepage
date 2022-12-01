import { styled } from '@minstack/styled';
import { type ReactNode } from 'react';

type Props = {
  readonly children?: ReactNode;
};

const Shade = styled.div`
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
    background: linear-gradient(180deg, hsla(225, 33%, 10%, 1) 0%, hsla(225, 33%, 10%, 0) 100%);
  }
`;

const HeroRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-top: 20vh;
  padding-bottom: 10vh;
`;

const Hero = ({ children }: Props): JSX.Element => {
  return (
    <HeroRoot>
      <Shade />
      {children}
    </HeroRoot>
  );
};

export { Hero };
