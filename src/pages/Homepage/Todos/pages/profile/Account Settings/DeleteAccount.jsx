import React from 'react';

const DeleteAccount = ({ setIsNextStep, IsNextStep }) => {
  return (
    <div>
      {IsNextStep && (
        <button className="btn__primary bg-red-600">DeleteAccount</button>
      )}
    </div>
  );
};

export default DeleteAccount;
