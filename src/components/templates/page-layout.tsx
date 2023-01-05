import { styled } from '@minstack/styled';
import { type ReactNode } from 'react';

import { Page } from './page.js';

type Props = {
  className?: string;
  footer?: ReactNode;
  header?: ReactNode;
  main?: ReactNode;
  nav?: ReactNode;
};
const PageLayoutBase = ({ className, nav, header, main, footer }: Props) => {
  return (
    <Page className={className}>
      <nav>{nav}</nav>
      <header>{header}</header>
      <main>{main}</main>
      <footer>{footer}</footer>
    </Page>
  );
};

const PageLayout = styled(PageLayoutBase)`
  gap: 8rem;

  @media screen and (max-width: 64rem) {
    gap: 4rem;
  }

  & > main {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    gap: 4rem;
  }

  & > footer {
    padding-top: 2rem;
  }
`;

export { PageLayout };
