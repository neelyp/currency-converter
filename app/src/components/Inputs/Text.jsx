import React, { useEffect, useState } from 'react';

const Text = ({ getAmnt }) => {
  const [amnt, setAmnt] = useState(1);

  useEffect(() => getAmnt(amnt), [amnt]);

  return (
    <input
      value={amnt}
      onChange={(e) => {
        const value = parseFloat(e.target.value);

        const new_ = isNaN(value) || (value === 0) === NaN ? 0 : value;
        setAmnt(new_);
      }}
      type="text"
      placeholder="Enter number of USD"
    />
  );
};

export default Text;
