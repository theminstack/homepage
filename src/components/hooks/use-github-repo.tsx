import { type QueryResult, useQuery } from '@minstack/query';

import { useCache } from './use-cache.js';

type Repo = {
  open_issues_count: number;
  stargazers_count: number;
  subscribers_count: number;
};

const useGitHubRepo = (owner: string, repo: string): QueryResult<Repo> => {
  const url = `https://api.github.com/repos/${owner}/${repo}`;
  const key = [url];
  const repoCache = useCache<Repo>(key, { lifetime: 21_600_000 /* 6 hours */ });
  const repoResult = useQuery(
    key,
    async ({ signal }) => {
      return repoCache.resolve(async (cached, isFresh) => {
        if (isFresh) {
          return cached;
        }

        const res = await fetch(url, { signal });

        if (!res.ok) {
          if (!cached) {
            throw new Error(`Failed getting repo (status: ${res.status}, owner: ${owner}, repo: ${repo})`);
          }

          return cached;
        }

        return await res.json();
      });
    },
    {
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
  );

  return repoResult;
};

export { useGitHubRepo };
