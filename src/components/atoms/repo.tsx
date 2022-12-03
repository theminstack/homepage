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
      <div>
        <div>{icon}</div>
        <div>{title}</div>
      </div>
      <div>{children}</div>
    </a>
  );
};

const Repo = styled(RepoBase)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: ${theme.color.white};
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid ${theme.color.dim};
  flex: 1 0 auto;
  text-decoration: unset;
  outline: none;
  text-decoration: unset;

  &:hover,
  &:active,
  &:focus {
    border-color: ${theme.color.primary};
  }

  &:hover {
    box-shadow: 0 5px 10px ${color(theme.color.primary).alpha(0.6).toString()};
  }

  & > div:nth-child(1) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.5rem;
    gap: 0.5rem;
    color: ${theme.color.primary};

    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  & > div:nth-child(2) {
  }
`;

export { Repo };
