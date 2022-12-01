import { createContext } from 'react';

type Parallax = {
  next: (x: number, y: number) => void;
  subscribe: (listener: (x: number, y: number) => void) => () => void;
};

const createParallax = (): Parallax => {
  const listeners = new Set<(x: number, y: number) => void>();
  let x = 0;
  let y = 0;

  return {
    next: (...args) => {
      [x, y] = args;
      listeners.forEach((listener) => listener(x, y));
    },
    subscribe: (listener) => {
      listener = listener.bind(null);
      listener(x, y);
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };
};

const ParallaxContext = createContext<Parallax | null>(null);

export { type Parallax, createParallax, ParallaxContext };
