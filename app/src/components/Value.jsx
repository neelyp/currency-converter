import React, { useEffect, useState } from 'react';

const Value = ({ code, amnt, symbol }) => {
  const api =
    'https://api.currencyapi.com/v3/latest?apikey=cur_live_aU2XilzSH1vbQsTvlNpF9rezBFyyQs03NIGd1p1y&currencies=';

  const [val, setVal] = useState(0);

  useEffect(() => {
    if (code) {
      console.log(code);
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
      <code>
        {symbol}
        {(val * amnt).toFixed(2).toLocaleString()}
      </code>
    </div>
  );
};

export default Value;
