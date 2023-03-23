import React from 'react';
import { Link } from 'react-router-dom';

const SB_btn = ({
  backgroundColor = 'bg-red-800',
  title = '',
  whereTo = '/',
}) => {
  return (
    <Link to={whereTo}>
      <div
        className={`${backgroundColor} transition-all  w-full px-4 py-2 my-2 rounded-md`}
      >
        {title}
      </div>
    </Link>
  );
};
export default SB_btn;
