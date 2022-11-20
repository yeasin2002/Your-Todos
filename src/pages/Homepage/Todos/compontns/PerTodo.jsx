import React from 'react';

// assets
import timeIcon from '../../../../assests/icons/timeAndDate.svg';
import contributorImg from '../../../../assests/img/contributorProfilePic.jpg';
const PerTodo = () => {
  return (
    <div className="bg-sky-250  px-4 py-2">
      <div className=" flex justify-between">
        <h3>title</h3>
        <input type="checkbox" name="completeOrNot" id="completeOrNot" />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
        quod reiciendis saepe aliquid accusantium! Possimus animi nesciunt
        eligendi fuga quibusdam.
      </p>
      <div className=" w-full h-1 my-4 bg-blue-200"></div>

      <div className=" flex justify-between">
        <div className=" flex items-center">
          <img src={timeIcon} alt="time" className="w-8 h-8" />
          <span>12:30 AM</span>
        </div>
        <div className="flex mb-5 -space-x-4">
          <img
            className="contributorProfilePic"
            src={contributorImg}
            alt="contributor "
          />
          <img
            className="contributorProfilePic"
            src={contributorImg}
            alt="contributor "
          />
        </div>
      </div>
    </div>
  );
};

export default PerTodo;
