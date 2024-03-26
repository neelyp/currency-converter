import React from 'react';

const Dropdown = ({ options, handleChange, code, chk }) => {
  return (
    <select
      value={code}
      onChange={(e) =>
        chk !== e.target.value ? handleChange : console.log('e')
      }
      placeholder="USD">
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
