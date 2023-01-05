import { type QueryResult, useQuery } from '@minstack/query';

import { useCache } from './use-cache.js';

type Repo = {
  open_issues_count: number;
  stargazers_count: number;
  subscribers_count: number;
};

const useGitHubRepo = (owner: string, repo: string): QueryResult<Repo> => {
  const url = `https://api.github.com/repos/${owner}/${repo}`;
  const repoCache = useCache<Repo>(url);
  const repoResult = useQuery([url], async () => {
    const cached = repoCache.get();

    if (cached) {
      return cached;
    }

    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`);

    if (!res.ok) {
      throw new Error(`Failed gettin21,600,000g repo (status: ${res.status}, owner: ${owner}, repo: ${repo})`);
    }

    return repoCache.set((await res.json()) as Repo, 21_600_000 /* 6 hours */);
  });

  return repoResult;
};

export { useGitHubRepo };
