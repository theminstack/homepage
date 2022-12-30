import { styled } from '@minstack/styled';
import { type ReactNode } from 'react';

import { theme } from '../../constants/theme.js';

type Props = {
  readonly children?: ReactNode;
  readonly className?: string;
  readonly href?: string;
  readonly newTab?: boolean;
};

const NavItemBase = ({ className, children, href, newTab = false }: Props): JSX.Element => {
  return (
    <a className={className} href={href} target={newTab ? '_blank' : '_self'} rel="noreferrer">
      {children}
    </a>
  );
};

const NavItem = styled(NavItemBase)`
  color: ${theme.color.white};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.25em;

  &:hover {
    text-decoration: underline;
  }
`;

export { NavItem };
