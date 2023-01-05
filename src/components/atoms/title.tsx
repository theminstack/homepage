import { styled } from '@minstack/styled';
import color from 'color';
import { type ReactNode } from 'react';

import { theme } from '../../constants/theme.js';

type Props = {
  children?: ReactNode;
  className?: string;
};

const TitleBase = ({ className, children }: Props) => {
  return (
    <h1 className={className}>
      <span data-shadow>{children}</span>
      <span data-text>{children}</span>
    </h1>
  );
};

const Title = styled(TitleBase)`
  position: relative;
  color: transparent;
  font-weight: bold;
  font-size: 4rem;

  @media screen and (max-width: 43rem) {
    font-size: 3rem;
  }

  & > span {
    display: block;
    padding: 0 ${theme.title.darkenSteps}px;
  }

  & > [data-shadow] {
    position: absolute;
    top: 0;
    left: 0;
    color: ${theme.title.color};
    text-shadow: ${Array.from({ length: theme.title.darkenSteps + 1 })
      .fill(null)
      .map((_, i) => {
        const offset = i + 0.5;
        return `${-offset}px ${offset}px 1px ${color(theme.title.color)
          .darken(i * theme.title.darken)
          .toString()}`;
      })
      .join(', ')};
    user-select: none;
    pointer-events: none;
  }

  & > [data-text] {
    position: relative;
    background-image: linear-gradient(0deg, ${theme.title.backgroundColor0} 10%, ${theme.title.backgroundColor1} 70%);
    background-size: 100% calc(100% - 2px);
    background-position: center;
    background-repeat: no-repeat;
    -webkit-background-clip: text;
    background-clip: text;
  }
`;

export { Title };
