import React, { useEffect, useId, useState } from 'react';
import Text from './Inputs/Text';
import TextCode from './Inputs/TextCode';
import Dropdown from './Inputs/Dropdown';

export const Input = ({ giveCode, giveSymbol, giveAmnt }) => {
  const info = 'currencyInfoTest.json';

  const [options, setOptions] = useState({});
  const [code, setCode] = useState('USD');
  const [amnt, setAmnt] = useState(1);
  const [symbol, setSymbol] = useState('$');
  const [useDrop, setUseDrop] = useState(false);

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
      })
      .catch((e) => {
        console.error(e);
      });
  };

  useEffect(() => {
    getInfo();
  }, []);

  useEffect(() => {
    if (Object.keys(options).length > 0) {
      if (options[code]) setSymbol(options[code].symbol);
      else alert(`"${code}" isn't an available currency code!`);
    }
  }, [code]);

  // give code, amnt, and symbol to main so it is passed to value
  useEffect(() => giveCode(code), [code]);
  useEffect(() => giveAmnt(amnt), [amnt]);
  useEffect(() => giveSymbol(symbol), [symbol]);

  const chkId = useId();

  const getCode = (c) => setCode(c);

  function chk() {
    return code;
  }

  return (
    <div>
      <input
        className="check"
        onChange={() => setUseDrop(!useDrop)}
        type="checkbox"
        id={chkId}
      />
      <label htmlFor={chkId}>Toggle Dropdown</label>
      <br />
      <Text getAmnt={(amnt) => setAmnt(amnt)} />
      {useDrop ? (
        <Dropdown
          options={options}
          code={code}
          handleChange={(e) => setCode(e)}
        />
      ) : (
        <TextCode chk={chk} getCode={getCode} />
      )}
    </div>
  );
};
