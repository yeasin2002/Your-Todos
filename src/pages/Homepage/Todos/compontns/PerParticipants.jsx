import React from 'react';

import deleteIcon from '../../../../assests/icons/delete.svg';
import defaultProfile from '../../../../assests/img/contributorProfilePic.jpg';

const PerParticipants = () => {
  return (
    <div className="bg-sky-250 toTheCenter flex px-4 py-2">
      <img src={defaultProfile} alt="" className="w-6 rounded-full" />
      <p>title </p>
      <div className="toTheCenter gap-x-2">
        <select name="role" className="bg-sky-250 ">
          <option value="admin">admin </option>
          <option value="moderator">moderator</option>
          <option value="assigner">assigner</option>
        </select>
        <img src={deleteIcon} alt="delete" className="w-4" />
      </div>
    </div>
  );
};

export default PerParticipants;
