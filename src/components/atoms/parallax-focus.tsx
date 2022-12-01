import { styled } from '@minstack/styled';
import { type ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  className?: string;
};

const ParallaxFocusBase = ({ className, children }: Props) => {
  return <div className={className}>{children}</div>;
};

const ParallaxFocus = styled(ParallaxFocusBase)`
  position: relative;
`;

export { ParallaxFocus };
