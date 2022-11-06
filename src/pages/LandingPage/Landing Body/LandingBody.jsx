import React from 'react';
import LeftPart from './LeftPart';
import RightPart from './RightPart';

const LandingBody = () => {
  return (
    <div className="gap-x-2 md:grid-cols-2 grid items-center grid-cols-1">
      <LeftPart />
      <RightPart />
    </div>
  );
};

export default LandingBody;
