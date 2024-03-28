import React, { useEffect, useState } from 'react';
import './App.css';
import { Input } from './components/Input.jsx';
import Value from './components/Value.jsx';
import FakeValue from './components/FakeValue.jsx';

function App() {
  const [code, setCode] = useState('USD');
  const [amnt, setAmnt] = useState(1);
  const [symbol, setSymbol] = useState('$');
  const [calls, setCalls] = useState(300);
  const [hasApi, setHasApi] = useState(true);

  const status =
    'https://api.currencyapi.com/v3/status?apikey=cur_live_aU2XilzSH1vbQsTvlNpF9rezBFyyQs03NIGd1p1y'; // url for status api

  // get api calls remaining
  useEffect(() => {
    fetch(status)
      .then((res) => res.json())
      .then((res) => {
        setCalls(res.quotas.month.remaining);

        if (calls <= 0) {
          setHasApi(false);
        }
      });
  }, [code]);

  const giveCode = (e) => setCode(e);
  const giveSymbol = (e) => setSymbol(e);
  const giveAmnt = (e) => setAmnt(e);

  return (
    <div className="center">
      <>
        <Input
          giveCode={giveCode}
          giveSymbol={giveSymbol}
          giveAmnt={giveAmnt}
        />
        {hasApi ? (
          <div>
            <Value code={code} amnt={amnt} symbol={symbol} />
            <p style={{ color: '#B6E2D3' }}>
              API calls left this month: {calls}
            </p>
          </div>
        ) : (
          <FakeValue code={code} amnt={amnt} symbol={symbol} />
        )}
      </>
    </div>
  );
}

export default App;
