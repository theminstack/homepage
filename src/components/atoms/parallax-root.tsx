import { styled } from '@minstack/styled';
import { type ReactNode, useEffect, useMemo, useRef } from 'react';

import { createParallax, ParallaxContext } from '../../contexts/parallax.js';

type Props = {
  readonly children?: ReactNode;
  readonly className?: string;
};

const ParallaxRootBase = ({ className, children }: Props): JSX.Element => {
  const ref = useRef<HTMLDivElement | null>(null);
  const parallax = useMemo(() => createParallax(), []);

  useEffect(() => {
    let af: number | undefined;

    const update = () => {
      if (af != null) return;

      af = requestAnimationFrame(() => {
        af = undefined;
        if (!ref.current) return;
        const { left, right, top, bottom } = ref.current.getBoundingClientRect();
        const x = ((left + right) * 0.5) / window.innerWidth - 0.5;
        const y = ((top + bottom) * 0.5) / window.innerHeight - 0.5;
        parallax.next(x, y);
      });
    };

    update();
    window.addEventListener('scroll', update, { capture: true });

    return () => {
      if (af != null) cancelAnimationFrame(af);
      window.removeEventListener('scroll', update, { capture: false });
    };
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
