import { GitHub, Linkedin } from 'react-feather';

import { Footer } from '../atoms/footer.js';
import { Hero } from '../atoms/hero.js';
import { Main } from '../atoms/main.js';
import { NavItem } from '../atoms/nav-item.js';
import { Section } from '../atoms/section.js';
import { SubTitle } from '../atoms/sub-title.js';
import { NavBar } from '../molecules/nav-bar.js';
import { Repos } from '../molecules/repos.js';
import { Title } from '../molecules/title.js';

const Home = (): JSX.Element => {
  return (
    <Main>
      <header>
        <NavBar>
          <NavItem href="https://github.com/theminstack" newTab>
            <GitHub size={'1em'} /> GitHub
          </NavItem>
          <NavItem href="https://www.linkedin.com/in/ackermanchris/" newTab>
            <Linkedin size={'1em'} /> LinkedIn
          </NavItem>
        </NavBar>
        <Hero>
          <Title>≡ MinStack</Title>
          <SubTitle>High-quality, minimalist, open-source tools for web developers.</SubTitle>
        </Hero>
      </header>
      <Section>
        <Repos />
      </Section>
      <Footer>&copy; 2022 Chris Ackerman</Footer>
    </Main>
  );
};

export { Home };
