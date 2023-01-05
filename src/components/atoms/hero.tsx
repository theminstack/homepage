import { styled } from '@minstack/styled';
import { type ReactNode } from 'react';

type Props = {
  readonly children?: ReactNode;
  readonly className?: string;
};

const HeroBase = ({ className, children }: Props): JSX.Element => {
  return <div className={className}>{children}</div>;
};

const Hero = styled(HeroBase)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export { Hero };
