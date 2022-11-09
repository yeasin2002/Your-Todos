import React from 'react';

const InputField = ({
  inputType,
  title,
  labelFor,
  placeholderValue,
  customStyle = '',
  IsRequired = false,
}) => {
  return (
    <>
      <label htmlFor={labelFor}>
        <p>{title} </p>
      </label>
      <input
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
