import React, { useEffect, useState } from 'react';

const FakeValue = ({ code, amnt, symbol }) => {
  const api = 'testApi.json';
  const [val, setVal] = useState(0);
  const [date, setDate] = useState('');

  useEffect(() => {
    if (code) {
      console.log(code);
      fetch(api)
        .then((res) => res.json())
        .then((res) => {
          setVal(res.data[code].value);
          let d = res.meta.last_updated_at.split('-');
          d[2] = d[2].substring(0, 2);
          setDate(`${d[1]}/${d[2]}/${d[0]}`);
        })
        .catch((e) => console.error(e));
    }
  }, [code]);

  return (
    <div>
      <code>
        {symbol}
        {(val * amnt).toFixed(2).toLocaleString()}
      </code>
      <p>Ran out of free API calls... (Data from {date})</p>
    </div>
  );
};

export default FakeValue;
