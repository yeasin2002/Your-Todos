import React from 'react';

const InputProfile = ({
  labelId = '',
  labelFor = '',
  children = ' ',
  inputType = 'text',
  inputPlaceholder = '',
}) => {
  return (
    <>
      <label htmlFor={labelFor}>
        <p className="lg:font-bold font-semibold">{children}</p>
      </label>
      <input
        type={inputType}
        placeholder={inputPlaceholder}
        className="input_profile"
        id={labelId}
        name={labelId}
      />
    </>
  );
};

export default InputProfile;
