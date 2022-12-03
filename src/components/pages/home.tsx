import { Footer } from '../atoms/footer.js';
import { Hero } from '../atoms/hero.js';
import { Main } from '../atoms/main.js';
import { Section } from '../atoms/section.js';
import { SubTitle } from '../atoms/sub-title.js';
import { Repos } from '../molecules/repos.js';
import { Title } from '../molecules/title.js';

const Home = (): JSX.Element => {
  return (
    <Main>
      <header>
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
