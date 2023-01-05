import { styled } from '@minstack/styled';
import { type ReactNode } from 'react';

type Props = {
  readonly children?: ReactNode;
  readonly className?: string;
};

const SectionBase = ({ className, children }: Props): JSX.Element => {
  return <section className={className}>{children}</section>;
};

const Section = styled(SectionBase)`
  flex: 1 0 auto;
  padding: 0 2rem;
  margin: 0 auto;
  width: 64rem;
  max-width: 100%;
  box-sizing: border-box;
`;

export { Section };
