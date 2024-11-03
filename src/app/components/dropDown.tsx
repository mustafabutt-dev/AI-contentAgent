import React, { useEffect, useState } from 'react';

const Dropdown = ({ name, options, label, onChange }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="dropdown" >
      {label && <label>{label}</label>}
      <select required name={name} value={selectedValue} onChange={handleChange} className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
        <option value="" disabled>
         ---
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
      <style jsx>{`
        .dropdown {
          margin-bottom: 16px;
        }
        label {
          margin-right: 8px;
        }
        select {
          padding: 8px;
          font-size: 16px;
        }
      `}</style>
    </div>
  );
};

export default Dropdown;