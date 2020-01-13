import React from 'react';

export default function useFetch(url) {
  const [data, setData] = React.useState(null);

  async function doFetch() {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  }

  React.useEffect(() => {
    doFetch();
  }, [url]);

  return [data, doFetch];
}
