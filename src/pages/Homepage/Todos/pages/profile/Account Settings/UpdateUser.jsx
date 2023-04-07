import React from 'react';

//  additional
import { BaseUrl } from './../../../../../../api/api';

const UpdateUser = ({
  userData = {
    _id: '',
    username: '',
    name: '',
    avatar: '',
  },
  setIsNextStep,
  IsNextStep,
}) => {
  let { _id, username, name, avatar } = userData;

  const updateUserFetch = async e => {
    e.preventDefault();
    console.log('clicked');

    try {
      let userStorage = localStorage.getItem('userToken');
      console.log(userStorage);
      let req = await fetch(`${BaseUrl}/user`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authentication: 'Bearer ' + userStorage,
        },
        body: JSON.stringify({
          name: e.target?.elements?.newNameOfUser?.value,
          avatar: e.target?.elements?.selectAvatar?.value,
        }),
      });
      let res = await req.json();
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={updateUserFetch} className=" w-full my-8">
      <label htmlFor="selectAvatar">
        <img src={avatar} alt="" className=" w-24 mx-auto" />
      </label>

      <input
        type="file"
        name="selectAvatar"
        id="selectAvatar"
        className="hidden"
      />

      <div>
        <p className="lg:font-bold text-xl font-medium">Full Name</p>
        <div>
          <input
            type="text"
            placeholder={name}
            name="newNameOfUser"
            className="bg-slate-200 w-full p-2 border-none rounded-md outline-none"
          />
          <br />
          <button
            type="submit"
            className="bg-primary w-full py-2 my-2 text-white rounded-lg"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default UpdateUser;
