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
          Change Password
        </button>
      )}
      {IsNextStep ||
        (childVisibility && (
          <form
            onSubmit={e => {
              e.preventDefault();
              setIsNextStep(true);
              setChildVisibility(false);
              console.log(e);
            }}
          >
            <InputProfile
              labelFor="Current-password"
              inputType="password"
              labelId="Current-password"
            >
              Current password
            </InputProfile>

            <InputProfile
              labelFor="New-Password"
              inputType="password"
              labelId="New-Password"
            >
              New Password
            </InputProfile>
            <InputProfile
              labelFor="Confirm -New-Password"
              inputType="password"
              labelId="Confirm -New-Password"
            >
              Confirm New Password
            </InputProfile>

            <div className=" gap-x-2 flex">
              <button type="submit" className="btn__primary">
                Save
              </button>
              <button
                onClick={() => {
                  setIsNextStep(true);
                  setChildVisibility(false);
                }}
                type="reset"
                className="btn__primary"
              >
                Cancel
              </button>
            </div>
          </form>
        ))}
    </div>
  );
};

export default ChangePassword;
