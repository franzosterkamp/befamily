import React from 'react';

export default function useGetFetch(url) {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    async function doFetch() {
      const response = await fetch(url);
      const newPlaces = await response.json();
      setData(newPlaces);
    }
    doFetch();
  }, []);

  return data;
}
