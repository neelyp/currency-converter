import React, { useState } from 'react';

const TextCode = ({ getCode, chk }) => {
  const [code, setCode] = useState('USD');

  return (
    <div style={{ display: 'inline-block' }}>
      <input
        value={code}
        onChange={(e) => {
          if (!(code === chk)) setCode(e.target.value.toUpperCase());
        }}
        type="text"
        placeholder="Enter Target Currency Code"
        className="in"
      />
      <input type="button" value="Submit" onClick={() => getCode(code)} />
    </div>
  );
};

export default TextCode;
