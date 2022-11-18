import React from 'react';
import LoaderImg from '../assests/loading/loader.svg';

const Loading = () => {
  return (
    <div className="w-ful h-ful flex items-center justify-center">
      <img src={LoaderImg} alt="Loading............!" />
    </div>
  );
};

export default Loading;
