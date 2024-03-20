import React from "react";

const Text = ({ getAmnt }) => {
  return (
    <input
      onChange={(e) => {
        const value = e.target.value;
        let amnt;

        if (!value) {
          amnt = 1;
        } else {
          amnt = parseFloat(value);
        }
        getAmnt(amnt);
      }}
      type="text"
      placeholder="Enter number of USD"
    />
  );
};

export default Text;
