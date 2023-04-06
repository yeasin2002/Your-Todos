import React, { useState } from 'react';
import InputProfile from '../../../compontns/InputProfile';

const ChangeUserName = ({ setIsNextStep, IsNextStep }) => {
  const [UserNameChild, setUserNameChild] = useState(false);
  return (
    <div>
      {IsNextStep && (
        <button
          onClick={() => {
            setIsNextStep(false);
            setUserNameChild(true);
          }}
          className="btn__primary"
        >
          Change UserName
        </button>
      )}

      {IsNextStep ||
        (UserNameChild && (
          <form
            onSubmit={e => {
              e.preventDefault();
              setUserNameChild(false);
              IsNextStep(true);
            }}
          >
            <InputProfile
              labelFor="Change-UserName"
              inputType="email"
              labelId="Change-UserName"
              inputPlaceholder="example@gmail.com"
            >
              user name
            </InputProfile>
            <InputProfile
              labelFor="Current password"
              inputType="password"
              labelId="Current password"
            >
              Current password
            </InputProfile>
            <div className=" gap-x-2 flex">
              <button type="submit" className="btn__primary ">
                Save
              </button>
              <button
                className="btn__primary "
                onClick={() => {
                  setIsNextStep(true);
                  setUserNameChild(false);
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

export default ChangeUserName;
