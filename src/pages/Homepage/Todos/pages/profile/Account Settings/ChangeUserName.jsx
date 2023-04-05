import React from 'react';

const ChangeUserName = ({ setIsNextStep, IsNextStep }) => {
  return (
    <div>
      {IsNextStep && <button className="btn__primary">ChangeUserName</button>}
    </div>
  );
};

export default ChangeUserName;
