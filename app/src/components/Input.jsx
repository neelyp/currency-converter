import React, { useEffect, useState } from 'react';
import Value from './Value';
import Text from './Inputs/Text';
import Dropdown from './Inputs/Dropdown';

export const Input = ({ giveCode, giveSymbol, giveAmnt }) => {
  const info = 'currencyInfoTest.json';

  const [options, setOptions] = useState({});
  const [loading, setLoading] = useState(true);
  const [code, setCode] = useState('USD');
  const [amnt, setAmnt] = useState(1);
  const [symbol, setSymbol] = useState('$');

  const getInfo = () => {
    const ar = {};
    fetch(info)
      .then((res) => res.json())
      .then((res) => {
        const data = res.data;
        Object.keys(data).map(
          (key) =>
            (ar[key] = {
              code: key,
              name: data[key].name_plural,
              symbol: data[key].symbol_native,
            })
        );

        setOptions(ar);
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setLoading(false);
      });
  };

  useEffect(() => {
    getInfo();
  }, []);

  useEffect(() => {
    if (Object.keys(options).length > 0) setSymbol(options[code].symbol);
  }, [code]);

  // give code, amnt, and symbol to main so it is passed to value
  useEffect(() => giveCode(code), [code]);
  useEffect(() => giveAmnt(amnt), [amnt]);
  useEffect(() => giveSymbol(symbol), [symbol]);

  return (
    <div>
      <Text getAmnt={(amnt) => setAmnt(amnt)} />
      <Dropdown
        options={options}
        handleChange={(e) => setCode(e.target.value)}
      />
    </div>
  );
};
