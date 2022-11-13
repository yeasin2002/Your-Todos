import React from 'react';

const InputField = ({
  inputType,
  title,
  labelFor,
  placeholderValue,
  customStyle = '',
  IsRequired = false,

  // state and Handler
  inputValue = '' | 0,
  inputValueHandler,
}) => {
  const inputHandler = e => {
    inputValueHandler(e.target.value);
  };

  return (
    <>
      <label htmlFor={labelFor}>
        <p>{title} </p>
      </label>
      <input
        onChange={inputHandler}
        value={inputValue}
        required={IsRequired}
        id={labelFor}
        type={inputType}
        className={`w-full bg-[#D9E1F2] py-2 outline-1 outline-primary text-primary rounded-md my-2 placeholder:px-4 placeholder:text-[#3960AC] ${customStyle}`}
        placeholder={placeholderValue}
      />
    </>
  );
};

export default InputField;
