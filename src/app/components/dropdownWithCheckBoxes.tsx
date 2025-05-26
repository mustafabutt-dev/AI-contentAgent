import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface Option {
  label: string;
  value: string;
}

interface DropdownProps {
  name: string;
  options: Option[];
  label?: string;
  onChange?: (selected: Option[]) => void;
}

const DropdownWithCheckboxes = ({ name, options, label, onChange, parent }) => {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    const selectedOption = options.find((option) => option.value === value);

    if (!selectedOption) return;

    const updatedOptions = checked
      ? [...selectedOptions, selectedOption]
      : selectedOptions.filter((option) => option.value !== value);

    setSelectedOptions(updatedOptions);

    // Trigger the callback with updated option objects
    if (onChange) {
      onChange(updatedOptions);
    }

    // Close the dropdown after selection
    // setIsOpen(false);
  };

  const handleSelectAll = () => {
    if (selectedOptions.length === options.length) {
      setSelectedOptions([]); // Deselect all if all are selected
    } else {
      setSelectedOptions(options); // Select all options
    }

    // Trigger the callback with updated option objects
    if (onChange) {
      onChange(selectedOptions.length === options.length ? [] : options);
    }

    // Close the dropdown after selection
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if ((event.target as HTMLElement).closest('.dropdown') === null) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full dropdown">
      {label && <label className="block mb-2 font-medium text-gray-700">{label}</label>}
      <button
        type="button"
        onClick={toggleDropdown}
        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {selectedOptions.length > 0
          ? selectedOptions.map((option) => option.label).join(', ')
          : '---'}
        <span className="float-right">&#x2193;</span>
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
          <div className="max-h-48 overflow-y-auto">
            <label
              key="select-all"
              className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <input
                required
                type="checkbox"
                checked={selectedOptions.length === options.length}
                onChange={handleSelectAll}
                className="form-checkbox h-4 w-4 text-blue-600"
              />
              <span className="ml-2 text-gray-800">Select All</span>
            </label>
            {options.map((option) => (
              <label
                key={option.value}
                className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                <input
                  required
                  type="checkbox"
                  name={name}
                  value={option.value}
                  checked={selectedOptions.some((selected) => selected.value === option.value)}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-4 w-4 text-blue-600 mr-2"
                />
                {parent == "socials" ? <><Image src={`/images/${option.value}.png`} alt="Banner" width={20} height={20} priority /> <span className="ml-2 text-gray-800">{option.label}</span></>:<span className="ml-2 text-gray-800">{option.label}-({option.value})</span>}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownWithCheckboxes;

