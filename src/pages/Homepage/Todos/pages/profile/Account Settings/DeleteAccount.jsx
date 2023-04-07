import React, { useState } from 'react';
import ConfirmDelete from '../../../../../../components/ConfirmDelete';
import InputProfile from '../../../compontns/InputProfile';

const DeleteAccount = ({ setIsNextStep, IsNextStep }) => {
  const [GoForDeleteProcess, setGoForDeleteProcess] = useState(false);
  return (
    <div>
      {IsNextStep && (
        <button
          onClick={() => {
            setIsNextStep(false);
            setGoForDeleteProcess(true);
          }}
          className="btn__primary bg-red-600"
        >
          Delete Account
        </button>
      )}
      {IsNextStep ||
        (GoForDeleteProcess && (
          <div>
            <InputProfile
              labelFor="Current-password"
              inputType="password"
              labelId="Current-password"
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
                  setGoForDeleteProcess(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default DeleteAccount;
