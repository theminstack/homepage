import { styled } from '@minstack/styled';
import { type ReactNode } from 'react';

import { theme } from '../../constants/theme.js';

type Props = {
  readonly children?: ReactNode;
  readonly className?: string;
};

const FooterBase = ({ className, children }: Props): JSX.Element => {
  return <footer className={className}>{children}</footer>;
};

const Footer = styled(FooterBase)`
  flex: 0 0 auto;
  padding: 12rem 2rem 2rem;
  margin: 0 auto;
  width: 64rem;
  max-width: 100%;
  box-sizing: border-box;
  color: ${theme.color.dim};
  font-size: 0.825rem;
`;

export { Footer };
