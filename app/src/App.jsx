import React, { useState } from 'react';
import './App.css';
import { Input } from './components/Input.jsx';
import Value from './components/Value.jsx';

function App() {
  const [load, setLoad] = useState(true);

  const [code, setCode] = useState('USD');
  const [amnt, setAmnt] = useState(1);
  const [symbol, setSymbol] = useState('$');

  const handleEvent = () => setLoad(false);

  const giveCode = (e) => setCode(e);
  const giveSymbol = (e) => setSymbol(e);
  const giveAmnt = (e) => setAmnt(e);

  return (
    <React.Fragment>
      {/* {load ? (
        <p>Loading...</p>
      ) : (
        <div>
          <Input onLoad={handleEvent} />
        </div>
      )} */}

      <Input giveCode={giveCode} giveSymbol={giveSymbol} giveAmnt={giveAmnt} />
      <br />
      <Value code={code} amnt={amnt} symbol={symbol} />
    </React.Fragment>
  );
}

export default App;
