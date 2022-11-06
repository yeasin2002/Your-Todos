import React from 'react';

const InputField = ({ inputType, title, labelFor, placeholderValue }) => {
  return (
    <>
      <label htmlFor={labelFor}>
        <p>{title} </p>
      </label>
      <input
        id={labelFor}
        type={inputType}
        className="w-full bg-[#D9E1F2] py-2 rounded-md my-2 placeholder:px-4 placeholder:text-[#3960AC]"
        placeholder={placeholderValue}
      />
    </>
  );
};

export default InputField;
