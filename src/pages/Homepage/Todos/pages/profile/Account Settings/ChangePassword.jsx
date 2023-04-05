import React, { useState } from 'react';
import InputProfile from '../../../compontns/InputProfile';

const ChangePassword = ({ setIsNextStep, IsNextStep }) => {
  const [childVisibility, setChildVisibility] = useState(false);
  return (
    <div>
      {IsNextStep && (
        <button
          className="btn__primary"
          onClick={() => {
            setChildVisibility(true);
            setIsNextStep(false);
          }}
        >
          ChangePassword
        </button>
      )}
      {IsNextStep || (
        <form
          onSubmit={e => {
            e.preventDefault();
            setIsNextStep(true);
          }}
        >
          <InputProfile
            labelFor="ChangeEmail-input"
            inputPlaceholder="exm@gmail.com"
            inputType="email"
            labelId="ChangeEmail-input"
          ></InputProfile>
        </form>
      )}
    </div>
  );
};

export default ChangePassword;
