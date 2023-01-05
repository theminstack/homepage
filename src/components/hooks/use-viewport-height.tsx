import { useEffect, useState } from 'react';

const useViewportHeight = (): number => {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    let af: number | undefined;

    const update = () => {
      if (af != null) return;

      af = requestAnimationFrame(() => {
        af = undefined;
        setHeight(() => window.innerHeight);
      });
    };

    update();
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('resize', update);
      af && cancelAnimationFrame(af);
    };
  }, []);

  return height;
};

export { useViewportHeight };
