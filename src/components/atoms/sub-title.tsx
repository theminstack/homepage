import { styled } from '@minstack/styled';
import { type ReactNode } from 'react';

type Props = {
  readonly children?: ReactNode;
  readonly className?: string;
};

const SubTitleBase = ({ className, children }: Props): JSX.Element => {
  return <div className={className}>{children}</div>;
};

const SubTitle = styled(SubTitleBase)`
  box-sizing: border-box;
  flex: 0 1 auto;
  font-size: 2rem;
  font-weight: bold;
  max-width: 100%;
  padding: 0 2rem;
  text-align: center;
  width: 40rem;
`;

export { SubTitle };
