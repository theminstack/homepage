import { styled } from '@minstack/styled';
import { type ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  className?: string;
};

const RepoListBase = ({ className, children }: Props): JSX.Element => {
  return <div className={className}>{children}</div>;
};

const RepoList = styled(RepoListBase)`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;

  @media screen and (max-width: 64rem) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 43rem) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export { RepoList };
