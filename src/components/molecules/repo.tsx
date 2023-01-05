import { styled } from '@minstack/styled';
import { IconCircleDot, IconEye, IconStar } from '@tabler/icons-react';
import color from 'color';
import { type ReactNode } from 'react';

import { theme } from '../../constants/theme.js';
import { useGitHubRepo } from '../hooks/use-github-repo.js';

type Props = {
  children?: ReactNode;
  className?: string;
  icon: ReactNode;
  repo: string;
  title: string;
};

const RepoBase = ({ className, icon, title, repo, children }: Props): JSX.Element => {
  const { data } = useGitHubRepo('theminstack', repo);

  return (
    <a className={className} href={`https://github.com/theminstack/${repo}`} target="_blank" rel="noreferrer">
      <span data-header>
        <span data-icon>{icon}</span>
        <span data-title>{title}</span>
      </span>
      <span data-content>{children}</span>
      <span data-stats>
        <span data-stat>
          <IconStar size={'1em'} />
          <span data-value title={`${data?.stargazers_count ?? 'Loading'} Stargazers`}>
            {data?.stargazers_count ?? '-'}
          </span>
        </span>
        <span data-stat>
          <IconEye size={'1em'} />
          <span data-value title={`${data?.subscribers_count ?? 'Loading'} Watchers`}>
            {data?.subscribers_count ?? '-'}
          </span>
        </span>
        <span data-stat>
          <IconCircleDot size={'1em'} />
          <span data-value title={`${data?.open_issues_count ?? 'Loading'} Open Issues`}>
            {data?.open_issues_count ?? '-'}
          </span>
        </span>
      </span>
    </a>
  );
};

const Repo = styled(RepoBase)`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  color: ${theme.repo.color};
  padding: 1rem 1rem 0.5rem 1rem;
  border-radius: 10px;
  border: 2px solid ${theme.repo.borderColor};
  flex: 1 0 auto;
  text-decoration: unset;
  outline: none;
  text-decoration: unset;
  transition: box-shadow 0.25s, border-color 0.25s;
  min-width: 0;

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

  & > [data-content] {
    flex: 1 0 auto;
  }

  & > [data-stats] {
    flex: 1 1 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 0.5rem;
    color: ${theme.repo.statsColor};
    min-width: 0;

    & > [data-stat] {
      flex: 0 1 auto;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 0.25em;
      min-width: 3em;

      & > .tabler-icon {
        flex: 0 0 auto;
      }

      & > [data-value] {
        flex: 0 1 auto;
        overflow: hidden;
        text-overflow: ellipsis;
        min-width: 0;
      }
    }
  }
`;

export { Repo };
