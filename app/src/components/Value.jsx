import React, { useEffect, useState } from 'react';

const Value = ({ code, amnt, symbol }) => {
  const api = 'testApi.json';
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (code) {
      fetch(api)
        .then((res) => res.json())
        .then((res) => setVal(res.data[code].value))
        .catch((e) => console.error(e));
    }
  }, [code]);

  // TODO: optimize api call so it doesn't call it twice on load
  // otherwise ill lose my free calls

  return (
    <div>
      <money>
        {symbol}
        {(val * amnt).toFixed(2).toLocaleString()}
      </money>
    </div>
  );
};

export default Value;
