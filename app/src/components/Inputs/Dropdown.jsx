import React from "react";

const Dropdown = ({ options, handleChange, code, chk }) => {
  return (
    <select
      value={code}
      onChange={(e) => {
        const value = e.target.value;
        chk !== value ? handleChange(value) : console.log("e");
        // handleChange
      }}
      placeholder="USD"
    >
      {console.log(code)}
      {Object.keys(options).map((key) => (
        <option key={options[key].code} value={options[key].code}>
          {options[key].name}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
