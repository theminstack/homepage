import { styled } from '@minstack/styled';
import { type ReactNode, useLayoutEffect, useMemo, useRef } from 'react';

import { createParallax, ParallaxContext } from '../../contexts/parallax.js';

type Props = {
  readonly children?: ReactNode;
  readonly className?: string;
};

const ParallaxRootBase = ({ className, children }: Props): JSX.Element => {
  const ref = useRef<HTMLDivElement | null>(null);
  const parallax = useMemo(() => createParallax(), []);

  useLayoutEffect(() => {
    let af: number | undefined;

    const update = () => {
      if (!ref.current) return;
      const { left, right, top, bottom } = ref.current.getBoundingClientRect();
      const x = ((left + right) * 0.5) / window.innerWidth - 0.5;
      const y = ((top + bottom) * 0.5) / window.innerHeight - 0.5;
      parallax.next(x, y);
    };

    const onScroll = () => {
      if (af != null) return;

      af = requestAnimationFrame(() => {
        af = undefined;
        update();
      });
    };

    update();
    window.addEventListener('scroll', onScroll, { capture: true });

    return () => window.removeEventListener('scroll', onScroll, { capture: false });
  }, [parallax]);

  return (
    <div className={className} ref={ref}>
      <ParallaxContext.Provider value={parallax}>{children}</ParallaxContext.Provider>
    </div>
  );
};

const ParallaxRoot = styled(ParallaxRootBase)`
  position: relative;
`;

export { ParallaxRoot };
