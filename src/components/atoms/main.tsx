import { styled } from '@minstack/styled';
import { type ReactNode, useEffect, useRef } from 'react';

type Props = {
  readonly children?: ReactNode;
  readonly className?: string;
};

const MainBase = ({ className, children }: Props): JSX.Element => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let af: number | undefined;

    const update = () => {
      if (af != null) return;

      af = requestAnimationFrame(() => {
        af = undefined;
        if (!ref.current) return;
        ref.current.style.minHeight = window.innerHeight + 'px';
      });
    };

    update();
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('resize', update);
      af && cancelAnimationFrame(af);
    };
  }, []);

  return (
    <main ref={ref} className={className}>
      {children}
    </main>
  );
};

const Main = styled(MainBase)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

export { Main };
