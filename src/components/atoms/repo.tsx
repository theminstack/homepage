import { styled } from '@minstack/styled';
import color from 'color';
import { type ReactNode } from 'react';

import { theme } from '../../constants/theme.js';

type Props = {
  children?: ReactNode;
  className?: string;
  icon: ReactNode;
  repo: string;
  title: string;
};

const RepoBase = ({ className, icon, title, repo, children }: Props): JSX.Element => {
  return (
    <a className={className} href={`https://github.com/theminstack/${repo}`} target="_blank" rel="noreferrer">
      <span data-header>
        <span data-icon>{icon}</span>
        <span data-title>{title}</span>
      </span>
      <span data-content>{children}</span>
    </a>
  );
};

const Repo = styled(RepoBase)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: ${theme.repo.color};
  padding: 1rem;
  border-radius: 10px;
  border: 2px solid ${theme.repo.borderColor};
  flex: 1 0 auto;
  text-decoration: unset;
  outline: none;
  text-decoration: unset;
  transition: box-shadow 0.25s, border-color 0.25s;

  &:hover,
  &:active,
  &:focus-visible {
    border-color: ${theme.repo.borderColorFocus};
  }

  &:hover {
    box-shadow: 0 5px 10px ${color(theme.repo.shadowColor).alpha(0.6).toString()};
  }

  & > [data-header] {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.5rem;
    gap: 0.5rem;
    color: ${theme.repo.headerColor};

    & > span {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export { Repo };
