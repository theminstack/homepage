import { styled } from '@minstack/styled';
import { Clipboard, Layout, Send, Share2 } from 'react-feather';

import { Repo } from '../atoms/repo.js';

type Props = {
  className?: string;
};

const ReposBase = ({ className }: Props): JSX.Element => {
  return (
    <div className={className}>
      <Repo repo="snippets" title="Snippets" icon={<Clipboard />}>
        Completely free TypeScript one-file source code snippets <em>with tests</em>.
      </Repo>
      <Repo repo="styled" title="Styled" icon={<Layout />}>
        Small, fast, and simple CSS-in-JS for React.
      </Repo>
      <Repo repo="factor" title="Factor" icon={<Share2 />}>
        Flexible shared state management for React.
      </Repo>
      <Repo repo="query" title="Query" icon={<Send />}>
        Uncomplicated async operations for React.
      </Repo>
    </div>
  );
};

const Repos = styled(ReposBase)`
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

export { Repos };
