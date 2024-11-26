import { useState, useEffect } from 'react';

const useCurrencyInfo = currency => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => setData(data['rates']))
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, [currency]);
  return data;
};

export default useCurrencyInfo;
