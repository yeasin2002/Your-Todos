import React, { useState } from 'react';
import { useContext } from 'react';

import { UserContext } from '../../../../../context/UserContext';

//  sub component
import UpdateUser from './Account Settings/UpdateUser';
import ChangeEmail from './Account Settings/ChangeEmail';
import ChangePassword from './Account Settings/ChangePassword';
import ChangeUserName from './Account Settings/ChangeUserName';
import DeleteAccount from './Account Settings/DeleteAccount';

const AccountSettings = () => {
  let userData = useContext(UserContext);
  const [IsNextStep, setIsNextStep] = useState(true);
  let { _id, username, name, avatar } = userData.user;

  return (
    <div className=" lg:w-2/4 lg:mx-auto flex flex-col w-full h-full p-2 px-2">
      <UpdateUser
        setIsNextStep={setIsNextStep}
        userData={{ _id, username, name, avatar }}
      />
      <div>
        <ChangeEmail setIsNextStep={setIsNextStep} IsNextStep={IsNextStep} />
        <ChangePassword setIsNextStep={setIsNextStep} IsNextStep={IsNextStep} />
        <ChangeUserName setIsNextStep={setIsNextStep} IsNextStep={IsNextStep} />
        <DeleteAccount setIsNextStep={setIsNextStep} IsNextStep={IsNextStep} />
      </div>
    </div>
  );
};
export default AccountSettings;
