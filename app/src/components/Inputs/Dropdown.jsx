import React from 'react'

const Dropdown = ({ options, handleChange }) => {
  return (
    <select onChange={handleChange} placeholder='USD'>
        {Object.keys(options).map((key) => {
          if (key === "USD") {
            return (
              <option selected value={options[key].code}>
                {options[key].name}
              </option>
            );
          } else {
            return (
              <option key={options[key].code} value={options[key].code}>
                {options[key].name}
              </option>
            );
          }
        })}
      </select>
  )
}

export default Dropdown;
