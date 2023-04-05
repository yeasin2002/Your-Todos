import React from 'react';
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
  let { _id, username, name, avatar } = userData.user;

  return (
    <div className=" w-full h-full">
      <UpdateUser userData={{ _id, username, name, avatar }} />
      <div>
        <ChangeEmail />
        <ChangePassword />
        <ChangeUserName />
        <DeleteAccount />
      </div>
    </div>
  );
};
export default AccountSettings;
