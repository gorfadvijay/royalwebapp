import React from "react";
const InputType = ({
  name,

  label,
  placeholder,
  type,
  maxLength,
  className,
  disabled,
  onFocus,
  onBlur,
  max,
  register,
}) => {
  return (
    <div className="flex flex-col w-full">
      <input
        className={`${className} h-12 border text-[#677B84] focus:border-[#E6E6E6] border-[#E6E6E6] ring-0 focus:ring-0 outline-none  placeholder-[#677B84] px-4`}
        name={name}
        label={label}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        maxLength={maxLength}
        onFocus={onFocus}
        onBlur={onBlur}
        max={max}
      />

      {/* {error && (
        <div className="text-[#FF7171] text-[12px] flex items-center">
          <div className="ml-1">{error.message}</div>
        </div>
      )} */}
    </div>
  );
};

export default InputType;