import { styled } from '@minstack/styled';
import { type ReactNode, useLayoutEffect, useRef } from 'react';

import { useParallax } from '../../hooks/use-parallax.js';

type Props = {
  readonly children?: ReactNode;
  readonly className?: string;
  readonly scale?: string;
  readonly xOffset?: string;
  readonly xScale?: string;
  readonly yOffset?: string;
  readonly yScale?: string;
};

const ParallaxLayerBase = ({
  className,
  children,
  scale = '0px',
  xScale = scale,
  yScale = scale,
  xOffset = '0',
  yOffset = '0',
}: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const parallax = useParallax();

  useLayoutEffect(() => {
    if (xScale === '0' && yScale === '0') return;

    return parallax?.subscribe((x, y) => {
      if (!ref.current) return;
      ref.current.style.top = `calc(calc(${y} * ${yScale}) + ${yOffset})`;
      ref.current.style.left = `calc(calc(${x} * ${xScale}) + ${xOffset})`;
    });
  }, [parallax, xScale, yScale, xOffset, yOffset]);

  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  );
};

const ParallaxLayer = styled(ParallaxLayerBase)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  user-select: none;
`;

export { ParallaxLayer };
