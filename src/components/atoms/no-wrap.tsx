import { styled } from '@minstack/styled';

type Props = {
  readonly children?: string;
  readonly className?: string;
};

const NoWrapBase = ({ className, children }: Props): JSX.Element => {
  return <span className={className}>{children}</span>;
};

const NoWrap = styled(NoWrapBase)`
  white-space: nowrap;
`;

export { NoWrap };
