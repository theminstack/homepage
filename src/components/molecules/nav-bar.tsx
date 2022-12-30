import { styled } from '@minstack/styled';
import { type ReactNode } from 'react';

type Props = {
  readonly children?: ReactNode;
  readonly className?: string;
};

const NavBarBase = ({ className, children }: Props): JSX.Element => {
  return <div className={className}>{children}</div>;
};

const NavBar = styled(NavBarBase)`
  position: absolute;
  z-index: 2;
  top: 0;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem 2rem 0 2rem;
  box-sizing: border-box;
  width: 100%;
`;

export { NavBar };
