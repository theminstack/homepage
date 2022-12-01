import { useContext } from 'react';

import { type Parallax, ParallaxContext } from '../contexts/parallax.js';

const useParallax = (): Pick<Parallax, 'subscribe'> | null => useContext(ParallaxContext);

export { useParallax };
