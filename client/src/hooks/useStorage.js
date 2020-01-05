import React from 'react';

export default function useStorage(key, defaultValue) {
  let initialValue;
  try {
    const item = sessionStorage.getItem(key);
    initialValue = JSON.parse(item) || defaultValue;
  } catch (error) {
    initialValue = defaultValue;
  }

  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
