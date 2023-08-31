import React, { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const options = [
    'MPCVD Machine',
    'Green Sawing Machine',
    '4P Galvo Machine',
    'Fiber 4P Machine',
    'Laser 4P Machine',
    'Laser Sawing  Multi Sawing Machine',
  ];
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setIsOpen(false);
    // Handle the selected option here, like calling a function or updating state
    console.log(`Selected option: ${option}`);
  };


  return (
    <div className="relative inline-block text-left justify-start items-start text-[18px] font-medium leading-[22px] text-black mx-4 cursor-pointer">
      <div>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            onClick={toggleDropdown}
            className="inline-flex justify-center w-full  px-4 py-2 bg-white  font-medium text-gray-700 hover:bg-gray-50 focus:outline-none text-[18px] leading-[22px] text-black mx-4 cursor-pointer"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
          >
          Service
            {/* <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg> */}
          </button>
        </span>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 h-[17rem] w-[17rem]  rounded-br-[90px] shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleOptionSelect(option)}
                className="block px-4 py-2 text-left justify-start items-start text-[18px] font-medium leading-[22px] text-black mx-4 cursor-pointer"
                role="menuitem"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
