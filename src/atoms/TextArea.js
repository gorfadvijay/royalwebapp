import React from "react";

function TextArea({  label, placeholder, name }) {
  return (
    <div>
      <div className="mt-5 flex flex-col">
        <textarea
          name={name}
          placeholder={placeholder}
          className="w-full  resize-none h-[115px] border capitalize text-[#677B84]  focus:border-[#E6E6E6] border-[#E6E6E6] ring-0 focus:ring-0 outline-none  placeholder-[#677B84] px-4 py-2"
        />
        {/* {error && (
          <div className="text-[#FF7171] text-[12px] flex items-center">
            <div className="ml-1">{error.message}</div>
          </div>
        )} */}
      </div>
    </div>
  );
}

export default TextArea;