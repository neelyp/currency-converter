import React, { useEffect, useState } from "react";

const Value = ({ code, amnt, symbol }) => {
  const api = "testApi.json";
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (code) {
      fetch(api)
        .then((res) => res.json())
        .then((res) => setVal(res.data[code].value))
        .catch((e) => console.error(e));
    }
  }, [code]);

  return (
    <div className="money">
      {symbol}
      {(val * amnt).toFixed(2).toLocaleString()}
    </div>
  );
};

export default Value;
