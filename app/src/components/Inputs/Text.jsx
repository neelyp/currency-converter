import React, { useEffect, useState } from 'react';

const Text = ({ getAmnt }) => {
  const [amnt, setAmnt] = useState(1);

  useEffect(() => getAmnt(amnt), [amnt]);

  return (
    <div className="amnt-text">
      <input
        value={amnt}
        onChange={(e) => {
          const value = parseFloat(e.target.value);

          const new_ = isNaN(value) || (value === 0) === NaN ? 0 : value;
          setAmnt(new_);
        }}
        type="text"
        placeholder="Enter number of USD"
        className="in"
      />

      <input type="button" value="clear" onClick={() => setAmnt('')} />
    </div>
  );
};

export default Text;
