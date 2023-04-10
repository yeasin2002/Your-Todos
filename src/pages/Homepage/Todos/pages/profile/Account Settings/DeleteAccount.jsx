import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';

import ConfirmDelete from '../../../../../../components/ConfirmDelete';
import { BaseUrl } from '../../../../../../api/api';
import logOut from '../../../../../../utils/logOut';

const DeleteAccount = ({ setIsNextStep, IsNextStep }) => {
  const [UserPass, setUserPass] = useState('');

  const [GoForDeleteProcess, setGoForDeleteProcess] = useState(false);
  const [ConfirmDeletePrompt, setConfirmDeletePrompt] = useState(false);

  const FinallyDlt = async e => {
    try {
      let userToken = localStorage.getItem('userToken');
      if (!userToken) {
        throw new Error('No token found');
      }

      let req = fetch(`${BaseUrl}/user/delete-me`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userToken}}`,
        },
        body: JSON.stringify({
          password: UserPass,
        }),
      });
    } catch (err) {
      console.error(err.message);
    }
  };
  const cancelHandler = e => {
    setIsNextStep(true);
    setGoForDeleteProcess(false);
    setConfirmDeletePrompt(false);
  };

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
          <form
            onSubmit={e => {
              e.preventDefault();

              setGoForDeleteProcess(false);
              setConfirmDeletePrompt(true);
            }}
          >
            {/*  take input start  */}
            <label htmlFor={'Current-password'}>
              <p className="lg:font-bold font-semibold">{'Current password'}</p>
            </label>
            <input
              onChange={e => setUserPass(e.target.value)}
              required
              type={'password'}
              className="input_profile"
              id={'Current-password'}
              name={'Current-password'}
            />
            {/*  take input end */}

            <div className=" gap-x-2 flex">
              <button type="submit" className="btn__primary ">
                Save
              </button>
              <button className="btn__primary ">Cancel</button>
            </div>
          </form>
        ))}
      {ConfirmDeletePrompt && (
        <ConfirmDelete
          okHandler={FinallyDlt}
          cancelHandler={cancelHandler}
          descriptionsMsg="This Account will be deleted"
          setConfirmDeletePrompt={setConfirmDeletePrompt}
        />
      )}
    </div>
  );
};

export default DeleteAccount;
