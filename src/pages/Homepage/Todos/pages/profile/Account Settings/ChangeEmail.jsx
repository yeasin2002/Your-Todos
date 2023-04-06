import React, { useState } from 'react';
import InputProfile from '../../../compontns/InputProfile';

const ChangeEmail = ({ setIsNextStep, IsNextStep }) => {
  const [IsShown, setIsShown] = useState(false);
  return (
    <div className="my-5">
      {IsNextStep && (
        <button
          className="btn__primary"
          onClick={() => {
            setIsNextStep(false);
            setIsShown(true);
          }}
        >
          Change Email
        </button>
      )}
      {IsNextStep ||
        (IsShown && (
          <form
            onSubmit={e => {
              e.preventDefault();
            }}
          >
            <InputProfile
              labelFor="ChangeEmail-input"
              inputPlaceholder="exm@gmail.com"
              inputType="email"
              labelId="ChangeEmail-input"
            >
              Email
            </InputProfile>
            <div className=" gap-x-2 flex">
              <button type="submit" className="btn__primary ">
                Save
              </button>
              <button
                className="btn__primary "
                onClick={() => {
                  setIsNextStep(true);
                  setIsShown(false);
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        ))}
    </div>
  );
};
export default ChangeEmail;
