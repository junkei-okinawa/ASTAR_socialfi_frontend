import { useEffect, useState } from 'react';

const useLocalStorage = (key: any, initialValue: any) => {

  const [value, setValue] = useState(() => {
    if (typeof window !== "undefined") {
      const keyValue = localStorage.getItem(key);
      return keyValue ? JSON.parse(keyValue) : initialValue;
    };
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;