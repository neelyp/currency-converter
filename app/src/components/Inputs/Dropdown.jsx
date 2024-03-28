import React from 'react';

const Dropdown = ({ options, handleChange, code, chk }) => {
  return (
    <select
      value={code}
      onChange={(e) => {
        const value = e.target.value;
        chk !== value
          ? handleChange(value)
          : console.error("Value didn't change");
      }}
      placeholder="USD">
      {Object.keys(options).map((key) => (
        <option
          className="in"
          key={options[key].code}
          value={options[key].code}>
          {options[key].name}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
