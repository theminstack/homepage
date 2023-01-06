import { useMemo } from 'react';

type Entry<TValue extends {}> = {
  readonly expiration: number;
  readonly value: TValue;
};

type Cache<TValue extends {}> = {
  readonly get: () => [value: null, isFresh: false] | [value: TValue, isFresh: boolean];
  lifetime: number;
  readonly resolve: (
    get: (...args: [value: null, isFresh: false] | [value: TValue, isFresh: boolean]) => Promise<TValue>,
    lifetime?: number,
  ) => Promise<TValue>;
  readonly set: (value: TValue, lifetime?: number) => TValue;
};

type CacheOptions = {
  lifetime?: number;
  storage?: Pick<Storage, 'getItem' | 'setItem'>;
};

const createCache = <TValue extends {}>(key: {}, options: CacheOptions = {}): Cache<TValue> => {
  let pending: Promise<any> | undefined;
  const { lifetime: defaultLifetime = 0, storage = window.localStorage } = options;
  const keyString = `cache-key:${JSON.stringify(key)}`;
  const self: Cache<TValue> = {
    get: () => {
      const json = storage.getItem(keyString);
      const entry = json == null ? null : (JSON.parse(json) as Entry<TValue>);
      return entry ? [entry.value, entry.expiration > Date.now()] : [null, false];
    },
    lifetime: defaultLifetime,
    resolve: async (get, lifetime) => {
      const promise = Promise.all([pending, get(...self.get())]).then((result) => self.set(result[1], lifetime));
      pending = promise.catch(() => undefined);
      return promise;
    },
    set: (value, lifetime = self.lifetime) => {
      const entry: Entry<TValue> = { expiration: Date.now() + lifetime, value };
      const json = JSON.stringify(entry);
      storage.setItem(keyString, json);
      return (JSON.parse(json) as Entry<TValue>).value;
    },
  };

  return self;
};

const useCache = <TValue extends {}>(key: {}, options: CacheOptions = {}): Cache<TValue> => {
  const keyJson = JSON.stringify(key);
  const { lifetime: defaultLifetime = 0, storage } = options;
  const cache: Cache<TValue> = useMemo(() => createCache(JSON.parse(keyJson), { storage }), [keyJson, storage]);
  cache.lifetime = defaultLifetime;

  return cache;
};

export { useCache };
