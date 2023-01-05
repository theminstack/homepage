import { styled } from '@minstack/styled';
import { type ReactNode } from 'react';

import { theme } from '../../constants/theme.js';

type Props = {
  readonly children?: ReactNode;
  readonly className?: string;
};

const FooterBase = ({ className, children }: Props): JSX.Element => {
  return (
    <footer className={className}>
      <div data-content>{children}</div>
    </footer>
  );
};

const Footer = styled(FooterBase)`
  flex: 0 0 auto;
  margin: 0 auto;
  width: 64rem;
  max-width: 100%;
  box-sizing: border-box;
  color: ${theme.footer.color};
  font-size: 0.825rem;

  & > [data-content] {
    padding: 2rem;
    border-start-end-radius: ${theme.footer.borderRadius};
    border-start-start-radius: ${theme.footer.borderRadius};
    background-color: ${theme.footer.backgroundColor};
  }
`;

export { Footer };
