import React from 'react';

const UpdateUser = ({
  userData = {
    _id: '',
    username: '',
    name: '',
    avatar: '',
  },
}) => {
  let { _id, username, name, avatar } = userData;

  return (
    <div className="lg:w-2/4 lg:mx-auto flex flex-col w-full p-2 px-2">
      <img src={avatar} alt="" className="self-center w-24" />

      <div>
        <p className="lg:font-bold text-xl font-medium">Full Name</p>
        <input
          type="text"
          placeholder={name}
          className="bg-slate-200 w-full p-2 border-none rounded-md outline-none"
        />
        <br />
        <button className="bg-primary w-full py-2 my-2 text-white rounded-lg">
          Save
        </button>
      </div>
    </div>
  );
};

export default UpdateUser;
