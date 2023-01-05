import { styled } from '@minstack/styled';
import { type ReactNode } from 'react';

import { useViewportHeight } from '../hooks/use-viewport-height.js';

type Props = {
  readonly children?: ReactNode;
  readonly className?: string;
};

const PageBase = ({ className, children }: Props): JSX.Element => {
  const viewportHeight = useViewportHeight();

  return (
    <div className={className} style={{ minHeight: viewportHeight + 'px' }}>
      {children}
    </div>
  );
};

const Page = styled(PageBase)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

export { Page };
