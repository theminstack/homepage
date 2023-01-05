import { useMemo } from 'react';

type Entry<TValue extends {}> = {
  readonly expiration: number;
  readonly value: TValue;
};

type Cache<TValue extends {}> = {
  readonly get: () => TValue | null;
  readonly set: (value: TValue, lifetime?: number) => TValue;
};

const useCache = <TValue extends {}>(key: {}): Cache<TValue> => {
  const keyString = JSON.stringify(key);
  const cache: Cache<TValue> = useMemo<Cache<TValue>>(() => {
    return {
      get: () => {
        const json = window.localStorage.getItem(keyString);
        const entry = json == null ? null : (JSON.parse(json) as Entry<TValue>);
        return entry && entry.expiration > Date.now() ? entry.value : null;
      },
      set: (value, lifetime = Number.POSITIVE_INFINITY) => {
        const entry: Entry<TValue> = { expiration: Date.now() + lifetime, value };
        const json = JSON.stringify(entry);
        window.localStorage.setItem(keyString, json);
        return JSON.parse(json);
      },
    };
  }, [keyString]);

  return cache;
};

export { useCache };
