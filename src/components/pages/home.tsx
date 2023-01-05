import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconClipboard,
  IconCompass,
  IconLayout,
  IconSend,
  IconShare,
} from '@tabler/icons-react';

import { Hero } from '../atoms/hero.js';
import { NavItem } from '../atoms/nav-item.js';
import { NoWrap } from '../atoms/no-wrap.js';
import { Repo } from '../atoms/repo.js';
import { RepoList } from '../atoms/repo-list.js';
import { SubTitle } from '../atoms/sub-title.js';
import { Title } from '../atoms/title.js';
import { Footer } from '../molecules/footer.js';
import { NavBar } from '../molecules/nav-bar.js';
import { Section } from '../molecules/section.js';
import { PageLayout } from '../templates/page-layout.js';

const Home = (): JSX.Element => {
  return (
    <PageLayout
      nav={
        <NavBar>
          <NavItem href="https://github.com/theminstack" newTab>
            <IconBrandGithub size={'1em'} /> GitHub
          </NavItem>
          <NavItem href="https://www.linkedin.com/in/ackermanchris/" newTab>
            <IconBrandLinkedin size={'1em'} /> LinkedIn
          </NavItem>
        </NavBar>
      }
      header={
        <Hero>
          <Title>≡ MinStack</Title>
          <SubTitle>High-quality, minimalist, open-source tools for web developers.</SubTitle>
        </Hero>
      }
      main={
        <Section>
          <RepoList>
            <Repo repo="snippets" title="Snippets" icon={<IconClipboard />}>
              Completely free TypeScript one-file source code snippets <em>with tests</em>.
            </Repo>
            <Repo repo="styled" title="Styled" icon={<IconLayout />}>
              Styled components pattern <NoWrap>CSS-in-JS</NoWrap> for React.
            </Repo>
            <Repo repo="factor" title="Factor" icon={<IconShare />}>
              Shared state management for React.
            </Repo>
            <Repo repo="query" title="Query" icon={<IconSend />}>
              Async operations for React.
            </Repo>
            <Repo repo="router" title="Router" icon={<IconCompass />}>
              Single page application routing for React.
            </Repo>
          </RepoList>
        </Section>
      }
      footer={<Footer>&copy; 2022 Chris Ackerman, All rights reserved.</Footer>}
    />
  );
};

export { Home };
